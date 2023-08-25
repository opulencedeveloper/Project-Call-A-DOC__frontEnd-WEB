import useHttp from "@/hooks/useHttp";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const UpcomingChecksups = (props) => {
  const { isLoading, error, sendRequest: fetchUpcomingCheckup } = useHttp();
   const router = useRouter(); 
  const activeLink = router.pathname;

  const { token, doctorId } = props;

  useEffect(() => {
    const fetchUpcomingCheckupResponse = (res) => {
      const { data } = res;
      console.log("check up", data)
    };

    fetchUpcomingCheckup(
      {
        url: `doctor/dashboard/upcomingcheckup?doctorid=${doctorId}`,
        token: token,
      },
      fetchUpcomingCheckupResponse
    );
  }, [fetchUpcomingCheckup, token]);

  const viewHistoryHandler = () => {
    router.push("/doctor-dashboard/appointments")
  }

  return (
    <div className="mt-10 ml-0 space-y-4 md:ml-8">
      <div className="text-ash2">Upcoming checkup</div>
      <div className="flex justify-between items-center pb-3 border-b border-ash">
        <div className="flex justify-between items-center space-x-4">
          {" "}
          <div>
            <Image
              src="/images/user1.svg"
              alt="doctor11"
              className="w-[68px] h-[68px]"
              width={68}
              height={68}
            />
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Ubong John</p>
            <p className="text-ash2 font-medium text-xs">11:00pm - 11:30pm</p>
          </div>
        </div>
        <button className="text-xs bg-ash4 py-4 px-5 rounded-full text-ash5">
          Last checkup 1 week ago
        </button>
      </div>
      <div className="flex space-x-6 text-sm">
        <div className="font-semibold">Last Checkup</div>
        <div>Dr Kim on the 29th June, 2021</div>
      </div>
      <div className="flex space-x-8 text-sm">
        <div className="font-semibold">Observation:</div>
        <div>
          High BP and blood sugar levels which requires constant monitoring and
          medication
        </div>
      </div>
      <button onClick={viewHistoryHandler} className="text-custom text-sm">View history</button>
    </div>
  );
};

export default UpcomingChecksups;
