import DetailsButton from "../UI/DetailsButton";

const SecuritySetup = (props) => {
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
          className="border h-14 rounded-md border-ash"
        />
        <label htmlFor="confirm-password">Create new password</label>
        <input
          type="text"
          id="confirm-password"
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
