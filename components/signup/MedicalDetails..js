import { useDispatch, useSelector } from "react-redux";

import DetailsButton from "../UI/DetailsButton";

import { signupActions } from "../../store/redux-store/signup-slice";

import styles from "./SignUpStyles.module.css";

const thisButtonType = "submit";

const MedicalDetails = (props) => {
  const dispatchSignUp = useDispatch();
  const initialState = useSelector((state) => state.signUp.medicalDetails);

  const checkboxHandler = (event) => {
    const id = event.target.id;
    const value = event.target.checked;
    dispatchSignUp(
      signupActions.addDetails({
        value: value,
        id: id ,
      })
    );
    
  };

  const allergiesHandler = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    dispatchSignUp(
      signupActions.addDetails({
        value: value,
        id: id ,
      })
    );
    
  };

  const pageContent = [
    { content: "Diaherra", val: initialState.Diaherra },
    { content: "COPD", val: initialState.COPD },
    { content: "Heart disease",val: initialState.heartDisease },
    { content: "Arthritis",  val: initialState.Arthritis },
    { content: "Heart failue",  val: initialState.heartFailue },
    { content: "Stroke", val: initialState.Stroke },
    { content: "High blood presure", val: initialState.HBP },
    { content: "Cancer", val: initialState.Cancer },
    { content: "Arthrithiss", val: initialState.Arthrithiss },
    { content: "Heart Failure", val: initialState.heartFailure },
  ];

  const medicalNextButtonHandler = (event) => {
    event.preventDefault();
    props.medicalNextStep("4");
  };

  const medicalPrevButtonHandler = () => {
    props.medicalPrevStep("2");
  };

  return (
    <form className="mr-auto 2xl:-mr-48" onSubmit={medicalNextButtonHandler}>
      <p className="text-lg mb-12 font-medium text-ash2">
        Medical details (if any)
      </p>
      <div className="flex flex-col flex-wrap h-auto xl:h-72 ">
        {pageContent.map((content, index) => (
          <div key={index} className="flex space-x-2 pb-7">
            <input
              type="checkbox"
              id={content.content}
              checked={content.val}
              className={styles.checkbox}
              onChange={checkboxHandler}
            />
            <label htmlFor={content.id} className="pt-0.5">
              {content.content}
            </label>
          </div>
        ))}
        {/* <div className="flex space-x-2 pb-7">
          <input
            type="checkbox"
            id="tickBox"
            className={styles.checkbox}
            onChange={checkboxHandler}
          />
          <label htmlFor="tickBox">
            Others
            <span className="text-xs font-medium">(Please specify)</span>
          </label>
        </div> */}
      </div>
      <p className="text-lg mb-5 font-medium text-ash2">Allergies (if any)</p>
      <textarea
        type="text"
        id="Allergies"
        value={initialState.Allergies}
        onChange={allergiesHandler}
        className="border border-ash rounded-md w-full h-32 mb-14 p-5"
      />
      <DetailsButton
        onClickPrevHandler={medicalPrevButtonHandler}
        thisButtonType={thisButtonType}
      />
    </form>
  );
};

export default MedicalDetails;
