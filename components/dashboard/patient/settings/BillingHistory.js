import Image from "next/image";

const billingHistoryData = [
  {
    invoice: "Basic plan - May 2023",
    amount: "USD $4.00",
    date: "August 2, 2013",
  },
  {
    invoice: "Basic plan - May 2023",
    amount: "USD $4.00",
    date: "August 2, 2013",
  },
  {
    invoice: "Basic plan - May 2023",
    amount: "USD $4.00",
    date: "August 2, 2013",
  },
  {
    invoice: "Basic plan - May 2023",
    amount: "USD $4.00",
    date: "August 2, 2013",
  },
];

const BillingHistory = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-5">
        <p className="text-base font-medium mb-4 md:text-[20px] md:text-lg">
          Billing history
        </p>
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
      </div>

      <div className="overflow-x-auto w-full pb-1">
        <table className={`w-[40rem]  md:w-full`}>
          <thead className="bg-ash3 border-b">
            <tr className="h-full text-ash2">
              <th className="flex my-3 space-x-3 items-center font-normal text-start text-sm text-ash2 pl-5 lg:text-[16px]">
                <input
                  type="checkbox"
                  name="check-up"
                  checked={false}
                  className="h-[24px] w-[24px]"
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
            {billingHistoryData.map((billingData, index) => (
              <tr
                key={index}
                className="border-b h-[74px] text-sm md:text-[16px]"
              >
                <td>
                  <div className="flex items-center h-full py-2 pl-5 space-x-3">
                    <input
                      type="checkbox"
                      name="check-up"
                      checked={false}
                      className="h-[24px] w-[24px]"
                      //  className={styles.checkbox}
                      // onChange={checkboxHandler}
                    />
                    <label
                      htmlFor="check-up"
                      className="pt-0.5 text-black font-medium"
                    >
                      Basic plan - May 2023
                    </label>
                  </div>
                </td>
                <td className=" font-medium">USD $4.00</td>
                <td className="font-medium">August 2, 2013</td>
                <td className="font-medium">
                  <div className="flex items-center justify-center space-x-1 h-[27px] w-[77px] rounded-full bg-custom-g6">
                    {" "}
                    <Image
                      src="/images/icon/good-mark-icon.svg"
                      alt="arrow-down-icon"
                      className="h-full w-[10px]"
                      loading="eager"
                      priority
                      width={20}
                      height={20}
                    />
                    <p className="text-medium text-[12px] text-custom-g7">
                      Paid
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

export default BillingHistory;
