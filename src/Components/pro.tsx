import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import firebase from "firebase";
import "firebase/app";
import ArticleInputField from "../textFields/ArticleInputField";

export default function UpdateProduct({ value }: any) {
  const [values, setValues] = useState<any>(value);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [activeOptionIndex, setActiveOptionIndex] = useState<number>(0);

  useEffect(() => {
    if (!values.questionsList) {
      let questionList = values.questionsList;
      questionList = [
        {
          section_bannerLogo: "logo",
          section_title: "Title",
          section_description: "Info about section/component...",
          section_category: "Processor",
          question_title: "Question title",
          question_options: [
            {
              option: "Option 1",
              isCorrectAnswer: true,
            },
          ],
        },
      ];

      setValues({
        ...values,
        questionsList: questionList,
      });
    }
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    if (name === "title") {
      let slugifiedValue = value.replace(/\s+/g, "-").toLowerCase();

      setValues({
        ...values,
        [name]: value,
        slug: slugifiedValue,
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };
  const handleChangeMD = async (targetName: string, value: any) => {
    return setValues((prev: any) => ({
      ...prev,
      [targetName]: value,
    }));
  };
  const handleQuestionChange = (
    value: any,
    index: number,
    field: string,
    isMarkdown?: boolean
  ) => {
    let questionList = values.questionsList;
    questionList[index][field] = value;

    setValues({
      ...values,
      questionsList: questionList,
    });
  };
  const handleAddSection = () => {
    let questionList = values.questionsList;
    questionList = [
      ...values.questionsList,
      {
        section_bannerLogo: "logo",
        section_title: "Title",
        section_description: "Info about component...",
        section_category: "",
        question_title: "Question title",
        question_options: [
          {
            option: "Option 1",
            isCorrectAnswer: false,
          },
        ],
      },
    ];

    setValues({
      ...values,
      questionsList: questionList,
    });
  };
  const handleAddOption = () => {
    let questionList = values.questionsList; // need to return

    let newOption = [
      ...questionList[activeQuestionIndex].question_options,
      {
        option: `Option ${
          questionList[activeQuestionIndex].question_options.length + 1
        }`,
        isCorrectAnswer: false,
      },
    ];

    questionList[activeQuestionIndex].question_options = newOption;

    setValues({
      ...values,
      questionsList: questionList,
    });
  };

  // combine into 1
  const handleTypeChange = (type: any) => {
    const selectedType = type as
      | "laptops"
      | "desktops"
      | "headsets"
      | "mice"
      | "monitors";
    setValues({
      ...values,
      type: selectedType,
    });
  };
  const handleBrandChange = (type: any) => {
    setValues({
      ...values,
      brand: type,
    });
  };
  //
  const submitSet = async (): Promise<void> => {
    localStorage.setItem(
      "persisted-previous-challenge-details",
      JSON.stringify(values)
    );
    return firebase
      .firestore()
      .collection("retail_products")
      .doc("hp")
      .collection("products")
      .doc(values.title.toLowerCase().replace(/ /g, "-"))
      .set(
        {
          created: firebase.firestore.FieldValue.serverTimestamp(),
          ...values,
        },
        { merge: true }
      )
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(`${file.name}`);
      await fileRef.put(file);
      const fileUrl = await fileRef.getDownloadURL();

      if (values.productLogoUrls[index]) {
        const newImg = [...values.productLogoUrls];
        newImg[index] = fileUrl;

        setValues((values: any) => ({
          ...values,
          productLogoUrls: newImg,
        }));
      } else {
        setValues((values: any) => ({
          ...values,
          productLogoUrls: [...values.productLogoUrls, fileUrl],
        }));
      }
    }
  };
  const handleOptionChange = (value: any, index: number, field: string) => {
    let questionList = values.questionsList;
    questionList[activeQuestionIndex].question_options[index][field] = value;

    setValues({
      ...values,
      questionsList: questionList,
    });
  };

  return (
    <div className="update-products">
      <h1>Update Product</h1>
      <Grid xs={4} xl={6}>
        <Box display="flex" flexDirection="column" gap={2} my={2}>
          <div className="update-products__images">
            {Array.from(
              Array(values.productLogoUrls.length + 1),
              (_, index) => {
                return (
                  <div>
                    <div className="update-products__images__input">
                      <span>{index + 1}</span>
                      <input
                        type="file"
                        name="logoUrl"
                        onChange={(e) => {
                          handleFileChange(e, index);
                        }}
                      />
                    </div>
                    <img src={values.productLogoUrls[index]} width={250} />
                  </div>
                );
              }
            )}
          </div>

          <FormControl fullWidth margin="normal">
            <InputLabel required>Brand</InputLabel>
            <Select
              value={values.brand}
              onChange={(e) => {
                handleBrandChange(e.target.value);
              }}
            >
              <MenuItem value={"arize"}>Arize</MenuItem>
              <MenuItem value={"omen"}>OMEN</MenuItem>
              <MenuItem value={"hyperx"}>Hyper X</MenuItem>
              <MenuItem value={"poly"}>Poly</MenuItem>
              <MenuItem value={"z-by-hp"}>Z by HP</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel required>Product category</InputLabel>
            <Select
              value={values.type}
              onChange={(e) => {
                handleTypeChange(e.target.value);
              }}
            >
              <MenuItem value={"laptops"}>Laptops</MenuItem>
              <MenuItem value={"desktops"}>Desktops</MenuItem>
              <MenuItem value={"headsets"}>Headsets</MenuItem>
              <MenuItem value={"mice"}>Mice</MenuItem>
              <MenuItem value={"monitors"}>Monitors</MenuItem>
            </Select>
          </FormControl>

          <TextField
            name="title"
            label="Title"
            value={values.title}
            onChange={handleChange}
            required
          />

          <ArticleInputField
            objectState="technicalSpecs"
            setObjectState={handleChangeMD}
            objectValue={values.technicalSpecs}
          />

          <ArticleInputField
            objectState="description"
            setObjectState={handleChangeMD}
            objectValue={values.description}
          />

          <h2>Create quiz flow</h2>
          <Button
            onClick={() => {
              handleAddSection();
              setActiveQuestionIndex(values.questionsList.length);
            }}
            variant="contained"
          >
            Add section
          </Button>
          <ul className="update-products__questions">
            {values.questionsList &&
              values.questionsList.map((data: any, index: number) => {
                return (
                  <li className="update-products__questions__item">
                    <Button
                      onClick={() => {
                        setActiveQuestionIndex(index);
                      }}
                      variant={
                        index === activeQuestionIndex ? "contained" : "outlined"
                      }
                    >
                      Section {index + 1}
                      {data.section_category
                        ? `: ${data.section_category}`
                        : ""}
                    </Button>
                    {/* <SingleQuizSection data={data} index={index + 1} /> */}
                  </li>
                );
              })}
          </ul>
          <h3>
            Section {activeQuestionIndex + 1} of{" "}
            {values.questionsList && values.questionsList.length + 1}
            {values.questionsList &&
            values.questionsList[activeQuestionIndex].section_category
              ? `: ${values.questionsList[activeQuestionIndex].section_category}`
              : ""}
          </h3>
          <TextField
            name="section_title"
            label="Section title"
            value={
              values.questionsList &&
              values.questionsList[activeQuestionIndex].section_title
            }
            onChange={(e) => {
              handleQuestionChange(
                e.target.value,
                activeQuestionIndex,
                "section_title"
              );
            }}
            required
          />

          <TextField
            name="section_category"
            label="Component category"
            value={
              values.questionsList &&
              values.questionsList[activeQuestionIndex].section_category
            }
            onChange={(e) => {
              handleQuestionChange(
                e.target.value,
                activeQuestionIndex,
                "section_category"
              );
            }}
            required
          />

          <ArticleInputField
            objectState="section_description"
            setObjectState={(_: any, value: string) => {
              handleQuestionChange(
                value,
                activeQuestionIndex,
                "section_description"
              );
            }}
            objectValue={
              values.questionsList &&
              values.questionsList[activeQuestionIndex].section_description
            }
          />

          <h3>Question & Answers</h3>
          <Button
            onClick={(e) => {
              handleOptionChange(true, activeOptionIndex, "isCorrectAnswer");
            }}
            variant={
              values.questionsList &&
              values.questionsList[activeQuestionIndex].question_options[
                activeOptionIndex
              ].isCorrectAnswer
                ? "contained"
                : "outlined"
            }
          >
            {values.questionsList &&
            values.questionsList[activeQuestionIndex].question_options[
              activeOptionIndex
            ].isCorrectAnswer ? (
              <>
                {values.questionsList &&
                  values.questionsList[activeQuestionIndex].question_options[
                    activeOptionIndex
                  ].option}{" "}
                set as correct answer
              </>
            ) : (
              <>
                Set{" "}
                {values.questionsList &&
                  values.questionsList[activeQuestionIndex].question_options[
                    activeOptionIndex
                  ].option}{" "}
                correct answer
              </>
            )}
          </Button>
          <TextField
            name="question_title"
            label={`Question ${activeOptionIndex + 1} title`}
            value={
              values.questionsList &&
              values.questionsList[activeQuestionIndex].question_title
            }
            onChange={(e) => {
              handleQuestionChange(
                e.target.value,
                activeQuestionIndex,
                "question_title"
              );
            }}
            required
          />

          <TextField
            name="question_options"
            label={`Option ${activeOptionIndex + 1}`}
            value={
              values.questionsList &&
              values.questionsList[activeQuestionIndex].question_options[
                activeOptionIndex
              ].option
            }
            onChange={(e) => {
              handleOptionChange(e.target.value, activeOptionIndex, "option");
            }}
            required
          />

          <ul className="update-products__questions">
            <li>
              <Button
                variant="outlined"
                onClick={() => {
                  handleAddOption();
                }}
              >
                Add new option
              </Button>
            </li>
            {values.questionsList &&
              values.questionsList[activeQuestionIndex].question_options.map(
                (data: any, index: number) => {
                  return (
                    <li className="update-products__questions__item">
                      <Button
                        onClick={() => {
                          setActiveOptionIndex(index);
                        }}
                        variant={
                          index === activeOptionIndex ? "contained" : "outlined"
                        }
                      >
                        {data.option}
                        {data.section_category
                          ? `: ${data.section_category}`
                          : ""}
                      </Button>
                      {/* <SingleQuizSection data={data} index={index + 1} /> */}
                    </li>
                  );
                }
              )}
          </ul>

          <Button
            disabled={value === values}
            type="submit"
            variant="contained"
            onClick={() => submitSet()}
          >
            Update Product
          </Button>
        </Box>
      </Grid>
    </div>
  );
}
