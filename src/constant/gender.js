export const filterAge = [
  {
    label: "Select Age From",
    value: "",
  },
];

for (let age = 18; age <= 75; age++) {
  filterAge.push({
    label: age,
    value: age,
  });
}

export const filterBodyType = [
  {
    label: "Select Body type",
    value: "",
  },
  {
    label: "Slim",
    value: "Slim",
  },
  {
    label: "Average",
    value: "Average",
  },
  {
    label: "Heavy",
    value: "Heavy",
  },
];


export const genderJson = ["Male", "Female"]