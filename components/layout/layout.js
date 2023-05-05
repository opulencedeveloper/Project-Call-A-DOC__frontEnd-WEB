import MainNavigation from "./main-navigation";
import Footer from "@/components/layout/footer";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className="mx-5 md:mx-20">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
