import useHttp from "@/hooks/useHttp";
import Table from "../../dashboard-ui/Table";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

const HistoryTable = (props) => {
  const [appointments, setAppointments] = useState();
  const { isLoading, error, sendRequest: fetchAppointments } = useHttp();
  const { token, patientId, doctorId, userType } = props;

  useEffect(() => {
    const fetchAppointmentsResponse = (res) => {
      const { data } = res;

      const modifiedAppointmentInfo = data.map((appointmentData) => {
        const { doctor, folderid, prescription, ddate, appointmentid, title } =
          appointmentData;

        return {
          tableProfileUrl: doctor.profilepicture,
          tableData1: `${doctor.firstname} ${doctor.lastname}`,
          tableData2: folderid,
          tableData3: ddate,
          tableData4: title,
          tableData5: prescription,
          appointmentId: appointmentid,
        };
      });

      setAppointments(modifiedAppointmentInfo);
    };

    const url =
      userType === "doctor"
        ? "doctor"
        : "customer";

    fetchAppointments(
      {
        url : `${url}/folder/fetchdescriptions?patientid=${patientId}`,
        token,
      },
      fetchAppointmentsResponse
    );
  }, [fetchAppointments, token]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const appointmentTableOnclickHandler = (appointmentId) => {
    window.open("/chat/" + appointmentId, "_blank");
  };
  return error ? (
    <div className="bg-custom11 mx-10 rounded-md text-custom1 font-semibold text-sm py-3 px-5 md:px-10">
      <p className="text-center">{error}</p>
    </div>
  ) : (
    <Table
      tableData={appointments}
      tableHeaderData1={userType === "doctor" ? "Patient" : "Doctor"}
      tableHeaderData2="ID"
      tableHeaderData3="AppointmentDate"
      tableHeaderData4="Diagnosis"
      tableHeaderData5="Prescription"
      inputSearchHeader="Folder Entries"
      tableEmptyStateText="No data Yet"
      tableOnclickHandler={appointmentTableOnclickHandler}
    />
  );
};

export default HistoryTable;
