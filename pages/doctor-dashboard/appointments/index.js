import AppointmentGraph from "@/components/dashboard/dashboard-ui/AppointmentGraph";
import Board from "@/components/dashboard/dashboard-ui/Board";
import Header from "@/components/UI/Header";
import Table from "@/components/dashboard/dashboard-ui/Table";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import DashBoardLayout from "@/components/dashboard/dashboard-layout/DashBoardLayout";

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

const boardContent = [
    {
      appointmentNumber: "0",
      title: "Total",
      subTitle: "Appointments",
     // Data state color => bg-custom14
      color: "bg-ash6",
    },
    {
      appointmentNumber: "0",
      title: "Successful",
      subTitle: "Checkups",
      //Data state color => bg-custom-g3
      color: "bg-ash6"
    },
    {
      appointmentNumber: "0",
      title: "Missed",
      subTitle: "Checkups",
      //Data state color => bg-custom-r-shade1
      color: "bg-ash6"
    },
  ];

 const Appointments = () => {
  return (
    <DashBoardLayout type="Doctor">
        <div className="flex-1 2xl:pr-16">
          <Header title={"Appointments"} />
          <Board pageContent={boardContent}/>
          <AppointmentGraph />
          <Table tableData={checkUps}
          />
       </div>
       <UserProfile name="Dr Grace Wills" profilePicture="/images/dr-grace-wills.svg"  online={false}/>
    </DashBoardLayout>
  );
}

export default Appointments;