import { useState, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import {signupActions} from "../components/store/signup-slice";


const userInputValidator = (validateValue) => {
  const dispatchSignUp = useDispatch();
  const initialInputState = useSelector((state) => state.signUp);
  console.log("userInputValidator");

  const {
    firstName,
    lastName,
    dateOfBirth,
    City,
    Country,
    firstNameIsTouched,
    lastNameIsTouched,
    dateOfBirthIsTouched,
    cityIsTouched,
    countryIsTouched
  } = initialInputState;

  const firstNameIsValid = validateValue(firstName);
  const firstNameHasError = !firstNameIsValid && firstNameIsTouched;

  const lastNameIsValid = validateValue(lastName);
  const lastNameHasError = !lastNameIsValid && lastNameIsTouched;

  const dateOfBirthIsValid = validateValue(dateOfBirth);
  const dateOfBirthHasError = !dateOfBirthIsValid && dateOfBirthIsTouched;

  const cityIsValid = validateValue(City);
  const cityHasError = !cityIsValid && cityIsTouched;

  const countryIsValid = validateValue(Country);
  const countryHasError = !countryIsValid && countryIsTouched;

  const valueChangeHandler = (event) => {
    const id = event.target.id;
    dispatchSignUp(signupActions.addDetails({
      value: event.target.value,
      type: "INPUT",
      id: id
    }));
  };

  const inputBlurHandler = (event) => {
    const id = event.target.id;
    console.log("in the blur");
    console.log(id);
    dispatchSignUp(signupActions.addDetails({
      type: "BLUR",
      id: id
    }));
  };

  const reset = () => {
    dispatchSignUp({ type: "RESET" });
  };

  return {
    firstNameValue: firstName,
    lastNameValue: lastName,
    dateValue: dateOfBirth,
    isValid: firstNameIsValid,
    cityValue: City,
    countryValue: Country,
    firstNameHasError,
    lastNameHasError,
    dateOfBirthHasError,
    cityHasError,
    countryHasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};


export default userInputValidator;
