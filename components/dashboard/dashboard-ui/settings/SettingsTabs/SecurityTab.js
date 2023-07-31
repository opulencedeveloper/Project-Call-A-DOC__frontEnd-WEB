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
      <button className={`${props.buttonLabelColor} text-xs h-max px-4 py-3 md:text-[18px]`}>
        {props.buttonLabel}
      </button>
    </div>
  );
};

const SecurityTab = () => {
  return (
    <div className="px-0 w-full h-full overflow-y-auto w-full bg-white md:px-7">
      <p className="text-lg font-medium md:text-[25px] mb-8">Security</p>
      <SectionTemplate
        border="border-b border-t"
        title=" Deactivate my account"
        description="This will shut down your account temporarily. Your account will be
          reactivated when next you sign in"
        buttonLabel="Deactivate"
        buttonLabelColor="text-ash4"
      />
      <SectionTemplate
        border="border-b"
        title="Delete account"
        description="This will delete your account. Your account will be permanently deleted from Call-a-doc"
        buttonLabel="Delete"
        buttonLabelColor="text-red-500"
      />{" "}
    </div>
  );
};

export default SecurityTab;
