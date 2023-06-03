import MainNavigation from "./MainNavigation";
import MyFooter from "./MyFooter";


const MyMyLayout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <MyFooter />
    </>
  );
};

export default MyMyLayout;
