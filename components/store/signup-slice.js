import { createSlice } from "@reduxjs/toolkit";

const signupInitialState = {
  firstName: "",
  firstNameIsTouched: false,
  lastName: "",
  lastNameIsTouched: false,
  dateOfBirth: "",
  dateOfBirthIsTouched: false,
  City: "",
  cityIsTouched: false,
  Country: "",
  countryIsTouched: false,
  phoneNumber: "",
  phoneNumberIsTouched: false,
  userType: "Patient",
  medicalDetails: {
    Diaherra: false,
    COPD: false,
    heartDisease: false,
    Arthritis: false,
    heartFailue: false,
    Stroke: false,
    HBP: false,
    Cancer: false,
    Arthrithiss: false,
    heartFailure: false,
  },
};

const signupSlice = createSlice({
  name: "signup",
  initialState: signupInitialState,
  reducers: {
    addDetails(state, action) {
      const newItem = action.payload;

      switch (newItem.id) {
        case "first-name":
          if (newItem.type === "BLUR") {
            return { ...state, firstNameIsTouched: true };
          }
          return { ...state, firstName: newItem.value };

        case "last-name":
          if (newItem.type === "BLUR") {
            return { ...state, lastNameIsTouched: true };
          }
          return { ...state, lastName: newItem.value };

        case "my-date":
          if (newItem.type === "BLUR") {
            return { ...state, dateOfBirthIsTouched: true };
          }
          return { ...state, dateOfBirth: newItem.value };

        case "city":
          if (newItem.type === "BLUR") {
            return { ...state, cityIsTouched: true };
          }
          return { ...state, City: newItem.value };

        case "country-select":
          if (newItem.type === "BLUR") {
            return { ...state, countryIsTouched: true };
          }
          return { ...state, Country: newItem.value };

        case "phone-no":
          if (newItem.type === "BLUR") {
            console.log("phone-blur");
            return { ...state, phoneNumberIsTouched: true };
          }
          console.log("phone-changed");
          return { ...state, phoneNumber: newItem.value };

        case "user-type":
          return { ...state, userType: newItem.value };

        case "Diaherra":
          return {
            ...state,
            medicalDetails: {
              ...state.medicalDetails,
              Diaherra: newItem.value,
            },
          };

        case "COPD":
          return {
            ...state,
            medicalDetails: {
              ...state.medicalDetails,
              COPD: newItem.value,
            },
          };

        case "Heart disease":
          return {
            ...state,
            medicalDetails: {
              ...state.medicalDetails,
              heartDisease: newItem.value,
            },
          };

        case "Arthritis":
          return {
            ...state,
            medicalDetails: {
              ...state.medicalDetails,
              Arthritis: newItem.value,
            },
          };

        case "Heart failue":
          return {
            ...state,
            medicalDetails: {
              ...state.medicalDetails,
              heartFailue: newItem.value,
            },
          };

        case "Stroke":
          return {
            ...state,
            medicalDetails: {
              ...state.medicalDetails,
              Stroke: newItem.value,
            },
          };

        case "High blood presure":
          return {
            ...state,
            medicalDetails: {
              ...state.medicalDetails,
              HBP: newItem.value,
            },
          };

        case "Cancer":
          return {
            ...state,
            medicalDetails: {
              ...state.medicalDetails,
              Cancer: newItem.value,
            },
          };

        case "Arthrithiss":
          return {
            ...state,
            medicalDetails: {
              ...state.medicalDetails,
              Arthrithiss: newItem.value,
            },
          };

        case "Heart Failure":
          return {
            ...state,
            medicalDetails: {
              ...state.medicalDetails,
              heartFailure: newItem.value,
            },
          };

        default:
          return state;
      }
    },
  },
});

export const signupActions = signupSlice.actions;

export default signupSlice;
