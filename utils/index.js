export const removeSpace = (str) => {
  if (!str) {
    console.error("Remove Space Error: Invalid param");
    return;
  }

  return str.replace(/\s+/g, "");
};

export const convertGender = (gender) => {
  if (!gender) {
    console.error("Convert Gender Error: Invalid param");
    return;
  }

  return gender === "M" ? "Male" : "Female";
};

export const convertDate = (date) => {
  if (!date) {
    console.error("Convert Date Error: Invalid param");
    return;
  }

  return date.replace(/-/g, "/");
};
