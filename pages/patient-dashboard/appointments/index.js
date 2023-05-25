import AppointmentGraph from "@/components/dashboard/patient/appointments/AppointmentGraph";
import Board from "@/components/dashboard/patient/appointments/Board";
//import Checkups from "@/components/dashboard/appointments/CheckUps";
import Header from "@/components/dashboard/dashboard-ui/Header";
import Table from "@/components/dashboard/dashboard-ui/Table";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import DashBoardLayout from "@/components/layout/DashBoardLayout";

const checkUps = [
  {
    tableData1: "Jenny Wilson",
    tableData2: "15/08/2017",
    tableData3: "7:30 am",
    tableData4: "Ongoing",
    tableData5: "15/08/2017",
  },
  {
    tableData1: "Jenny Wilson",
    tableData2: "15/08/2017",
    tableData3: "7:30 am",
    tableData4: "Completed",
    tableData5: "15/08/2017",
  },
  {
    tableData1: "Jenny Wilson",
    tableData2: "15/08/2017",
    tableData3: "7:30 am",
    tableData4: "Ongoing",
    tableData5: "15/08/2017",
  },
  {
    tableData1: "Jenny Wilson",
    tableData2: "15/08/2017",
    tableData3: "7:30 am",
    tableData4: "Completed",
    tableData5: "15/08/2017",
  },
];

 const Appointments = () => {
  return (
    <DashBoardLayout>
        <div className="flex-1 2xl:pr-16">
          <Header title={"Appointments"} />
          <Board />
          <AppointmentGraph />
          <Table tableData={checkUps}
          />
       </div>
        <UserProfile />
    </DashBoardLayout>
  );
}

export default Appointments;
