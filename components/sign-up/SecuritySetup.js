import { useState } from "react";

import { useRouter } from "next/router";

import { useDispatch } from "react-redux";

import { signupActions } from "../../store/redux-store/signup-slice";

import userInputValidator from "@/hooks/user-input-validator";
import DetailsButton from "../UI/DetailsButton";
import { useSelector } from "react-redux";
import useHttp from "@/hooks/use-http";

const isNotEmpty = (value) => value.trim() !== "";

const thisButtonType = "submit";

const SecuritySetup = (props) => {
  const userSelection = useSelector((state) => state.signUp);
  const [submitValidator, setSubmitValidator] = useState(false);
  const { isLoading, error, sendRequest: submitUserData } = useHttp();
  const router = useRouter();
  const dispatch = useDispatch();

  let formIsValid = false;
  let finishUpButtonText = "Finish Up";
  let buttonDisable = false;

  if (isLoading) {
    finishUpButtonText = "Please Wait...";
    buttonDisable = true;
  }

  console.log("error", error);

  const {
    passwordValue,
    passwordIsValid,
    passwordHasError,
    confirmPasswordValue,
    confirmPasswordIsValid,
    confirmPasswordHasError,
    isPasswordEqual,
    passwordLength,
    valueChangeHandler: changeHandler,
    inputBlurHandler: changeBlurHandler,
    //reset: resetcountry,
  } = userInputValidator(isNotEmpty);

  formIsValid = passwordIsValid && confirmPasswordIsValid && isPasswordEqual;
  console.log("c-password", confirmPasswordValue);
  let passwordClasses =
    !isPasswordEqual || (passwordHasError && confirmPasswordHasError)
      ? "block"
      : "hidden";

  if (confirmPasswordValue == "" || passwordValue === "") {
    passwordClasses = submitValidator ? "block" : "hidden";
  }

  let passwordClasses2 =
    !passwordLength && submitValidator ? "block" : "hidden";

  const secPrevButtonHandler = () => {
    props.secPrevStep("4");
  };

  const myResponse = (res) => {
    console.log("email response", res);
    const { status, message } = res;
    if (status === "success") {
      if (message === "Registration Completed Successfully") {
        dispatch(signupActions.resetState());
        router.replace("/sign-in");
      }
    }
    console.log("email message", message);
  };

  const finisUpHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      setSubmitValidator(true);
      return;
    }
    console.log("reached");
    console.log(userSelection);
    const { medicalDetails } = userSelection;
    const keysWithTrueValue = Object.keys(medicalDetails).filter(
      (key) => medicalDetails[key] === true
    );
    const medicalData = keysWithTrueValue.join(", ");
    console.log(medicalDetails.Allergies);

    const userType = userSelection.userType;

    console.log(userType);
    if (userType === "Patient") {
      submitUserData(
        {
          url: "customer/continueregister",
          method: "POST",
          body: {
            phone: userSelection.phoneNumber,
            firstname: userSelection.firstName,
            surname: userSelection.lastName,
            email: userSelection.email,
            city: userSelection.City,
            country: userSelection.Country,
            dob: userSelection.dateOfBirth,
            medicaldetails: medicalData,
            allergies: medicalDetails.Allergies,
            password: userSelection.securitySetup.password,
            password_confirmation: userSelection.securitySetup.confirmPassword,
          },
        },
        myResponse
      );
    } else {
      submitUserData(
        {
          url: "doctor/continueregister",
          method: "POST",
          body: {
            phone: userSelection.phoneNumber,
            firstname: userSelection.firstName,
            surname: userSelection.lastName,
            email: userSelection.email,
            city: userSelection.City,
            country: userSelection.Country,
            dob: userSelection.dateOfBirth,
            npi: userSelection.professionalDetails.NPInumber,
            medicaldetails: medicalData,
            allergies: medicalDetails.Allergies,
            aos: userSelection.professionalDetails.AOS,
            password: userSelection.securitySetup.password,
            password_confirmation: userSelection.securitySetup.confirmPassword,
          },
        },
        myResponse
      );
    }
  };

  return (
    <form className="mr-auto 2xl:-mr-48" onSubmit={finisUpHandler}>
      {error && (
        <div className="bg-custom11 rounded-md text-custom1 font-semibold text-sm py-3 px-10">
          <p className="text-center">{error}</p>
        </div>
      )}
      <p className="text-lg mb-12 font-medium text-ash2">Security Setup</p>
      <div className="flex flex-col space-y-3 mb-7">
        <label htmlFor="password">Create new password</label>
        <input
          type="password"
          id="password"
          value={passwordValue}
          onBlur={changeBlurHandler}
          onChange={changeHandler}
          className="border h-14 rounded-md border-ash px-5 focus:outline-ash"
        />
        <p className={`${passwordClasses} text-sm text-custom11`}>
          Passwords does not match
        </p>
        <p className={`${passwordClasses2} text-sm text-custom11`}>
          Password too short
        </p>
        <label htmlFor="confirm-password">Confirm password</label>
        <input
          type="password"
          value={confirmPasswordValue}
          id="confirm-password"
          onChange={changeHandler}
          onBlur={changeBlurHandler}
          className="border h-14 rounded-md border-ash px-5 focus:outline-ash"
        />
      </div>
      <DetailsButton
        text={finishUpButtonText}
        onClickPrevHandler={secPrevButtonHandler}
        thisButtonType={thisButtonType}
        buttonActive={buttonDisable}
      />
    </form>
  );
};

export default SecuritySetup;
