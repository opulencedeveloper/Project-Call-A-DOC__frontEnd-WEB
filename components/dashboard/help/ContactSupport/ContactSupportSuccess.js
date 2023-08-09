import Image from "next/image";

const ContactSupportSuccess = (props) => {
  const {contactSupportHandler} = props;
  return (
    <div className="animateSlideUp flex flex-col justify-center space-y-8 h-[400px] w-[85%] z-50 pt-5 px-5 shadow-custom-shadow2 rounded-2xl bg-white md:h-[559px] md:px-11 md:w-[479px]">
      <div className="w-[100px] h-[100px] mx-auto md:w-[199px] md:h-[199px]"> 
        <Image
          src="/images/contact-support-checkmark-green-image.svg"
          loading="eager"
          priority
          alt=" end-appointment-image"
          className="h-full w-full"
          width={200}
          height={181}
        />
      </div>
      <p className="text-custom9 text-[20px] mt-3 leading-snug font-medium text-center md:text-[31px]">
      Message sent successfully
      </p>

      <button 
      onClick={contactSupportHandler}
       className=" border border-ash4 rounded-full px-12 py-3 text-black text-base md:py-4 md:text-xl">Ok</button>
    </div>
  );
};

export default ContactSupportSuccess;
