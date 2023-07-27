import AddressData from "../AddressData";
import MedicalData from "../MedicalData";
import PersonalInfo from "../PersonalInfo";
import ProfileData from "../ProfileData";

const ProfileTab = () => {
  return (
    <div className="px-0 w-full h-full space-y-6 overflow-y-auto w-full bg-white md:px-7">
      <ProfileData />
      <PersonalInfo />
      <AddressData />
      <MedicalData/>
    </div>
  );
};

export default ProfileTab;
