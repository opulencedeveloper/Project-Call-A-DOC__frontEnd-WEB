import Image from "next/image";

const AppointmentGraph = () => {
    return <div className="mt-10">
        <div className="mb-5">Appointments</div>
        <Image
              src="/images/appointment-graph.svg"
              alt="appointment-graph"
              className="w-auto h-auto"
              width={1220}
              height={290}
            />
    </div>
};

export default AppointmentGraph;