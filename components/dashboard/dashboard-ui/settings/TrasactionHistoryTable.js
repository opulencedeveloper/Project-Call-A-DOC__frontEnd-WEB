import LoadingSpinner from "@/components/UI/LoadingSpinner";
import useHttp from "@/hooks/useHttp";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

let patientId;

const TransactionHistoryTable = (props) => {
  const [tableData, setTableData] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [selectAll, setSelectAll] = useState(false);
  const { isLoading, error, sendRequest: fetchTableData } = useHttp();

  const { tableTitle, doctorId, token, type } = props;

  if (type === "Patient") {
    const userInfo = useSelector((state) => state.userData);
    patientId = userInfo.patientid;
  }

  useEffect(() => {
    const myResponse = (res) => {
      console.log("Table response", res);
      const { data } = res;
      setTableData(data);
      // setBanks(res);
    };
    const url =
      type === "Patient"
        ? `customer/transaction/fetchall?patientid=${patientId}`
        : `doctor/paymenthistory/fetchall?doctorid=${doctorId};`;

    fetchTableData(
      {
        url: url,
        token: token,
      },
      myResponse
    );
  }, [fetchTableData, token]);

  const formatUnixTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${month} ${day}, ${year}`;
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const handleSelectAll = () => {
    const allChecked = Object.fromEntries(
      tableData.map((item) => [item.id, !selectAll])
    );
    setCheckedItems(allChecked);
    setSelectAll((prev) => !prev);
  };

  if (isLoading || error) {
    return <LoadingSpinner errorMessage={error} pageHeight="h-max" />;
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-5">
        <p className="text-base font-medium mb-4 md:text-[20px] md:text-lg">
          {tableTitle}
        </p>
        {tableData.length !== 0 && (
          <button className="w-[180px] h-[54px] rounded-full flex items-center justify-center space-x-2 bg-custom md:w-[210px]">
            <p className="text-base text-white md:text-[18px]">Download all</p>
            <div className="w-[20px] h-[20px]">
              {" "}
              <Image
                src="/images/icon/download-icon.svg"
                alt="download-icon"
                className="w-full w-full"
                width={20}
                height={20}
              />
            </div>
          </button>
        )}
      </div>

      <div className="overflow-x-auto w-full pb-1">
        {tableData.length === 0 ? (
          <div className="w-full text-center space-y-5 py-20">
            <p className="text-thin py-3 px-10 rounded-full text-base text-ash4 font-medium">
              No Payments yet.
            </p>
          </div>
        ) : (
          <table className={`w-[40rem]  md:w-full`}>
            <thead className="bg-ash3 border-b">
              <tr className="h-full text-ash2">
                <th className="flex my-3 space-x-3 items-center font-normal text-start text-sm text-ash2 pl-5 lg:text-[16px]">
                  <input
                    type="checkbox"
                    name="check-up"
                    checked={selectAll}
                    className="h-[24px] w-[24px]"
                    onChange={handleSelectAll}
                    //  className={styles.checkbox}
                    // onChange={checkboxHandler}
                  />
                  <label htmlFor="check-up" className="pt-0.5 ">
                    Invoice
                  </label>
                  <div className="w-[11px] h-[13px]">
                    {" "}
                    <Image
                      src="/images/icon/arrow-down-icon.svg"
                      alt="arrow-down-icon"
                      className="w-full w-full"
                      loading="eager"
                      priority
                      width={20}
                      height={20}
                    />
                  </div>
                </th>
                <th className="text-start text-sm text-ash5 font-normal lg:text-[16px]">
                  Amount
                </th>
                <th className="text-start text-sm text-ash5 font-normal lg:text-[16px]">
                  Date
                </th>
                <th className="text-start text-sm text-ash5 font-normal lg:text-[16px]">
                  Status
                </th>
                <th className="text-start text-sm text-ash5 font-normal lg:text-[16px]"></th>
              </tr>
            </thead>
            <tbody className="mt-20 py-10 text-ash5">
              {tableData.map((data, index) => (
                <tr
                  key={index}
                  className="border-b h-[74px] text-sm md:text-[16px]"
                >
                  <td>
                    <div className="flex items-center h-full py-2 pl-5 space-x-3">
                      <input
                        type="checkbox"
                        name={data.id}
                        className="h-[24px] w-[24px]"
                        checked={checkedItems[data.id] || false}
                        onChange={handleCheckboxChange}
                        //  className={styles.checkbox}
                        // onChange={checkboxHandler}
                      />
                      <label
                        htmlFor="check-up"
                        className="pt-0.5 text-black font-medium"
                      >
                        {data.status === "1" ? "Free Plan" : "Basic Plan"}
                      </label>
                    </div>
                  </td>
                  <td className=" font-medium">N {data.amount}</td>
                  <td className="font-medium">
                    {formatUnixTimestamp(
                      data.patientid ? data.ttime : data.ptime
                    )}
                  </td>
                  <td className="font-medium">
                    <div
                      className={`flex items-center justify-center space-x-1 h-[27px] w-[77px] rounded-full ${
                        data.statusname === "Paid" ? "bg-custom-g6" : "bg-white"
                      }`}
                    >
                      {" "}
                      <Image
                        src={`/images/icon/${
                          data.statusname === "Paid"
                            ? "good-mark-icon.svg"
                            : "error-close-icon.svg"
                        }`}
                        alt="arrow-down-icon"
                        className="h-full w-[10px]"
                        loading="eager"
                        priority
                        width={20}
                        height={20}
                      />
                      <p
                        className={`text-medium text-[12px] ${
                          data.statusname === "Paid"
                            ? "text-custom-g7"
                            : "text-white"
                        } `}
                      >
                        {data.statusname}
                      </p>
                    </div>
                  </td>
                  <td>
                    <button className="h-[15px] w-[19px]">
                      {" "}
                      <Image
                        src="/images/icon/download-icon-gray.svg"
                        alt="arrow-down-icon"
                        className="w-full w-full"
                        loading="eager"
                        priority
                        width={20}
                        height={20}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* NO-DATA-STATE */}
        {/* <div className="w-full text-center space-y-5 py-20">
          <div className="text-ash6">{tableEmptyStateTitle}</div>
          <button className="bg-custom text-thin py-3 px-10 rounded-full text-sm text-custom1">
            Book appointment
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default TransactionHistoryTable;
