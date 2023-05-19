import Image from "next/image";
import { useEffect, useReducer, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupActions } from "../store/signup-slice";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import CountrySelect from "../UI/CountryDropDown";
import DetailsButton from "../UI/DetailsButton";
import userInputValidator from "@/hooks/user-input-validator";

const isNotEmpty = (value) => value.trim() !== "";

let formIsValid = false;
const thisButtonType = "submit";

const PersonalDetails = (props) => {
  //const [formValidity, setformValidity] = useState(false);
  const [firstNameSubmit, setFirstNameSubmit] = useState(false);
  const [lastNameSubmit, setLastNameSubmit] = useState(false);
  const [phoneNoSubmit, setPhoneNoSubmit] = useState(false);
  const [dateOfBirthSubmit, setDateOfBirthSubmit] = useState(false);
  const [citySubmit, setCitySubmit] = useState(false);
  const [countrySubmit, setCountrySubmit] = useState(false);
  const dispatchSignUp = useDispatch();
  const phoneNoObj = useSelector((state) => state.signUp);
  
  const phoneNoValue = phoneNoObj.phoneNumber;
  const phoneNoIsValid = isNotEmpty(phoneNoValue);
  const phoneNoHasError = !phoneNoIsValid && phoneNoObj.phoneNumberIsTouched;

  const phoneNumberChangeHandler = (value) => {
    dispatchSignUp(
      signupActions.addDetails({
        value: value,
        id: "phone-no",
      })
    );
  };

  const phoneNumberBlurHandler = (event) => {
    const id = "phone-no";
    console.log(id);
    dispatchSignUp(
      signupActions.addDetails({
        type: "BLUR",
        id: id,
      })
    );
  };

  const {
    firstNameValue,
    firstNameIsValid,
    firstNameHasError,
    lastNameValue,
    lastNameIsValid,
    lastNameHasError,
    dateValue,
    dateOfBirthIsValid,
    dateOfBirthHasError,
    cityValue,
    cityIsValid,
    cityHasError,
    countryValue,
    countryIsValid,
    countryHasError,
    //this is an alias
    valueChangeHandler: inputChangeHandler,
    inputBlurHandler: inputBlurHandler,
    //reset: resetFirstName,
  } = userInputValidator(isNotEmpty);

  console.log("DOB has error", dateOfBirthHasError);
  console.log("DOB is valid", dateOfBirthIsValid);
  console.log("DOB value", dateValue);

  console.log("firstNameIsValid");
  console.log(firstNameIsValid);
  console.log("firstNameHasError");
  console.log(firstNameHasError);

  formIsValid =
    (firstNameIsValid &&
    lastNameIsValid &&
    dateOfBirthIsValid &&
    cityIsValid &&
    countryIsValid &&
    phoneNoValue !== "");

  function getClassName(hasError, value, isSubmitted) {
    return hasError || (value === "" && isSubmitted) ? "block" : "hidden";
  }

  const firstNameClasses = getClassName(
    firstNameHasError,
    firstNameValue,
    firstNameSubmit
  );
  const lastNameClasses = getClassName(
    lastNameHasError,
    lastNameValue,
    lastNameSubmit
  );
  const phoneNumberClasses = getClassName(
    phoneNoHasError,
    phoneNoValue,
    phoneNoSubmit
  );
  const dateClasses = getClassName(
    dateOfBirthHasError,
    dateValue,
    dateOfBirthSubmit
  );

  console.log("date clases", dateClasses);
  const cityClasses = getClassName(cityHasError, cityValue, citySubmit);
  const countryClasses = getClassName(
    countryHasError,
    countryValue,
    countrySubmit
  );

  const personalNextButtonHandler = (event) => {
    event.preventDefault();
    console.log("FNHE", phoneNoIsValid);
    if (!formIsValid) {
      setFirstNameSubmit(!firstNameIsValid);
      setLastNameSubmit(!lastNameIsValid);
      setDateOfBirthSubmit(!dateOfBirthIsValid);
      setCitySubmit(!cityIsValid);
      setCountrySubmit(!countryIsValid);
      setPhoneNoSubmit(!phoneNoIsValid);
      return;
    }
    props.personalNextStep("3");
  };

  const personalPrevButtonHandler = () => {
    props.personalPrevStep("1");
  };

  return (
    <form className="mr-auto 2xl:-mr-40" onSubmit={personalNextButtonHandler}>
      <p className="text-lg mb-7">Personal Details</p>
      <section>
        {/* SECTION-1 */}
        <div className="flex flex-col space-x-auto 2xl:flex-row 2xl:space-x-3">
          {/* FIRST-NAME */}
          <div className="w-full 2xl:w-1/2 mb-3">
            <label htmlFor="first-name" className="text-base font-medium">
              First Name
            </label>
            <div className="border flex border-ash rounded-lg mt-1">
              <div className="p-5">
                <Image
                  src="/images/icon/email.svg"
                  alt="email-icon"
                  className="w-auto h-auto"
                  width={12}
                  height={12}
                />
              </div>
              <input
                type="text"
                id="first-name"
                value={firstNameValue}
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                className="py-4 mr-1 w-full placeholder-ash font-light focus:outline-none"
                placeholder="First Name"
              />
            </div>{" "}
            <p className={`${firstNameClasses} text-sm text-custom11`}>
              First name cannot be empty
            </p>
          </div>
          {/* LAST-NAME */}
          <div className="w-full 2xl:w-1/2 mb-3">
            <label htmlFor="last-name" className="text-base font-medium">
              Last Name
            </label>
            <div className="border flex border-ash rounded-lg mt-1">
              <div className="p-5">
                <Image
                  src="/images/icon/email.svg"
                  alt="email-icon"
                  className="w-auto h-auto"
                  width={12}
                  height={12}
                />
              </div>
              <input
                type="text"
                id="last-name"
                value={lastNameValue}
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                className="py-4 mr-1 w-full placeholder-ash font-light focus:outline-none"
                placeholder="Last Name"
              />{" "}
            </div>{" "}
            <p className={`${lastNameClasses} text-sm text-custom11`}>
              Last name cannot be empty
            </p>
          </div>
        </div>{" "}
        {/* SECTION-2 */}
        <div className="flex flex-col space-x-auto 2xl:flex-row 2xl:space-x-3">
          {/* PHONE-NO */}
          <div className="w-full mb-2 2xl:w-1/2">
            <label
              htmlFor="phone-number-input"
              className="text-base font-medium"
            >
              Phone number
            </label>
            <PhoneInput
              international
              placeholder="Phone number"
              defaultCountry="US"
              value={phoneNoValue}
              id="phone-number-input"
              onChange={phoneNumberChangeHandler}
              onBlur={phoneNumberBlurHandler}
              className={
                "input-phone-number border border border-ash rounded-lg py-4 pl-4 mt-1"
              }
            />
            <p className={`${phoneNumberClasses} text-sm text-custom11`}>
              Phone Number cannot be empty
            </p>
          </div>
          {/* DATE */}
          <div className="w-full  mb-3 2xl:w-1/2">
            <label htmlFor="my-date" className="text-base font-medium">
              Date of Birth
            </label>
            <div className="relative border flex border-none mt-1">
              <div className="my-1 p-5 z-10">
                <Image
                  src="/images/icon/calender.svg"
                  alt="email-icon"
                  className="w-4 h-4"
                  width={12}
                  height={12}
                />
              </div>
              <input
                type="date"
                id="my-date"
                name="my-date"
                //min="1800-01-01"
                value={dateValue}
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                className="absolute border z-0 pl-14 pr-2 placeholder-ash font-light w-full h-full border-ash rounded-lg focus:outline-none"
              />
            </div>{" "}
            <p className={`${dateClasses} text-sm text-custom11`}>
              Please select date of birth
            </p>
          </div>
        </div>{" "}
        {/* {SECTION-3} */}
        <div className="flex flex-col space-x-auto 2xl:flex-row 2xl:space-x-3">
          {/* LAST-NAME */}
          <div className="w-full mb-3 2xl:w-1/2">
            <label htmlFor="city" className="text-base font-medium">
              City
            </label>
            <div className="border flex border-ash rounded-lg mt-1">
              <div className="p-5">
                <Image
                  src="/images/icon/city.svg"
                  alt="email-icon"
                  className="w-4 h-4"
                  width={12}
                  height={12}
                />
              </div>
              <input
                type="city"
                id="city"
                value={cityValue}
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                className="py-4 mr-1 w-full placeholder-ash font-light focus:outline-none"
                placeholder="Enter email"
              />{" "}
            </div>{" "}
            <p className={`${cityClasses} text-sm text-custom11`}>
              City cannot be empty
            </p>
          </div>
          {/* COUNTRY */}
          <div className="w-full mb-3 2xl:w-1/2">
            <label htmlFor="country" className="text-base font-medium">
              Country
            </label>
            <div className="relative border flex border-ash rounded-lg  mt-1">
              <div className="mb-1 p-5 z-10">
                <Image
                  src="/images/icon/email.svg"
                  alt="email-icon"
                  className="w-3 h-3"
                  width={12}
                  height={12}
                />
              </div>
              <div id="country">
                <Image
                  src="/images/icon/drop-down.svg"
                  alt="email-icon"
                  className="w-4 h-4 absolute right-5 top-5"
                  width={12}
                  height={12}
                />
                <CountrySelect
                  countryValue={countryValue}
                  countryChangeHandler={inputChangeHandler}
                  countryBlurHandler={inputBlurHandler}
                />
              </div>
            </div>{" "}
            <p className={`${countryClasses} text-sm text-custom11`}>
              Please select your country
            </p>
          </div>
        </div>{" "}
        <DetailsButton
          //onClickNextHandler={personalNextButtonHandler}
          onClickPrevHandler={personalPrevButtonHandler}
          thisButtonType={thisButtonType}
        />
      </section>
    </form>
  );
};

export default PersonalDetails;
