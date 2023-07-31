import OtherInfo from "../OtherInfo";
import MedicalInfo from "../../../patient/settings/MedicalInfo";
import PersonalInfo from "../PersonalInfo";
import ProfileData from "../ProfileData";

const ProfileTab = (props) => {
  const { type } = props;

  return (
    <div className="px-0 w-full h-full space-y-6 overflow-y-auto w-full bg-white md:px-7">
      <ProfileData type={props.type} />
      <PersonalInfo setProfileUpdateHandler={props.setProfileUpdateHandler} />
      <OtherInfo
        header="Address Information"
        label1="City/State"
        label1Data="New York"
        label2="Country"
        label2Data="USA"
      />
      {type === "Doctor" && (
        <OtherInfo
          header="Professional Information"
          label1="Specialiazation"
          label1Data="Paediatrician"
          label2="NPI Number"
          label2Data="46657574584"
        />
      )}
      {type === "Patient" && <MedicalInfo />}
    </div>
  );
};

export default ProfileTab;
