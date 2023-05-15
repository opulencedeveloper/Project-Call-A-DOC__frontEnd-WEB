import Image from "next/image";
import { useState } from "react";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { countries } from "countries-list";
import CountryFlag from "react-country-flag";

import ReactFlagsSelect from "react-flags-select";
import CountrySelect from "../UI/DropIcon";
import DetailsButton from "../UI/DetailsButton";

//import MyCountryDropdown from "../UI/DropIcon";

// const customIcons = {
//   dropdown: (
//     <div className="custom-dropdown-icon">
//       <DropdownIcon />
//     </div>
//   ),
// };
const buttonStyles = {
  height: "90px", // Adjust the height value to your desired height
};

const PersonalDetails = () => {
  const [phoneNovalue, setPhoneNoValue] = useState();
  const [selected, setSelected] = useState("US");

  return (
    <form className="mr-auto 2xl:-mr-40">
      <p className="text-lg">Personal Details</p>
      <section>
        {/* SECTION-1 */}
        <div className="flex flex-col space-x-auto 2xl:flex-row 2xl:space-x-3">
          {/* FIRST-NAME */}
          <div className="w-full 2xl:w-1/2">
            <label for="first-name" className="text-base font-medium">
              First Name
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
                id="first-name"
                className="py-4 mr-1 w-full text-ash placeholder-ash font-light focus:outline-none"
                placeholder="First Name"
              />{" "}
            </div>{" "}
          </div>
          {/* LAST-NAME */}
          <div className="w-full 2xl:w-1/2">
            <label htmlFor="last-name" className="text-base font-medium">
              Last Name
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
                id="last-name"
                className="py-4 mr-1 w-full text-ash placeholder-ash font-light focus:outline-none"
                placeholder="Email"
              />{" "}
            </div>{" "}
          </div>
        </div>{" "}
        {/* SECTION-2 */}
        <div className="flex flex-col space-x-auto 2xl:flex-row 2xl:space-x-3">
          {/* PHONE-NO */}
          <div className="w-full mb-2 2xl:w-1/2">
            <label for="phone-number-input" className="text-base font-medium">
              Phone number
            </label>
            <PhoneInput
              international
              placeholder="Phone number"
              defaultCountry="US"
              id="phone-number-input"
              value={phoneNovalue}
              onChange={setPhoneNoValue}
              className={
                "input-phone-number border border border-ash rounded-lg py-4 pl-4 mt-1"
              }
            />
          </div>

          <div className="w-full 2xl:w-1/2">
            <label for="my-date" className="text-base font-medium">
              Date
            </label>
            <div className="relative border flex border-none mb-3 mt-1">
              <div className="my-1 p-5 z-10">
                <Image
                  src="/images/icon/calender.svg"
                  alt="email-icon"
                  className="w-3.5 h-3"
                  width={12}
                  height={12}
                />
              </div>
              <input
                type="date"
                id="my-date"
                name="my-date"
                className="absolute border z-0 pl-14 pr-2 text-ash placeholder-ash font-light w-full h-full border-ash rounded-lg focus:outline-none"
              />
            </div>{" "}
          </div>
        </div>{" "}
        {/* {SECTION-3} */}
        <div className="flex flex-col mb-3 space-x-auto 2xl:flex-row 2xl:space-x-3">
          {/* LAST-NAME */}
          <div className="w-full 2xl:w-1/2">
            <label htmlFor="city" className="text-base font-medium">
              City
            </label>
            <div className="border flex border-ash rounded-lg mb-3 mt-1">
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
                type="email"
                id="last-name"
                className="py-4 mr-1 w-full text-ash placeholder-ash font-light focus:outline-none"
                placeholder="Enter email"
              />{" "}
            </div>{" "}
          </div>
          <div className="w-full 2xl:w-1/2">
            <label for="my-date" className="text-base font-medium">
              Country
            </label>
            <div className="relative border flex border-ash rounded-lg  mb-3 mt-1">
              <div className="mb-1 p-5 z-10">
                <Image
                  src="/images/icon/email.svg"
                  alt="email-icon"
                  className="w-3.5 h-3"
                  width={12}
                  height={12}
                />
              </div>
              <div>
                <Image
                  src="/images/icon/drop-down.svg"
                  alt="email-icon"
                  className="w-4 h-4 absolute right-5 top-5"
                  width={12}
                  height={12}
                />
                <CountrySelect />
              </div>
            </div>{" "}
          </div>
        </div>{" "}
        <DetailsButton />
      </section>
    </form>
  );
};

export default PersonalDetails;
