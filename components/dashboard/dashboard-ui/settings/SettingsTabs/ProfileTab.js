import OtherInfo from "../OtherInfo";
import MedicalInfo from "../../../patient/settings/MedicalInfo";
import PersonalInfo from "../PersonalInfo";
import ProfileData from "../ProfileData";
import useHttp from "@/hooks/useHttp";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { useRouter } from "next/router";

const ProfileTab = (props) => {
  const { isLoading, error, sendRequest: fetchUserData } = useHttp();
  const [userData, setUserData] = useState([]);
  const router = useRouter();

  const { type, token } = props;

  useEffect(() => {
    const myResponse = (res) => {
      const { status, doctor, customer } = res;
      const data = doctor || customer;
      if (status === "success") {
        console.log("data", data);
        setUserData(data);
        //  dispatch(addUserData(doctor));
        // isOnline = true;
      }
    };

    const url = type === "Doctor" ? "doctor" : "customer";
    fetchUserData(
      {
        url: url,
        token: token,
      },
      myResponse
    );
  }, [fetchUserData, token]);

  useEffect(() => {
    if (error === "Unauthenticated" || error === "Not Authorized") {
      router.replace("signin");
    }
  }, [error, router]);

  if (isLoading || error) {
    return <LoadingSpinner errorMessage={error} pageHeight="h-full" />;
  }

  return (
    <div className="px-0 w-full h-full space-y-6 overflow-y-auto w-full bg-white md:px-7">
      <ProfileData
        type={type}
        firstName={userData.firstname}
        lastName={userData.lastname}
        userId={type === "Patient" ? userData.patientid : userData.doctorid}
      />
      <PersonalInfo
        firstName={userData.firstname}
        lastName={userData.lastname}
        phoneNumber={userData.phone}
        setProfileUpdateHandler={props.setProfileUpdateHandler}
        token={token}
        type={type}
      />
      <OtherInfo
        header="Address Information"
        label1="City/State"
        label1Data={userData.city}
        label2="Country"
        label2Data={userData.country}
        setProfileUpdateHandler={props.setProfileUpdateHandler}
        token={token}
        type={type}
      />
      {type === "Doctor" && (
        <OtherInfo
          header="Professional Information"
          label1="Specialiazation"
          label1Data={userData.aos}
          label2="NPI Number"
          label2Data={userData.npi}
          setProfileUpdateHandler={props.setProfileUpdateHandler}
          token={token}
          type={type}
        />
      )}
      {type === "Patient" && (
        <MedicalInfo
          medicalInfo={userData.medicaldetails}
          token={token}
          setProfileUpdateHandler={props.setProfileUpdateHandler}
        />
      )}
    </div>
  );
};

export default ProfileTab;
