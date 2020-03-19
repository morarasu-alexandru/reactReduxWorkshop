const stepsKey = "STEPS-KEY";
const pageKey = "PAGE-KEY";

export const updateLocalStorageSteps = (steps) => {
  localStorage.setItem(stepsKey, JSON.stringify(steps))
};

export const getLocalStorageSteps = () => {
  return JSON.parse(localStorage.getItem(stepsKey))
};

export const updateLocalStoragePage = (Page) => {
  localStorage.setItem(pageKey, JSON.stringify(Page))
};

export const getLocalStoragePage = () => {
  return JSON.parse(localStorage.getItem(pageKey))
};
