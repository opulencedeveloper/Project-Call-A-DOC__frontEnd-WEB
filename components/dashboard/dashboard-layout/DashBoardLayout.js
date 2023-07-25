import DashBoardNavigation from "./DashBoardNavigation";

const DashBoardLayout = (props) => {
  const { type } = props;
  return (
    <div className="flex h-screen pt-3 md:pt-8">
     
        {" "}
        <DashBoardNavigation type={type} />{" "}
      
      <div className="flex flex-col w-full px-5 lg:flex-row 2xl:pl-14 2xl:pr-auto">
        {props.children}
      </div>{" "}
    </div>
  );
};

export default DashBoardLayout;
