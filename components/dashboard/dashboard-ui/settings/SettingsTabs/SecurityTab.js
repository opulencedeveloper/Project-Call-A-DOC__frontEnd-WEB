import LoadingSpinner from "@/components/UI/LoadingSpinner";
import useHttp from "@/hooks/useHttp";

const SectionTemplate = (props) => {
  return (
    <div
      className={`flex justify-between ${props.border} border-ash-4 w-full p-7`}
    >
      {" "}
      <div className="space-y-2">
        {" "}
        <p className="text-sm font-semibold md:text-[18px]">{props.title}</p>
        <p className="text-xs text-ash5 md:text-[13px]">
          {props.description}
        </p>{" "}
      </div>
      <button
        onClick={() => props.deactiveOrDeleteButtonHandler(props.buttonLabel)}
        className={`${props.buttonLabelColor} text-xs h-max px-4 py-3 md:text-[18px]`}
      >
        {props.buttonLabel}
      </button>
    </div>
  );
};

const SecurityTab = (props) => {
  const { isLoading, error, sendRequest: deactiveOrDelete } = useHttp();
  const { token, type } = props;

  const myResponse = (res) => {
    const { status, message } = res;
    if (status === "success") {
      props.setProfileUpdateHandler(true, message);
    }
  };

  const deactiveOrDeleteButtonHandler = (val) => {
    const urlDecisionMap = {
      Doctor: {
        Deactivate: "doctor/deactivateaccount",
        Delete: "doctor/deleteaccount",
      },
      Patient: {
        Deactivate: "customer/deactivateaccount",
        Delete: "customer/deleteaccount",
      },
    };
  
    const url = urlDecisionMap[type]?.[val];
  
    if (!url) {
      return;
    }
  
    deactiveOrDelete({
      url: url,
      method: "POST",
      token: token,
    }, myResponse);
  };
  

  if (isLoading) {
    return <LoadingSpinner pageHeight="h-full" />;
  }

  return (
    <div className="px-0 w-full h-full overflow-y-auto w-full bg-white md:px-7">
      <p className="text-lg font-medium md:text-[25px] mb-8">Security</p>
      {error && (
        <div className="bg-custom11 mb-5 w-max rounded-md text-custom1 font-semibold text-sm py-2 px-5 md:px-10">
          <p className="text-center">{error}</p>
        </div>
      )}
      <SectionTemplate
        border="border-b border-t"
        title=" Deactivate my account"
        description="This will shut down your account temporarily. Your account will be
          reactivated when next you sign in"
        buttonLabel="Deactivate"
        deactiveOrDeleteButtonHandler={deactiveOrDeleteButtonHandler}
        buttonLabelColor="text-ash4"
      />
      <SectionTemplate
        border="border-b"
        title="Delete account"
        description="This will delete your account. Your account will be permanently deleted from Call-a-doc"
        buttonLabel="Delete"
        deactiveOrDeleteButtonHandler={deactiveOrDeleteButtonHandler}
        buttonLabelColor="text-red-500"
      />{" "}
    </div>
  );
};

export default SecurityTab;
