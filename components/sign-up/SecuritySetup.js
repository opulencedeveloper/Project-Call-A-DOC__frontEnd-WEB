import DetailsButton from "../UI/DetailsButton";

const SecuritySetup = (props) => {
  const initialState = useSelector((state) => state.signUp.securitySetup);

  const password = initialState.password;
  const confirmPassword = initialState.confirmPassword;
  const changeHandler = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    dispatchSignUp(
      signupActions.addDetails({
        value: value,
        id: id ,
      })
    );
    
  };

 const passwordClasses = password !== confirmPassword ?  "block" : "hidden";

  const secPrevButtonHandler = () => {
    props.secPrevStep("4");
  };
  return (
    <section className="mr-auto 2xl:-mr-48">
      <p className="text-lg mb-12 font-medium text-ash2">Security Setup</p>
      <div className="flex flex-col space-y-3 mb-7">
        <label htmlFor="password">Create new password</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={changeHandler}
          className="border h-14 rounded-md border-ash"
        />
         <p className={`${passwordClasses} text-sm text-custom11`}>
              Password does not match
            </p>
        <label htmlFor="confirm-password">Confirm password</label>
        <input
          type="text"
          value={confirmPassword}
          id="confirm-password"
          onChange={changeHandler}
          className="border h-14 rounded-md border-ash "
        />
      </div>
      <DetailsButton
        text={"Finish Up"}
        onClickPrevHandler={secPrevButtonHandler}
      />
    </section>
  );
};

export default SecuritySetup;
