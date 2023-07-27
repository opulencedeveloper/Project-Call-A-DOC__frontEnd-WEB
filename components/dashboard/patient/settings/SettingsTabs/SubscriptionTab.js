
import BillingHistory from "../BillingHistory";
import PaymentMethod from "../PaymentMethod";
import SubscriptionPlans from "../SubscriptionPlans";
import ToggleButton from "../ToggleButton";


const SubscriptionTab = () => {
  return (
    <div className="px-7 w-full h-full overflow-y-auto w-full bg-white">
      <p className="text-lg font-medium md:text-[25px] mb-8">Subscriptions</p>
      <div className="border-t space-y-7 border-ash-4 w-full pt-7">
        <SubscriptionPlans /> 
        <div className={`flex justify-between w-full`}>
          {" "}
          <div className="space-y-1">
            {" "}
            <p className="text-base font-semibold md:text-[18px]">
            Enable auto renew
            </p>
            <p className="text-sm text-ash5 md:text-[13px]">
            If checked, your subscription will charged from your primary payment method at the end of your subscription date
            </p>{" "}
          </div>
          <ToggleButton /> 
        </div>
        <PaymentMethod />
        <BillingHistory />
      </div>
    </div>
  );
};

export default SubscriptionTab;
