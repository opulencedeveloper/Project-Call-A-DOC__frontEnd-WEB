import Image from "next/image";

import styles from "./Table.module.css";
import { useState } from "react";

const { table_spacing } = styles;

const Table = (props) => {
  const {
    tableData,
    tableHeaderData1,
    tableHeaderData2,
    tableHeaderData3,
    tableHeaderData4,
    tableHeaderData5,
    inputSearchHeader,
    tableEmptyStateText,
    tableOnclickHandler,
  } = props;

  const [tableResources, setTableResources] = useState(tableData);
  const tableHeader1 = tableHeaderData1;
  const tableHeader2 = tableHeaderData2 || "Date";
  const tableHeader3 = tableHeaderData3 || "Time";
  const tableHeader4 = tableHeaderData4 || "Status";
  const tableHeader5 = tableHeaderData5 || false;
  const width = tableHeaderData5 ? "w-52" : "";
  const searchHeader = inputSearchHeader || "Checkups";
  const tableEmptyStateTitle = tableEmptyStateText || "No checkups yet";

  const tableSearchHandler = (event) => {
    const targetName = event.target.value;
    const filteredCheckUps = tableData.filter((item) =>
      item.tableData1.toLowerCase().includes(targetName.toLowerCase())
    );

    setTableResources(filteredCheckUps);
  };

  return (
    <div className="w-full">
      <div className="my-5 text-base md:text-xl">{searchHeader}</div>
      <div className="border border-ash6 flex rounded-lg mr-2 h-12 w-64">
        <Image
          src="/images/icon/search-gray-shade.svg"
          alt="search-icon"
          loading="eager"
          priority
          className="w-auto h-auto p-3.5"
          width={16}
          height={16}
        />
        <input
          type="text"
          onChange={tableSearchHandler}
          className="py-4 w-full rounded-lg placeholder-ash6 text-base font-light focus:outline-none"
          placeholder="Search"
        />{" "}
      </div>

      <div className="overflow-x-auto h-96 w-full pb-1">
        <table className={`w-boxw2 ${table_spacing} md:w-full`}>
          <thead>
            <tr className="text-ash2">
              <th className="text-start font-normal text-sm text-ash2 pl-5">
                {tableHeader1}
              </th>
              <th className="text-start font-normal text-sm pl-5">{tableHeader2}</th>
              <th className="text-start font-normal text-sm pl-5">{tableHeader3}</th>
              <th className="text-start font-normal text-sm pl-5">{tableHeader4}</th>
              {tableHeader5 && (
                <th className="text-start font-normal text-sm pl-5">
                  {tableHeader5}
                </th>
              )}
              <th className="text-start font-normal text-sm pl-5">Action</th>
            </tr>
          </thead>
          <tbody className="mt-20 py-10">
            {/* DATA STATE */}
            {tableResources &&
              tableResources.map((checkUpData, index) => {
                const oddNumber = index % 2 !== 0;
                const color = !oddNumber ? "bg-ash3" : ""; //TODO => refactoring with Calculus
                return (
                  <tr
                    onClick={() =>
                      checkUpData.appointmentId &&
                      tableOnclickHandler(checkUpData.appointmentId)
                    }
                    key={index}
                    className={`cursor-pointer ${color}`}
                  >
                    <td>
                      <div className="flex items-center h-full py-2 pl-5 space-x-7">
                        <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden">
                          <Image
                            src={checkUpData.tableProfileUrl}
                            alt="doctor11"
                            className="w-full h-full"
                            loading="eager"
                            priority
                            width={48}
                            height={48}
                          />
                        </div>
                        <p className="text-sm">{checkUpData.tableData1}</p>{" "}
                      </div>
                    </td>
                    <td className="text-sm pl-5">{checkUpData.tableData2}</td>
                    <td className="text-sm pl-5">{checkUpData.tableData3}</td>
                    <td className={`text-sm pl-5 ${width} py-4 pr-1`}>
                      {checkUpData.tableData4}
                    </td>
                    {checkUpData.tableData5 && (
                      <td className="text-sm  pl-5">{checkUpData.tableData5}</td>
                    )}
                    <td className="pl-5">
                      <Image
                        src="/images/icon/three-dot-vert.svg"
                        alt="three-dot-icon"
                        className="w-auto h-auto"
                        loading="eager"
                        priority
                        width={20}
                        height={20}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {/* NO-DATA-STATE */}
        {!tableResources || tableResources.length === 0 ? (
          <div className="w-full text-center space-y-5 py-20">
            <div className="text-ash6">{tableEmptyStateTitle}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Table;
