import Image from "next/image";
import { useState } from "react";

const paymentMethodCard = [
  {
    cardType: "Credit Card",
    cardLogo: "master-card-logo",
  },
  {
    cardType: "Debit Card",
    cardLogo: "visa-card-logo",
  },
];

const PaymentMethod = () => {
  const [selectedCard, setSelectedCard] = useState("Credit Card");

  const selectedCardHandler = (cardType) => {
    setSelectedCard(cardType);
  };

  return (
    <div>
      <p className="text-lg font-medium md:text-[20px] mb-4">Payment method</p>
      <div className="flex w-full overflow-x-auto space-x-4">
        {paymentMethodCard.map((cardData, index) => {
          const selectedCardStyle =
            cardData.cardType === selectedCard ? "border border-custom" : "";
          return (
            <button
              onClick={() => selectedCardHandler(cardData.cardType)}
              key={index}
              className={`h-[169px] w-[288px] flex flex-shrink-0 flex-col ${selectedCardStyle} justify-between bg-ash3 rounded-xl px-5 py-6 `}
            >
              <div className="space-y-4 w-full">
                <div className="flex justify-between">
                  <p className="text-[12px] text-ash5">{cardData.cardType}</p>
                  <div
                    className="h-[14px] w-[14px]"
                    style={{ pointerEvents: "none" }} //this lets the div onclick event of the parent container cover up its child
                  >
                    {" "}
                    <Image
                      src={
                        cardData.cardType === selectedCard
                          ? "/images/icon/radio-on-blue.svg"
                          : "/images/icon/radio-off.svg"
                      }
                      alt="radio-icon"
                      className="w-full h-full"
                      priority
                      loading="eager"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex justify-between w-[80%]">
                  <div className="h-[24px] w-[40px]">
                    <Image
                      src={`/images/logo/${cardData.cardLogo}.svg`}
                      alt={cardData.cardLogo}
                      className="w-full h-full"
                      priority
                      loading="eager"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>****</div>
                  <div>****</div>
                  <div>****</div>
                  <p className="text-[16px]">2337</p>
                </div>{" "}
              </div>
              <div className="flex justify-end w-full">
                <div className="flex items-center rounded-full h-[28px] w-[28px] bg-ash z-0">
                  <div className="w-[70%] h-[3px] mx-auto bg-white rounded-full z-10"></div>
                </div>
              </div>
            </button>
          );
        })}
        <button className="h-[169px] w-[288px] flex flex-shrink-0 items-center justify-center item-center bg-ash3 rounded-xl px-5 py-6">
          <div className="relative flex items-center justify-center rounded-full h-[52px] w-[52px] bg-ash z-0">
            <div className="absolute w-[40%] h-[3px] mx-auto bg-white rounded-full"></div>
            <div className="absolute w-[2.5px] h-[40%] mx-auto bg-white rounded-full"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
