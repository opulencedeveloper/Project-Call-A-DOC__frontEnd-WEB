import { useState, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupActions } from "../components/store/signup-slice";

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
    countryIsTouched,
    securitySetup,
  } = initialInputState;
  const password = securitySetup.password;
  const passwordIsTouched = securitySetup.passwordIsTouched;
  const confirmPassword = securitySetup.confirmPassword;
  const confirmPasswordIsTouched = securitySetup.confirmPasswordIsTouched;

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

  const passwordIsValid = validateValue(password);
  const passwordHasError = !passwordIsValid && passwordIsTouched;

  const confirmPasswordIsValid = validateValue(confirmPassword);
  const confirmPasswordHasError =
    !confirmPasswordIsValid && confirmPasswordIsTouched;

  const isPasswordEqual = password === confirmPassword;

  const valueChangeHandler = (event) => {
    const id = event.target.id;
    dispatchSignUp(
      signupActions.addDetails({
        value: event.target.value,
        type: "INPUT",
        id: id,
      })
    );
  };

  const inputBlurHandler = (event) => {
    const id = event.target.id;
    console.log("in the blur");
    console.log(id);
    dispatchSignUp(
      signupActions.addDetails({
        type: "BLUR",
        id: id,
      })
    );
  };

  const reset = () => {
    dispatchSignUp({ type: "RESET" });
  };

  return {
    //this is an alias
    firstNameValue: firstName,
    firstNameHasError,
    firstNameIsValid,
    lastNameValue: lastName,
    lastNameHasError,
    lastNameIsValid,
    dateValue: dateOfBirth,
    dateOfBirthHasError,
    dateOfBirthIsValid,
    cityValue: City,
    cityHasError,
    cityIsValid,
    countryValue: Country,
    countryHasError,
    countryIsValid,
    passwordValue: password,
    passwordHasError,
    passwordIsValid,
    confirmPasswordValue: confirmPassword,
    confirmPasswordHasError,
    confirmPasswordIsValid,
    isPasswordEqual,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default userInputValidator;
