import Image from "next/image";

const AppointmentGraph = () => {
    return <div className="py-10">
        <div className="mb-5">Appointments</div>
        {/* NO DATA STATE */}
        <Image
              src="/images/appointment-graph-no-data.svg"
              alt="appointment-graph"
              className="w-auto h-auto"
              width={1220}
              height={290}
            />
        {/* DATA STATE */}
        {/* <Image
              src="/images/appointment-graph-data.svg"
              alt="appointment-graph"
              className="w-auto h-auto"
              width={1220}
              height={290}
            /> */}
    </div>
};

export default AppointmentGraph;