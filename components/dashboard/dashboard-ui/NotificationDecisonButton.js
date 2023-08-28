const AppointmentDecison = (props) => {
  const { accept, reject, acceptButtonLabel, rejectButtonLabel } = props;

  return (
    <div className="flex space-x-2">
      {rejectButtonLabel && (
        <button className=" bg-red-500 rounded-full px-4 py-2 text-custom1 text-sm md:px-5 md:text-base">
          {rejectButtonLabel}
        </button>
      )}
      <button
        onClick={accept}
        className=" bg-green-500 rounded-full px-4 py-2 text-custom1 text-sm md:px-5 md:text-base"
      >
        {acceptButtonLabel}
      </button>
    </div>
  );
};
export default AppointmentDecison;
