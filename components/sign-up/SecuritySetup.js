import { useState } from "react";

import userInputValidator from "@/hooks/user-input-validator";
import DetailsButton from "../UI/DetailsButton";
import { useSelector } from "react-redux";

const isNotEmpty = (value) => value.trim() !== "";
const thisButtonType = "submit";
let formIsValid = false;

const SecuritySetup = (props) => {
  const userSelection = useSelector((state) => state.signUp);
  const [submitValidator, setSubmitValidator] = useState(false);

  const {
    passwordValue,
    passwordIsValid,
    passwordHasError,
    confirmPasswordValue,
    confirmPasswordIsValid,
    confirmPasswordHasError,
    isPasswordEqual,
    valueChangeHandler: changeHandler,
    inputBlurHandler: changeBlurHandler,
    //reset: resetcountry,
  } = userInputValidator(isNotEmpty);

  formIsValid = passwordIsValid && confirmPasswordIsValid && isPasswordEqual;
console.log("c-password", confirmPasswordValue)
  var passwordClasses =
    !isPasswordEqual || (passwordHasError && confirmPasswordHasError)
      ? "block"
      : "hidden";

  if (confirmPasswordValue == "" || passwordValue === "") {
    passwordClasses = submitValidator ? "block" : "hidden";
  }

  const secPrevButtonHandler = () => {
    props.secPrevStep("4");
  };

  const finisUpHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      setSubmitValidator(true);
      return;
    }
    console.log("reached");
    console.log(userSelection);
    return;
  };

  return (
    <form className="mr-auto 2xl:-mr-48" onSubmit={finisUpHandler}>
      <p className="text-lg mb-12 font-medium text-ash2">Security Setup</p>
      <div className="flex flex-col space-y-3 mb-7">
        <label htmlFor="password">Create new password</label>
        <input
          type="password"
          id="password"
          value={passwordValue}
          onBlur={changeBlurHandler}
          onChange={changeHandler}
          className="border h-14 rounded-md border-ash pl-5 focus:outline-ash"
        />
        <p className={`${passwordClasses} text-sm text-custom11`}>
          Passwords does not match
        </p>
        <label htmlFor="confirm-password">Confirm password</label>
        <input
          type="password"
          value={confirmPasswordValue}
          id="confirm-password"
          onChange={changeHandler}
          onBlur={changeBlurHandler}
          className="border h-14 rounded-md border-ash pl-5 focus:outline-ash"
        />
      </div>
      <DetailsButton
        text={"Finish Up"}
        onClickPrevHandler={secPrevButtonHandler}
        thisButtonType={thisButtonType}
      />
    </form>
  );
};

export default SecuritySetup;
