import { useState } from "react";

function InputField() {
   return <input type="text" />;
}

import InfoSVG from "../assets/Info.svg";
import clsx from "clsx";

const isValidNumber = (str: string) => /^\d+$/.test(str);

const formatCardNumber = (value: string) => {
   const digitsOnly = value.replace(/\D/g, "");

   const truncated = digitsOnly.slice(0, 16);

   return truncated.replace(/(\d{4})/g, "$1 ").trim();
};

const unformatCardNumber = (formattedValue: string) => {
   return formattedValue.replace(/\D/g, "");
};

InputField.CardNumber = function () {
   const [cardNumberDisplay, setCardNumberDispay] = useState("");
   const cardNumber = unformatCardNumber(cardNumberDisplay);
   const cardNumberSyllables = [
      cardNumber.slice(0, 4),
      cardNumber.slice(4, 8),
      cardNumber.slice(8, 12),
      cardNumber.slice(12)
   ];

   const zeroesPad = "0".repeat(16 - cardNumber.length);

   const zeroesPadSyllables = [
      zeroesPad.slice(0, 4),
      zeroesPad.slice(4, 8),
      zeroesPad.slice(8, 12),
      zeroesPad.slice(12)
   ];

   return (
      <label className="flex flex-col gap-1">
         <small className="text-xs text-gray-8">Card Number</small>
         <div className="relative">
            <input
               onChange={({ target }) => {
                  if (
                     !isValidNumber(unformatCardNumber(target.value)) &&
                     target.value !== ""
                  )
                     return;
                  if (unformatCardNumber(target.value).length > 16) return;
                  setCardNumberDispay(formatCardNumber(target.value));
               }}
               type="text"
               className="border-gray-7 border-1 rounded-md outline-gray-6 outline-0 text-transparent caret-gray-8
               w-full py-2.5 px-3
               text-base transition
             focus:border-gray-6 focus:outline-[0.5px]"
               value={cardNumberDisplay}
               style={{ fontFamily: "monospace", letterSpacing: "0.05em" }}
            />
            <div
               className="py-2.5 px-3 absolute top-px left-px cursor-text flex monospace-gap text-base"
               style={{ fontFamily: "monospace", letterSpacing: "0.05em" }}
            >
               <div>
                  <span>{cardNumberSyllables[0]}</span>
                  <span className="text-gray-7">{zeroesPadSyllables[3]}</span>
               </div>
               <div>
                  <span>{cardNumberSyllables[1]}</span>
                  <span className="text-gray-7">{zeroesPadSyllables[2]}</span>
               </div>
               <div>
                  <span>{cardNumberSyllables[2]}</span>
                  <span className="text-gray-7">{zeroesPadSyllables[1]}</span>
               </div>
               <div>
                  <span>{cardNumberSyllables[3]}</span>
                  <span className="text-gray-7">{zeroesPadSyllables[0]}</span>
               </div>
            </div>
         </div>
      </label>
   );
};
InputField.CardDate = function () {
   const [cardDateDisplay, setCardDateDisplay] = useState("");
   const cardDate = cardDateDisplay.replace(/\D/g, "").slice(0, 4);

   const formattedDate = [cardDate.slice(0, 2), cardDate.slice(2, 4)];

   const datePadSyllables = [
      "MM".slice(cardDate.length),
      "YYYY".slice(cardDate.length).slice(0, 2)
   ];

   return (
      <label className="flex flex-col gap-1">
         <small className="text-xs text-gray-8">Expiration Date</small>
         <div className="relative">
            <input
               onChange={({ target }) => {
                  const value = target.value.replace(/\D/g, "").slice(0, 4);
                  if (value.length > 0 && parseInt(value.slice(0, 2)) > 12)
                     return;
                  setCardDateDisplay(
                     value.length > 2
                        ? `${value.slice(0, 2)}///${value.slice(2)}`
                        : value
                  );
               }}
               type="text"
               className="border-gray-7 border-1 rounded-md outline-gray-6 outline-0 text-transparent caret-gray-8
               w-full py-2.5 px-3 text-base transition
               focus:border-gray-6 focus:outline-[0.5px]"
               value={cardDateDisplay}
               style={{ fontFamily: "monospace", letterSpacing: "0.05em" }}
            />
            <div
               className="py-2.5 px-3 absolute top-px left-px cursor-text flex monospace-gap text-base"
               style={{ fontFamily: "monospace", letterSpacing: "0.05em" }}
            >
               <div>
                  <span>{formattedDate[0]}</span>
                  <span className="text-gray-7">{datePadSyllables[0]}</span>
               </div>
               <span
                  className={clsx("text-gray-7", {
                     "text-gray-11": cardDate.length > 2
                  })}
               >
                  /
               </span>
               <div>
                  <span>{formattedDate[1]}</span>
                  <span className="text-gray-7">{datePadSyllables[1]}</span>
               </div>
            </div>
         </div>
      </label>
   );
};
InputField.CardCVC = function () {
   const [cardCVCDisplay, setCardCVCDisplay] = useState("");
   const cardCVC = cardCVCDisplay.replace(/\D/g, "").slice(0, 3);

   const zeroesPad = "•••".slice(cardCVC.length);

   return (
      <label className="flex flex-col gap-1">
         <small className="text-xs text-gray-8">CVC</small>
         <div className="relative">
            <input
               onChange={({ target }) => {
                  const value = target.value.replace(/\D/g, "").slice(0, 3);
                  setCardCVCDisplay(value);
               }}
               type="text"
               className="border-gray-7 border-1 rounded-md outline-gray-6 outline-0 text-transparent caret-gray-8
               w-full py-2.5 px-3 text-base transition
               focus:border-gray-6 focus:outline-[0.5px]"
               value={cardCVCDisplay}
               style={{ fontFamily: "monospace", letterSpacing: "0.05em" }}
            />
            <div
               className="py-2.5 px-3 absolute top-px left-px cursor-text flex text-base justify-between w-full items-center"
               style={{ fontFamily: "monospace", letterSpacing: "0.05em" }}
            >
               <div>
                  <span>{cardCVC}</span>
                  <span className="text-gray-7">{zeroesPad}</span>
               </div>
               <div>
                  <img src={InfoSVG} alt="i" />
               </div>
            </div>
         </div>
      </label>
   );
};

export { InputField };
