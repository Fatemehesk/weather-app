const addMapping = (values: number[], icon: string) => {
  values.forEach((val) => {
    ICON_MAP.set(val, icon);
  });
};
export const ICON_MAP = new Map();
addMapping([0, 1], "sun");
addMapping([2], "cloudSun");
addMapping([3], "cloud");
addMapping([45, 48], "fog");
addMapping([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "raining");
addMapping([71, 73, 75, 77, 85, 86], "snowflake");
addMapping([95, 96, 99], "storm");
