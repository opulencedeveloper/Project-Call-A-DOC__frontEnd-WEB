import Image from "next/image";

const LoadingSpinner = (props) => {
  const { errorMessage, pageHeight, loadWidth } = props;
  const loadedBgHeight = pageHeight || "h-screen";
  const loaderWidth = loadWidth || "w-full";
  return (
    <div className={`flex justify-center items-center ${loadedBgHeight} ${loaderWidth}`}>
      {errorMessage ? (
      <div className="bg-custom11 mx-10 rounded-md text-custom1 font-semibold text-sm py-3 px-5 md:px-10">
      <p className="text-center">{errorMessage}</p>
    </div>
      ) : ( 
        <Image
        src="/images/icon/load.gif"
        alt="angle-right-gray-icon"
        className="w-auto h-auto"
        priority
        loading="eager"
        width={16.5}
        height={16.5}
      />
        // <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-custom"></div>
      )}
    </div>
  );
};

export default LoadingSpinner;
