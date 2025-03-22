import { useEffect, useState } from "react";

import InfoSVG from "../assets/Info.svg";
import clsx from "clsx";
import {
   splitCardNumber,
   formatCardNumber,
   isValidNumber,
   unformatCardNumber
} from "../global/functions";

function InputField() {
   return <input type="text" />;
}

type HookFormInputProps = {
   setState: (val: string) => void;
};

// Card Number
InputField.CardNumber = function ({ setState }: HookFormInputProps) {
   const [cardNumberDisplay, setCardNumberDispay] = useState("");
   const cardNumber = unformatCardNumber(cardNumberDisplay);
   const cardNumberParts = splitCardNumber(cardNumber);

   useEffect(() => {
      setState(cardNumber);
   }, [cardNumber]);

   const zeroesPad = "0".repeat(16 - cardNumber.length);

   const zeroesPadParts = splitCardNumber(zeroesPad);

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
               className="input-field mono"
               value={cardNumberDisplay}
            />
            <div className="input-value mono gap-mono">
               {cardNumberParts.map((_, i) => (
                  <div>
                     <span>{cardNumberParts[i]}</span>
                     <span className="text-gray-7">
                        {zeroesPadParts[3 - i]}
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </label>
   );
};

// Card Expiration Date
InputField.CardDate = function ({ setState }: HookFormInputProps) {
   const [cardDateDisplay, setCardDateDisplay] = useState("");
   const cardDate = cardDateDisplay.replace(/\D/g, "").slice(0, 4);

   const formattedDate = [cardDate.slice(0, 2), cardDate.slice(2, 4)];

   useEffect(() => {
      setState(cardDate);
   }, [cardDate]);

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
                        ? `${value.slice(0, 2)} / ${value.slice(2)}`
                        : value
                  );
               }}
               type="text"
               className="input-field mono"
               value={cardDateDisplay}
            />
            <div className="input-value mono gap-mono">
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

// Card CVC
InputField.CardCVC = function ({ setState }: HookFormInputProps) {
   const [cardCVC, setCardCVC] = useState("");
   const cardCVCDisplay = "•".repeat(cardCVC.length);

   useEffect(() => {
      setState(cardCVC);
      console.log(cardCVC);
   }, [cardCVC]);

   const zeroesPad = "•••".slice(cardCVC.length);

   return (
      <label className="flex flex-col gap-1">
         <small className="text-xs text-gray-8">CVC</small>
         <div className="relative">
            <input
               onChange={({ target }) => {
                  const value = target.value.replace(/\D/g, "").slice(0, 3);
                  setCardCVC(value);
               }}
               type="text"
               className="input-field mono"
               value={cardCVC}
            />
            <div className="input-value mono justify-between items-center">
               <div>
                  <span>{cardCVCDisplay}</span>
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
