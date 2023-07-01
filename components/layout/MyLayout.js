import MainNavigation from "./MainNavigation";
import MyFooter from "./MyFooter";


const MyLayout = (props) => {
  return (
    <div className="max-w-[110rem] mx-auto">
      <MainNavigation />
      <main>{props.children}</main>
      <MyFooter />
    </div>
  );
};

export default MyLayout;
