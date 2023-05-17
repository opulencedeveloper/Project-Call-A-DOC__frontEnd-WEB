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
  userType: "Patient"
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

        default:
          return state;
      }
    },
  },
});

export const signupActions = signupSlice.actions;

export default signupSlice;
