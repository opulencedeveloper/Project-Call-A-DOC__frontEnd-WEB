import { createSlice } from "@reduxjs/toolkit";

const signupInitialState = {
  email: "",
  emailIsTouched: false,
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
    Allergies: ""
  },
  professionalDetails: {
    AOS: "",
    NPInumber: "",
  },
  securitySetup: {
    password: "",
    passwordIsTouched: false,
    confirmPassword: "",
    confirmPasswordIsTouched: false,
  },
};

const signupSlice = createSlice({
  name: "signup",
  initialState: signupInitialState,
  reducers: {
    resetState(state) {
      return signupInitialState;
    },
    addDetails(state, action) {
      const newItem = action.payload;

      switch (newItem.id) {
        case "email":
          if (newItem.type === "BLUR") {
            return { ...state, emailIsTouched: true };
          }
          return { ...state, email: newItem.value };

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
            return { ...state, phoneNumberIsTouched: true };
          }
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

        case "Allergies":
          return {
            ...state,
            medicalDetails: {
              ...state.medicalDetails,
              Allergies: newItem.value,
            },
          };

        case "AOS":
          return {
            ...state,
            professionalDetails: {
              ...state.professionalDetails,
              AOS: newItem.value,
            },
          };

        case "NPI":
          return {
            ...state,
            professionalDetails: {
              ...state.professionalDetails,
              NPInumber: newItem.value,
            },
          };

        case "password":
          if (newItem.type === "BLUR") {
            return {
              ...state,
              securitySetup: {
                ...state.securitySetup,
                passwordIsTouched: true,
              },
            };
          }
          return {
            ...state,
            securitySetup: {
              ...state.securitySetup,
              password: newItem.value,
            },
          };

        case "confirm-password":
          if (newItem.type === "BLUR") {
            return {
              ...state,
              securitySetup: {
                ...state.securitySetup,
                confirmPasswordIsTouched: true,
              },
            };
          }
          return {
            ...state,
            securitySetup: {
              ...state.securitySetup,
              confirmPassword: newItem.value,
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
