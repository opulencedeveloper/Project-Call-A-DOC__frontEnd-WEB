import DashBoardNavigation from "./DashBoardNavigation";

const DashBoardLayout = (props) => {
  const { type } = props;
  return (
    <div className="flex h-screen pt-4 md:pt-7">
      <DashBoardNavigation type={type} />
      <div className="flex flex-col w-full h-full overflow-y-auto px-3 lg:flex-row lg:pl-7 2xl:pl-14 2xl:pr-auto">
        {props.children}
      </div>{" "}
    </div>
  );
};

export default DashBoardLayout;
