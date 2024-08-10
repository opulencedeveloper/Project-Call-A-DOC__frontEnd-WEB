import useHttp from "@/hooks/useHttp";

const SubscriptionButton = (props) => {
  const { token, plan } = props;
  const { isLoading, error, sendRequest: subscribeToPlan } = useHttp();

  const myResponse = (res) => {
    const { status, message } = res;
    console.log(res);
    if (status === "success" && message === "OTP is successfully sent to you") {
      // setShowOTPInput(true);
    }
  };

  const startSubscription = (plan) => {
    console.log("herereee ", token);
    subscribeToPlan(
      {
        url: "customer/subscription/subscribe",
        method: "POST",
        body: { plan: plan },
        token: token,
      },
      myResponse
    );
  };

  console.log(error);
  return (
   <div className="flex flex-col items-end gap-2"> 
   <button
      onClick={isLoading ? null : () => startSubscription(plan)}
      className=" text-sm bg-custom rounded-[320px] text-white text-[18px]  outline-none px-[8px] w-[120px] h-[40px] md:h-[54px] md:w-max md:text-base md:px-[24px]"
    >
      {isLoading ? "Please wait.." : "Get started"}
    </button>
    {error && <p className="text-sm text-red-500 mr-3">{error}</p>}
    </div>
  );
};

export default SubscriptionButton;
