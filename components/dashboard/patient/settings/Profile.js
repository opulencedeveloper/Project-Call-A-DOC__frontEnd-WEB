import AddressData from "./AddressData";
import MedicalData from "./MedicalData";
import PersonalInfo from "./PersonalInfo";
import ProfileData from "./ProfileData";

const Profile = () => {
  return (
    <div className="px-7 w-full h-full space-y-6 overflow-y-auto w-full bg-white">
      <ProfileData />
      <PersonalInfo />
      <AddressData />
      <MedicalData/>
    </div>
  );
};

export default Profile;
