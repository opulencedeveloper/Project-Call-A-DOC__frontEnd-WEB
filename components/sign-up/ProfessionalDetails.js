import Image from "next/image";
import DetailsButton from "../UI/DetailsButton";
import { useDispatch, useSelector } from "react-redux";

import { signupActions } from "../store/signup-slice";

const ProfessionalDetails = (props) => {
  const dispatchSignUp = useDispatch();
  const initialState = useSelector((state) => state.signUp.professionalDetails);
  console.log(initialState)
  const AOS = initialState.AOS;
  const NPI = initialState.NPInumber;
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
  const profNextButtonHandler = () => {
    props.profNextStep("5");
  };

  const profPrevButtonHandler = () => {
    props.profPrevStep("3");
  };

  return (
    <section className="mr-auto  2xl:-mr-48">
      <p className="text-lg mb-12 font-medium text-ash2">
        Professional Details(if any)
      </p>
      <div className="flex flex-col space-x-auto mb-5 2xl:flex-row 2xl:space-x-3">
        {/* Area of Specialization */}
        <div className="w-full 2xl:w-1/2">
          <label htmlFor="AOS" className="text-base font-lg">
            Area of Specialization
          </label>
          <div className="border flex border-ash rounded-lg mb-3 mt-1">
            <div className="p-5">
              <Image
                src="/images/icon/email.svg"
                alt="email-icon"
                className="w-4 h-4"
                width={12}
                height={12}
              />
            </div>
            <input
              type="text"
              id="AOS"
              value={AOS}
              onChange={changeHandler}
              className="py-4 mr-1 w-full text-ash placeholder-ash font-light focus:outline-none"
              placeholder="Area of Specialization"
            />{" "}
          </div>{" "}
        </div>
        {/* NPI number */}
        <div className="w-full 2xl:w-1/2">
          <label htmlFor="NPI" className="text-base font-medium">
            NPI number
          </label>
          <div className="border flex border-ash rounded-lg mb-3 mt-1">
            <div className="p-5">
              <Image
                src="/images/icon/email.svg"
                alt="email-icon"
                className="w-4 h-4"
                width={12}
                height={12}
              />
            </div>
            <input
              type="email"
              id="NPI"
              value={NPI}
              onChange={changeHandler}
              className="py-4 mr-1 w-full text-ash placeholder-ash font-light focus:outline-none"
              placeholder="Email"
            />{" "}
          </div>{" "}
        </div>
      </div>{" "}
      <DetailsButton
        onClickNextHandler={profNextButtonHandler}
        onClickPrevHandler={profPrevButtonHandler}
      />
    </section>
  );
};

export default ProfessionalDetails;
