import Image from "next/image";
import DetailsButton from "../UI/DetailsButton";

const ProfessionalDetails = (props) => {
  const profButtonHandler = () => {
    props.profNextStep("5");
  }
  
    return <section className="mr-auto  2xl:-mr-48">
        <p className="text-xl mb-12 font-medium text-ash2">ProfessionalDetails details (if any)</p>
        <div className="flex flex-col space-x-auto mb-5 2xl:flex-row 2xl:space-x-3">
          {/* Area of Specialization */}
          <div className="w-full 2xl:w-1/2">
            <label for="AOS" className="text-base font-medium">
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
                className="py-4 mr-1 w-full text-ash placeholder-ash font-light focus:outline-none"
                placeholder="Email"
              />{" "}
            </div>{" "}
          </div>
        </div>{" "}
        <DetailsButton onClickHandler={profButtonHandler}/>
    </section>
};

export default ProfessionalDetails;