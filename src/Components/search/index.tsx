import { ChangeEvent, MouseEventHandler, useEffect } from "react";
import { useState } from "react";

const Search: React.FC<{
  searchVal: string;
  setSearchVal: (value: string) => void;
  serachHandler:any;
}
> = ({searchVal,setSearchVal,serachHandler}) => {
  
  return (
    <div className="container mt-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          value={searchVal}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchVal(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={() => serachHandler()}>
            Search Weather
          </button>
        </div>
      </div>
    </div>
  );
};
export default Search;
