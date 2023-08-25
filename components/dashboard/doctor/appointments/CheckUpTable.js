import useHttp from "@/hooks/useHttp";
import Table from "../../dashboard-ui/Table";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

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

const timeConverter = (inputTime) => {
  const parsedTime = new Date(`1970-01-01T${inputTime}`);

  // Format the time in 12-hour format
  const formattedTime = parsedTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return formattedTime;
};

const CheckUpTable = (props) => {
  const [checkUps, setCheckups] = useState();
  const { isLoading, error, sendRequest: fetchCheckups } = useHttp();
  const { token, patientId } = props;

  useEffect(() => {
    const fetchCheckupsResponse = (res) => {
      const { data } = res;

      console.log("checkup is", data);
      const modifiedCheckupsInfo = data.map((appointmentData) => {
        const {
          patient,
          checkupdate,
          checkuptime,
          ddate,
          appointmentid,
          status,
        } = appointmentData;

        return {
          tableProfileUrl: patient.profilepicture,
          tableData1: `${patient.firstname} ${patient.lastname}`,
          tableData2: checkupdate.replace(/-/g, "/"),
          tableData3: timeConverter(checkuptime),
          tableData4: status === "1" ? "Ongoing" : "Completed",
          tableData5: false,
          appointmentId: appointmentid,
        };
      });

      setCheckups(modifiedCheckupsInfo);
    };

    fetchCheckups(
      {
        url: "doctor/fetchcheckups",
        token: token,
      },
      fetchCheckupsResponse
    );
  }, [fetchCheckups, token]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const checkUpTableOnclickHandler = (appointmentId) => {
    window.open("/chat/" + appointmentId, "_blank");
  };
  return error ? (
    <div className="bg-custom11 mx-10 rounded-md text-custom1 font-semibold text-sm py-3 px-5 md:px-10">
      <p className="text-center">{error}</p>
    </div>
  ) : (
    <Table
      tableHeaderData1="Patient"
      tableData={checkUps}
      tableOnclickHandler={checkUpTableOnclickHandler}
    />
  );
};

export default CheckUpTable;
