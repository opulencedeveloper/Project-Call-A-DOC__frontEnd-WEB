import { useState } from "react";

import { useRouter } from "next/router";

import { useDispatch } from "react-redux";

import { signupActions } from "../../store/redux-store/signup-slice";
import { userDataActions } from "../../store/redux-store/userData-slice";

import userInputValidator from "@/hooks/userInputvalidator";
import DetailsButton from "../UI/DetailsButton";
import { useSelector } from "react-redux";
import useHttp from "@/hooks/useHttp";

const isNotEmpty = (value) => value.trim() !== "";

const thisButtonType = "submit";

const SecuritySetup = (props) => {
  const userSelection = useSelector((state) => state.signUp);
  const [submitValidator, setSubmitValidator] = useState(false);
  const { isLoading, error, sendRequest: submitUserData } = useHttp();
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    userType,
  } = userSelection;

  let formIsValid = false;
  let finishUpButtonText = "Finish Up";
  let buttonDisable = false;

  if (isLoading) {
    finishUpButtonText = "Please Wait...";
    buttonDisable = true;
  }

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
    const stepValue = userType !== "Doctor" ? "3" : "4";
    props.secPrevStep(stepValue);
  };

  const myResponse = (res) => {
    console.log("email response", res);
    const { status, message, doctor, patient, role } = res;
    if (
      status === "success" &&
      message === "Registration Completed Successfully"
    ) {
      const targetRoute =
        role === "1" ? "/patient-dashboard" : "/doctor-dashboard";
      const userData = role === "1" ? patient : doctor;
      dispatch(userDataActions.addUserData(userData));
      dispatch(signupActions.resetState());
      if (role === "1") {
        localStorage.setItem("userType", "patient");
      } else {
        localStorage.setItem("userType", "doctor");
      }
      router.replace(targetRoute);
    }
  };


  const finisUpHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      setSubmitValidator(true);
      return;
    }

    const {
      medicalDetails,
      userType,
      email,
      phoneNumber,
      firstName,
      lastName,
      City,
      Country,
      dateOfBirth,
      professionalDetails,
      securitySetup,
    } = userSelection;

    //Iterating the map to return the keys with values of true, and storing it in a Set()
    const keysWithTrueValue = Object.keys(medicalDetails).reduce(
      (keys, key) => {
        if (medicalDetails[key]) {
          keys.add(key);
        }
        return keys;
      },
      new Set()
    );

    const medicalData = Array.from(keysWithTrueValue).join(", ");
    const cleanedPhoneNumber = phoneNumber.replace("+", "");

    const commonData = { phone: cleanedPhoneNumber, firstname: firstName, surname: lastName, email, city: City, country: Country, dob: dateOfBirth, medicaldetails: medicalData, allergies: medicalDetails.Allergies, password: securitySetup.password, password_confirmation: securitySetup.confirmPassword, };

    const requestData = {
      url:
        userType === "Patient"
          ? "customer/continueregister"
          : "doctor/continueregister",
      method: "POST",
      body:
        userType === "Patient"
          ? {
              ...commonData,
            }
          : {
              ...commonData,
              npi: professionalDetails.NPInumber,
              aos: professionalDetails.AOS,
            },
    };

    submitUserData(requestData, myResponse);
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
