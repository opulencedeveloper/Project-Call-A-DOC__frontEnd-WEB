import DashBoardNavigation from "./dashboard-navigation";

const DashBoardLayout = (props) => {
  return (
    <div className="flex h-screen pt-8 mb-12 mb-40">
      <DashBoardNavigation/>
      <main className="flex-1">{props.children}</main>
    </div>
  );
};

export default DashBoardLayout;
