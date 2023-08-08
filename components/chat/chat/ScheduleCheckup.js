import BackDrop from "@/components/UI/BackDrop";

const ScheduleCheckup = () => {
  return (
    <BackDrop>
      <form className="animateSlideUp h-[550px] w-[90%] z-50 pt-5 px-5 shadow-custom-shadow2 rounded-xl bg-white md:h-[664px] md:px-11 md:w-[475px]">
        <p className="text-medium text-lg md:text-[20px]">Schedule Checkup</p>
        <label className="text-sm md:text-[16px]">Date</label>
          <input type="date" className="border border-ash6 ouline-none h-[50px] w-full rounded-xl px-3 outline-none appearance-none bg-transparent pr-8 bg-no-repeat bg-left date-picker-icon md:h-[62px]" />
          <label className="text-sm md:text-[16px]">Date</label>
          <input
           type="time" className="border border-ash6 ouline-none h-[50px] w-full rounded-xl px-3 outline-none md:h-[62px]" />
      </form>
    </BackDrop>
  );
};

export default ScheduleCheckup;
