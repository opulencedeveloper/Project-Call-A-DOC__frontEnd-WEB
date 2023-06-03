import MainNavigation from "./MainNavigation";
import Footer from "./Footer";


const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
