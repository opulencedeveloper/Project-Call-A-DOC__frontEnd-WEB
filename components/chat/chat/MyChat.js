import Image from "next/image";

const currentTime = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});

const MyChat = () => {
  return (
    <div className="flex flex-col h-full pb-14 bg-custom8 rounded-tl-2xl rounded-tr-2xl px-8">
      <div className="flex items-center justify-between border-b border-ash pb-3 pt-6 pr-8">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/doctor-joseph.svg"
            alt="doctor"
            className="h-[82px] w-[82px]"
            width={82}
            height={82}
          />
          <div className="text-lg">Dr. James Joseph</div>
        </div>
        <Image
          src="/images/icon/three-dot-vert.svg"
          alt="doctor"
          className="h-[24px] w-[24px]"
          width={24}
          height={24}
        />
      </div>
      <div className="flex flex-col justify-end h-full py-10 space-y-5">
        {/* Chats here */}
        {/* SENDER */}
        <div className="flex justify-end">
          {" "}
          <div className="flex space-x-1 items-end">
            <div className="space-y-2 flex flex-col items-end">
              <div className="max-w-xl ml-20 bg-ash4 p-4 rounded-tl-xl rounded-bl-xl rounded-tr-xl text-sm md:text-base">
                Good morning, i am having fever and mild headache, what do i do?
              </div>
              <div className="text-xs text-ash6">{currentTime}</div>
            </div>
            <Image
              src="/images/doctor-joseph.svg"
              alt="doctor"
              className="h-[42px] w-[42px]"
              width={576}
              height={320}
            />
          </div>{" "}
        </div>
        {/* RECEIVER */}
        <div className="flex space-x-1 items-end">
          <Image
            src="/images/doctor-joseph.svg"
            alt="doctor"
            className="h-[42px] w-[42px]"
            width={576}
            height={320}
          />
          <div className="space-y-2">
            <div className="mr-20 max-w-xl bg-ash4 p-4 rounded-tl-xl rounded-br-xl rounded-tr-xl text-sm md:text-base">
              Good morning Sir, how can i help you?
            </div>
            <div className="text-xs text-ash6">{currentTime}</div>
          </div>
        </div>
      </div>

      <div className="flex ">
        <input
          type="text"
          className="pl-7 py-4 w-full rounded-bl-xl rounded-tl-xl bg-custom1 placeholder-ash2 text-sm font-light focus:outline-none md:text-base"
          placeholder="Type in something here..."
        />{" "}
        <div className="bg-custom9 w-[71px] flex items-center justify-center rounded-br-xl rounded-tr-xl">
          <Image
            src="/images/icon/send.svg"
            alt="doctor"
            className="h-auto w-auto"
            width={29}
            height={28}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default MyChat;
