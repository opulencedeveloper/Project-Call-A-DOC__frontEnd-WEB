import MainNavigation from "./MainNavigation";
import MyFooter from "./MyFooter";


const MyLayout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <MyFooter />
    </>
  );
};

export default MyLayout;
