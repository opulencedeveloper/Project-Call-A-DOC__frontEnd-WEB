import Image from "next/image";

const DetailsButton = (props) => {
  const onClickHandler = () => {
    props.onClickHandler()
  }

  const value = props.text || 'Next';
    return <div className="flex justify-end text-sm space-x-4">
    <button 
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
    onClick={onClickHandler}
    type="button"
     className="flex items-center text-custom1 bg-custom space-x-2 rounded-md px-6 py-2">
    <p>{value}</p>
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