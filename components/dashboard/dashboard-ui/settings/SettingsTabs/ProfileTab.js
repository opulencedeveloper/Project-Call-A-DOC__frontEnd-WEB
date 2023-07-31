import OtherInfo from "../OtherInfo";
import MedicalInfo from "../../../patient/settings/MedicalInfo";
import PersonalInfo from "../PersonalInfo";
import ProfileData from "../ProfileData";
import useHttp from "@/hooks/useHttp";
import { useContext, useEffect, useState } from "react";
import AuthContext from "@/store/context-store/auth-context";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { useRouter } from "next/router";

const ProfileTab = (props) => {
  const { isLoading, error, sendRequest: fetchUserData } = useHttp();
  const [userData, setUserData] = useState([]);
  const router = useRouter(); 
  const authCtx = useContext(AuthContext); 
  const { token } = authCtx;

  useEffect(() => { 
    const myResponse = (res) => {
      const { status, doctor } = res;
      if (status === "success") {
        console.log("doctor", doctor);
        setUserData(doctor);
      //  dispatch(addUserData(doctor));
       // isOnline = true;
      }
    };

    fetchUserData(
      {
        url: "doctor",
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
    return <LoadingSpinner errorMessage={error} pageHeight="h-full"/>;  
  }

  const { type } = props;

  return (
    <div className="px-0 w-full h-full space-y-6 overflow-y-auto w-full bg-white md:px-7">
      <ProfileData type={props.type}
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
      />
      <OtherInfo
        header="Address Information"
        label1="City/State"
        label1Data={userData.city}
        label2="Country"
        label2Data={userData.country}
        token={token}
      />
      {type === "Doctor" && (
        <OtherInfo
          header="Professional Information"
          label1="Specialiazation"
          label1Data={userData.aos}
          label2="NPI Number"
          label2Data={userData.npi}
          token={token}
        />
      )}
      {type === "Patient" && <MedicalInfo />}
    </div>
  );
};

export default ProfileTab;
