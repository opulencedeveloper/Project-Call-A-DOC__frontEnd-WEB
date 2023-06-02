import AppointmentGraph from "@/components/dashboard/dashboard-ui/AppointmentGraph";
//import Checkups from "@/components/dashboard/appointments/CheckUps";
import Header from "@/components/dashboard/dashboard-ui/Header";
import Table from "@/components/dashboard/dashboard-ui/Table";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import DashBoardLayout from "@/components/dashboard/dashboard-layout/DashBoardLayout";


const checkUps = [
    {
      tableData1: "Jenny Wilson",
      tableData2: "15/08/2017",
      tableData3: "7:30 am",
      tableData4: "Patient was having headache and mild one sided migraines",
      tableData5: "15/08/2017",
    },
    {
      tableData1: "Jenny Wilson",
      tableData2: "15/08/2017",
      tableData3: "7:30 am",
      tableData4: "Patient was having headache and mild one sided migraines",
      tableData5: "15/08/2017",
    },
    {
      tableData1: "Jenny Wilson",
      tableData2: "15/08/2017",
      tableData3: "7:30 am",
      tableData4: "Patient was having headache and mild one sided migraines",
      tableData5: "15/08/2017",
    },
    {
      tableData1: "Jenny Wilson",
      tableData2: "15/08/2017",
      tableData3: "7:30 am",
      tableData4: "Patient was having headache and mild one sided migraines",
      tableData5: "15/08/2017",
    },
  ];

 const MyFolder = () => {
  return (
    <DashBoardLayout type="Patient">
        <div className="flex-1 2xl:pr-16">
          <Header title={"My Folder"} type={"Patient"}/>
          <Table tableData={checkUps}
          tableHeaderData2="ID"
          tableHeaderData3="AppointmentDate"
          tableHeaderData4 = "Diagnosis"
          tableHeaderData5 = "Prescription"
          inputSearchHeader = "Folder Entries"
          tableEmptyStateText = "No data Yet"
          />
       </div>
       <UserProfile name="Kelvin Wills" profilePicture="/images/profile.svg" online={true}/>

    </DashBoardLayout>
  );
}

export default MyFolder;
