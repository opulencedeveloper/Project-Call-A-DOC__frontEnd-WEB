import Image from "next/image";

import styles from "./CheckUps.module.css";

const { table_spacing } = styles;

const checkUps = [
  {
    name: "Jenny Wilson",
    date: "15/08/2017",
    time: "7:30 am",
    status: "Ongoing",
    nextCheckup: "15/08/2017",
  },
  {
    name: "Jenny Wilson",
    date: "15/08/2017",
    time: "7:30 am",
    status: "Completed",
    nextCheckup: "15/08/2017",
  },
  {
    name: "Jenny Wilson",
    date: "15/08/2017",
    time: "7:30 am",
    status: "Ongoing",
    nextCheckup: "15/08/2017",
  },
  {
    name: "Jenny Wilson",
    date: "15/08/2017",
    time: "7:30 am",
    status: "Ongoing",
    nextCheckup: "15/08/2017",
  },
];

const Checkups = () => {
  return (
    <div>
      <div className="mb-5">Checkups</div>
      <div className="border border-ash6 flex rounded-lg mr-2 h-12 w-64">
        <Image
          src="/images/icon/search-gray-shade.svg"
          alt="search-icon"
          className="w-auto h-auto p-3.5"
          width={16}
          height={16}
        />
        <input
          type="text"
          className="py-4 w-full rounded-lg placeholder-ash6 text-base font-light focus:outline-none"
          placeholder="Search"
        />{" "}
      </div>
<div className="overflow-x-auto w-full">
      <table className={`w-boxw2 ${table_spacing} md:w-full`}>
        <thead>
          <tr className="text-ash2">
            <th className="text-start font-normal text-sm text-ash2 pl-5">
              Doctor
            </th>
            <th className="text-start font-normal text-sm">Date</th>
            <th className="text-start font-normal text-sm">Time</th>
            <th className="text-start font-normal text-sm">Status</th>
            <th className="text-start font-normal text-sm">Next checkup</th>
            <th className="text-start font-normal text-sm">Action</th>
          </tr>
        </thead>
        <tbody className="mt-20 py-10">
          {checkUps.map((checkUpData, index) => {
            const oddNumber = index % 2 !== 0;
            const color = !oddNumber ? "bg-ash3" : ""; //TODO => refactoring with Calculus
            return (
              <tr key={index} className={color}>
                <td className="flex items-center h-16 py-2 pl-5 space-x-7">
                  <Image
                    src="/images/doctor11.svg"
                    alt="doctor11"
                    className="w-10 h-10"
                    width={48}
                    height={48}
                  />
                  <p className="text-sm">{checkUpData.name}</p>
                </td>
                <td className="text-sm">{checkUpData.date}</td>
                <td className="text-sm">{checkUpData.time}</td>
                <td className="text-sm">{checkUpData.status}</td>
                <td className="text-sm">{checkUpData.nextCheckup}</td>
                <td>
                  <Image
                    src="/images/icon/three-dot-vert.svg"
                    alt="three-dot-icon"
                    className="w-auto h-auto"
                    width={20}
                    height={20}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> 
      </div>
    </div>
  );
};

export default Checkups;
