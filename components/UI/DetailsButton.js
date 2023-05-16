import Image from "next/image";

const DetailsButton = (props) => {
 const {text, onClickNextHandler, onClickPrevHandler, color, buttonActive, thisButtonType} = props;
   const buttonText = text || 'Next';
   const buttonColor = color || "custom";
   const disabled = buttonActive || false;
   const buttonType = thisButtonType || "button";
  const onClickNextButtonHandler = () => {
    onClickNextHandler();
  }

  const onClickPrevButtonHandler = () => {
    onClickPrevHandler()
  } 

    return <div className="flex justify-end text-sm space-x-4">
    <button
    onClick={onClickPrevButtonHandler} 
    type="button"
    className="flex items-center text-custom space-x-2 border border-custom rounded-md px-6 py-2">
      <Image
        src="/images/icon/angle-left-blue.svg"
        alt="email-icon"
        className="w-3 h-3"
        width={12}
        height={12}
      />
      <p>Go back</p>
    </button>
    <button
    onClick={buttonType === "submit" ? null : onClickNextButtonHandler}
    type={buttonType}
    disabled={disabled}
     className={`flex items-center text-custom1 bg-${buttonColor} space-x-2 rounded-md px-6 py-2`}>
    <p>{buttonText}</p>
      <Image
        src="/images/icon/angle-right.svg"
        alt="email-icon"
        className="w-3 h-3"
        width={12}
        height={12}
      />
      
    </button>
  </div>
};

export default DetailsButton