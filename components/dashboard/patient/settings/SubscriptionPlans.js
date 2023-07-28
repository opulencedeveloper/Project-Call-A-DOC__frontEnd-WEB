import Image from "next/image";
import { useState } from "react";

const subscriptionData = [
  { title: "Free plan", price: "$0" },
  { title: "Basic plan", price: "$4" },
  { title: "Professional plan", price: "$10" },
];

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("Free plan");

  const changeSubscriptionHandler = (subData) => {
    setSelectedPlan(subData);
  };

  return (
    <div className="space-y-7">
      {subscriptionData.map((subData, index) => {
        const selectedPlanStyle =
          subData.title === selectedPlan ? "bg-custom-g5" : "bg-white border";
        const selectedTitleStyle =
          subData.title === selectedPlan ? "font-medium" : "";
        return (
          <button
            onClick={() => changeSubscriptionHandler(subData.title)}
            key={index}
            className="block w-full"
          >
            <div
              className={`flex justify-between ${selectedPlanStyle} rounded-tl-xl rounded-tr-xl  py-4 px-5`}
            >
              <p
                className={`text-base ${selectedTitleStyle} md:text-[20px] text-custom`}
              >
                {subData.title}
              </p>
              <div
                style={{ pointerEvents: "none" }} //this lets the div onclick event of the parent container cover up its child
              >
                {" "}
                <Image
                  src={
                    subData.title === selectedPlan
                      ? "/images/icon/radio-on-blue.svg"
                      : "/images/icon/radio-off.svg"
                  }
                  alt="radion-icon"
                  className=" w-auto h-auto z-0"
                  priority
                  loading="eager"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="border-l border-r border-b border-ash4 rounded-br-xl rounded-bl-xl pt-2 pb-5 px-5">
              <div className="flex items-end space-x-1">
                <p className="text-[32px] font-medium">{subData.price}</p>
                <p className="text-[12px] text-ash6 mb-2">per month</p>
              </div>
              <p className="text-[13px] text-start">
                Includes 2 free appointments
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default SubscriptionPlans;
