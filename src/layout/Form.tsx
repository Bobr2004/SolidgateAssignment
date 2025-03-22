import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";

const cardSchema = z.object({
   cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
   cardDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Format: MM/YY"),
   cardCVC: z.string().regex(/^\d{3,4}$/, "CVC must be 3 or 4 digits")
});

function Form() {
   const [cardNumber, setCardNumber] = useState("");
   const [cardDate, setCardDate] = useState("");
   const [cardCVC, setCardCVC] = useState("");

   const {
      register,
      handleSubmit,
      setValue,
      watch,
      formState: { errors }
   } = useForm({
      resolver: zodResolver(cardSchema),
      defaultValues: {
         cardNumber: "",
         cardDate: "",
         cardCVC: ""
      }
   });

   useEffect(() => {
      setCardNumber(watch("cardNumber"));
      setCardDate(watch("cardDate"));
      setCardCVC(watch("cardCVC"));
   }, [watch]);

   const onSubmit = (data: any) => {
      console.log("Valid data:", data);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="mt-4">
            <InputField.CardNumber />
         </div>
         <div className="flex gap-2 mt-3">
            <div>
               <InputField.CardDate />
            </div>
            <div>
               <InputField.CardCVC />
            </div>
         </div>
         <div className="mt-4">
            <Button.Accent>Pay 299.99 UAH</Button.Accent>
         </div>
      </form>
   );
}

export { Form };
