import DashBoardNavigation from "./dashboard-navigation";

const DashBoardLayout = (props) => {
  return (
    <div className="flex h-screen py-12 border">
      <DashBoardNavigation/>
      <main className="flex-1">{props.children}</main>
    </div>
  );
};

export default DashBoardLayout;
