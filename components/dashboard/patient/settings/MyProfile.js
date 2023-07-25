import MyProfileNavigation from "./MyProfileNavigation";
import Profile from "./Profile";

const MyProfile = () => {
  return (
    <div className="flex h-[80%] w-full bg-white ">
      <MyProfileNavigation />
      
        <Profile />
    </div>
  );
};

export default MyProfile;
