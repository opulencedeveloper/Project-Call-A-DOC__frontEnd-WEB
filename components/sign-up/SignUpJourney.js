import Image from "next/image";

const SignUpJourney = () => {
    return <div className="md:px-0 lg:px-20 2xl:px-40">
    <div className="w-1/2 border">
      <Image
        src="/images/icon/step-1.svg"
        alt="step-1"
        className="w-full h-6"
        width={64}
        height={61}
      />
    </div>
    <p className="text-lg font-medium">Let's get to know you</p>

    <div className="flex items-center space-x-5 bg-custom p-8 rounded-md text-custom1 mb-10">
      <div>
        <Image
          src="/images/icon/radio-on.svg"
          alt="call-a-doc-logo-two"
          className="w-10 h-10"
          width={24}
          height={21}
        />
      </div>

      <div>
        <p className="font-semibold text-xl text-medium">I'm a Patient</p>
        <p className="text-base">
          Get access to over 1000+ specialist to ensure you have a sound
          health
        </p>
      </div>
    </div>

    <div className="flex items-center space-x-5  shadow-2xl p-8 rounded-md text-black">
      <div>
        <Image
          src="/images/icon/radio-off.svg"
          alt="call-a-doc-logo-two"
          className="w-10 h-10"
          width={24}
          height={21}
        />
      </div>

      <div>
        <p className="font-semibold text-xl text-medium">I'm a Doctor</p>
        <p className="text-base">
        Meet with patients and provide the required solution to their health problems
        </p>
      </div>
    </div>
  </div>
};

export default SignUpJourney;