import useHttp from "@/hooks/useHttp";
import Image from "next/image";
import { useEffect, useState } from "react";

const Board = (props) => {
  const {
    isLoading,
    error,
    sendRequest: fetchTotalNumberOfAppointments,
  } = useHttp();
  const [boardData, setBoardData] = useState();

  const { boardLabels, token } = props;

  useEffect(() => {
    const fetchTotalNumberOfAppointmentsResponse = (res) => {
      const {
        totalappointments,
        successfulappointments,
        unsuccessfulappointments,
      } = res;
      
      const data = [
        totalappointments,
        successfulappointments,
        unsuccessfulappointments,
      ];
      setBoardData(data);
    };

    fetchTotalNumberOfAppointments(
      {
        url: "customer/dashboardvalues",
        token: token,
      },
      fetchTotalNumberOfAppointmentsResponse
    );
  }, [fetchTotalNumberOfAppointments, token]);

  return (
    <div className="flex flex-col mt-10 space-y-4 space-x-auto justify-between text-custom1 xl:flex-row xl:space-y-0">
      {boardData &&
        boardData.map((data, index) => (
          <div
            key={index}
            className={`${
              data === 0 ? "bg-ash6" : boardLabels[index].color
            } pt-8 pb-6 px-6 rounded-lg space-y-3`}
          >
            <div className="text-5xl font-light md:text-5xl">{data}</div>
            <div className="flex justify-between space-x-24">
              <div>
                <p className="font-semibold">{boardLabels[index].title}</p>
                <p className="font-semibold ">Appointments</p>

                {/* <select
                  className={`${
                    data === 0 ? "bg-ash6" : boardLabels[index].color
                  } -ml-1 text-sm`}
                >
                  <option>This month</option>
                </select> */}
              </div>
              <Image
                src="/images/icon/bookmark.svg"
                alt="book-mark-icon"
                className="w-auto h-auto"
                width={35.63}
                height={46.31}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Board;
