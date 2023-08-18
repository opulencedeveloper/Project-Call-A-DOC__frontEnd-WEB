import useHttp from "@/hooks/useHttp";
import Table from "../../dashboard-ui/Table";
import { useEffect } from "react";
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

const AppointmentTable = (props) => {
  const { isLoading, error, sendRequest: fetchAppointments } = useHttp();
  const {token} = props;
  useEffect(() => {
    const fetchAppointmentsResponse = (res) => {
      const { data } = res;
     // setCheckUp(data);
      console.log("Appointment Dataaaaaaaaaaa", data);
    };

    fetchAppointments(
      {
        url: "customer/fetchappointments?perpage=2",
        token: token,
      },
      fetchAppointmentsResponse
    );

  }, [fetchAppointments, token]);
  return (
    <Table
      tableData={checkUps}
      tableHeaderData2="ID"
      tableHeaderData3="AppointmentDate"
      tableHeaderData4="Diagnosis"
      tableHeaderData5="Prescription"
      inputSearchHeader="Folder Entries"
      tableEmptyStateText="No data Yet"
    />
  );
};

export default AppointmentTable;
