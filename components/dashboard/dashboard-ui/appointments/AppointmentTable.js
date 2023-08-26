import useHttp from "@/hooks/useHttp";
import Table from "../Table";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return formattedTime;
};

const AppointmentTable = (props) => {
  const [appointments, setAppointments] = useState();
  const { isLoading, error, sendRequest: fetchAppointments } = useHttp();
  const { token, patientId, doctorId, userType } = props;

  useEffect(() => {
    const fetchAppointmentsResponse = (res) => {
      const { data } = res;
      console.log("Appointment Data is", data);
      //  if (userType === "doctor") return;
      const modifiedAppointmentInfo = data.map((appointmentData) => {
        const {
          doctor,
          patient,
          atime,
          doctorid,
          patientid,
          ddate,
          appointmentid,
          status,
        } = appointmentData;

        return {
          tableProfileUrl:
            userType === "doctor"
              ? patient.profilepicture
              : doctor.profilepicture,
          tableData1:
            userType === "doctor"
              ? `${patient.firstname} ${patient.lastname}`
              : `${doctor.firstname} ${doctor.lastname}`,
          tableData2: userType === "doctor" ? patientid : doctorid,
          tableData3: ddate,
          tableData4:
            status === "0"
              ? "Created"
              : status === "1"
              ? "Joined"
              : "Completed",
          tableData5: formatTime(atime),
          appointmentId: appointmentid,
        };
      });

      setAppointments(modifiedAppointmentInfo);
    };
    const url =
      userType === "doctor"
        ? `doctor/fetchongoingappointments?doctorid=${doctorId}`
        : `customer/fetchongoingappointments?patientid=${patientId}`;

    fetchAppointments(
      {
        url: url,
        token: token,
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
      tableHeaderData4="Status"
      tableHeaderData5="AppointmentTime"
      inputSearchHeader="Appointments"
      tableEmptyStateText="No data Yet"
      tableOnclickHandler={appointmentTableOnclickHandler}
    />
  );
};

export default AppointmentTable;
