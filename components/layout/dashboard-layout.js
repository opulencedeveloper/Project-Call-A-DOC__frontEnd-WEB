import DashBoardNavigation from "./dashboard-navigation";

const DashBoardLayout = (props) => {
  return (
    <div className="flex pt-8">
     <div> <DashBoardNavigation /> </div>
     <div className="flex flex-col w-full pl-5 pr-3 lg:flex-row 2xl:pl-14 2xl:pr-auto">{props.children}
     </div> </div>
  );
};

export default DashBoardLayout;
