import Image from "next/image";

import styles from "./Table.module.css";

const { table_spacing } = styles;

const Table = (props) => {
  const {
    tableData,
    tableHeaderData2,
    tableHeaderData3,
    tableHeaderData4,
    tableHeaderData5,
    inputSearchHeader,
    tableEmptyStateText,
  } = props;
  const tableHeader2 = tableHeaderData2 || "Date";
  const tableHeader3 = tableHeaderData3 || "Time";
  const tableHeader4 = tableHeaderData4 || "Status";
  const tableHeader5 = tableHeaderData5 || "Next checkup";
  const width = tableHeaderData5 ? "w-52" : "";
  const searchHeader = inputSearchHeader || "Checkups";
  const tableEmptyStateTitle = tableEmptyStateText || "No checkups yet";

  return (
    <div className="w-full">
      <div className="my-5 text-base md:text-xl">{searchHeader}</div>
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

      <div className="overflow-x-auto w-full pb-1">
        <table className={`w-boxw2 ${table_spacing} md:w-full`}>
          <thead>
            <tr className="text-ash2">
              <th className="text-start font-normal text-sm text-ash2 pl-5">
                Doctor
              </th>
              <th className="text-start font-normal text-sm">{tableHeader2}</th>
              <th className="text-start font-normal text-sm">{tableHeader3}</th>
              <th className="text-start font-normal text-sm">{tableHeader4}</th>
              <th className="text-start font-normal text-sm">{tableHeader5}</th>
              <th className="text-start font-normal text-sm">Action</th>
            </tr>
          </thead>
          <tbody className="mt-20 py-10">
            {/* DATA STATE */}
            {/* {tableData.map((checkUpData, index) => {
              const oddNumber = index % 2 !== 0;
              const color = !oddNumber ? "bg-ash3" : ""; //TODO => refactoring with Calculus
              return (
                <tr key={index} className={color}>
                  <td >
                 <div className="flex items-center h-full py-2 pl-5 space-x-7">
                 <Image
                      src="/images/doctor11.svg"
                      alt="doctor11"
                      className="w-10 h-10"
                       ""
                      width={48}
                      height={48}
                    />
                    <p className="text-sm">{checkUpData.tableData1}</p>  </div>   
                  </td>
                  <td className="text-sm">{checkUpData.tableData2}</td>
                  <td className="text-sm">{checkUpData.tableData3}</td>
                  <td className={`text-sm ${width} py-4 pr-1`}>{checkUpData.tableData4}</td>
                  <td className="text-sm">{checkUpData.tableData5}</td>
                  <td>
                    <Image
                      src="/images/icon/three-dot-vert.svg"
                      alt="three-dot-icon"
                      className="w-auto h-auto"
                       ""
                      width={20}
                      height={20}
                    />
                  </td>
                </tr>
              );
            })} */}
          </tbody>
        </table>

        {/* NO-DATA-STATE */}
        <div className="w-full text-center space-y-5 py-20">
          <div className="text-ash6">{tableEmptyStateTitle}</div>
          <button className="bg-custom text-thin py-3 px-10 rounded-full text-sm text-custom1">
            Book appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
