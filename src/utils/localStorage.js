const stepsKey = "STEPS-KEY";

export const updateLocalStorageSteps = (steps) => {
  localStorage.setItem(stepsKey, JSON.stringify(steps))
};

export const getLocalStorageSteps = () => {
  return JSON.parse(localStorage.getItem(stepsKey))
};
