const LoadingSpinner = (props) => {
  const { errorMessage } = props;
  return (
    <div className="flex justify-center items-center h-screen">
      {errorMessage ? (
      <div className="bg-custom11 mx-10 rounded-md text-custom1 font-semibold text-sm py-3 px-5 md:px-10">
      <p className="text-center">{errorMessage}</p>
    </div>
      ) : (
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-custom"></div>
      )}
    </div>
  );
};

export default LoadingSpinner;
