export const sort1 = (data) => {
  if (!data || !Array.isArray(data)) {
    console.error("Sort1 Error: Invalid data");
    return;
  }

  const sort1Data = [...data];
  sort1Data.sort((d1, d2) => {
    if (d1.gender === d2.gender) {
      return d1.lastName.localeCompare(d2.lastName);
    }
    return d1.gender > d2.gender ? 1 : -1;
  });

  return sort1Data;
};

export const sort2 = (data) => {
  if (!data || !Array.isArray(data)) {
    console.error("Sort2 Error: Invalid data");
    return;
  }

  const sort2Data = [...data];
  sort2Data.sort((d1, d2) => {
    if (d1.dateOfBirth === d2.dateOfBirth) {
      return d1.lastName.localeCompare(d2.lastName);
    }
    return new Date(d1.dateOfBirth) - new Date(d2.dateOfBirth);
  });

  return sort2Data;
};

export const sort3 = (data) => {
  if (!data || !Array.isArray(data)) {
    console.error("Sort3 Error: Invalid data");
    return;
  }

  const sort3Data = [...data];
  sort3Data.sort((d1, d2) => d2.lastName.localeCompare(d1.lastName));

  return sort3Data;
};
