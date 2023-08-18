import Dosage from "./Dosage";
import CheckUp from "./CheckUp";

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const transformedTodaysDate = `${year}-${month}-${day}`;

const CheckUpandDosageLayout = (props) => {
  const { token, patientId } = props;

  return (
    <div className=" flex mb-8 mt-12 space-x-auto flex-col xl:space-x-10 xl:flex-row 2xl:space-x-20">
      <CheckUp token={token} transformedTodaysDate={transformedTodaysDate} />
      <Dosage
        token={token}
        patientId={patientId}
        transformedTodaysDate={transformedTodaysDate}
      />
    </div>
  );
};

export default CheckUpandDosageLayout;
