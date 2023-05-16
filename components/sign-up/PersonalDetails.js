import Image from "next/image";
import { useReducer, useRef, useState } from "react";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import CountrySelect from "../UI/CountryDropDown";
import DetailsButton from "../UI/DetailsButton";
import userInputValidator from "@/hooks/user-input-validator";

const isNotEmpty = (value) => value.trim() !== "";

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

let formIsValid = false;
let phoneNumberHasError = false;
let color = "ash";
let buttonActive = false;
let thisButtonType = "submit";



// ///
const PersonalDetails = (props) => {
  const [phoneNoValue, setPhoneNumber] = useState("");
  const [formValidity, setformValidity] = useState(false);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  console.log("myState value is", state);

  console.log("personal-details")

  const firstNameInputRef = useRef("");
  const lastNameInputRef = useRef();
  const dateoFBirthInputRef = useRef();
  const cityInputRef = useRef();
  const countryInputRef = useRef();

  const phoneNumberChangeHandler = (value) => {
    dispatch({ type: 'INCREMENT' });
    console.log("myState value is ppp", state);
    setPhoneNumber(value);
  };

  console.log(phoneNoValue);

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    //reset: resetFirstName,
  } = userInputValidator(isNotEmpty);
  const [name, setname] = useState(firstNameValue);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    //reset: resetLastName,
  } = userInputValidator(isNotEmpty);

  const {
    value: dateValue,
    isValid: dateIsValid,
    hasError: dateHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    //reset: resetdate,
  } = userInputValidator(isNotEmpty);

  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    //reset: resetcity,
  } = userInputValidator(isNotEmpty);

  const {
    value: countryValue,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    //reset: resetcountry,
  } = userInputValidator(isNotEmpty);

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    dateIsValid &&
    cityIsValid &&
    countryIsValid &&
    phoneNoValue !== ""
  ) {
    formIsValid = true;
    color = "custom";
  } else {
    color = "ash"
  }
console.log('running')
console.log(firstNameInputRef.current.value)
  let firstNameClasses = firstNameHasError  ? "block" : "hidden";
  const lastNameClasses = lastNameHasError ? "block" : "hidden";
  const phoneNumberClasses = phoneNumberHasError ? "block" : "hidden";
  const dateClasses = dateHasError ? "block" : "hidden";
  const cityClasses = cityHasError ? "block" : "hidden";
  const countryClasses = countryHasError ? "block" : "hidden";

  const personalNextButtonHandler = (event) => {
    event.preventDefault();
    dispatch({ type: 'INCREMENT' });
    if (!formIsValid ) {
      return;
    }
    props.personalNextStep("3");
    console.log("invalid");
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
                ref={firstNameInputRef}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
                className="py-4 mr-1 w-full placeholder-ash font-light focus:outline-none"
                placeholder="First Name"
                required
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
                ref={lastNameInputRef}
                type="text"
                id="last-name"
                value={lastNameValue}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                className="py-4 mr-1 w-full placeholder-ash font-light focus:outline-none"
                placeholder="Last Name"
                required
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
              id="phone-number-input"
              onChange={phoneNumberChangeHandler}
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
                value={dateValue}
                onChange={dateChangeHandler}
                onBlur={dateBlurHandler}
                className="absolute border z-0 pl-14 pr-2 placeholder-ash font-light w-full h-full border-ash rounded-lg focus:outline-none"
                required
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
                onChange={cityChangeHandler}
                onBlur={cityBlurHandler}
                className="py-4 mr-1 w-full placeholder-ash font-light focus:outline-none"
                placeholder="Enter email"
                required
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
                  countryChangeHandler={countryChangeHandler}
                  countryBlurHandler={countryBlurHandler}
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
          color={color}
          buttonActive={buttonActive}
          thisButtonType={thisButtonType}
        />
      </section>
    </form>
  );
};

export default PersonalDetails;
