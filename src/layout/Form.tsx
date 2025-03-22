import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import toast from "react-hot-toast";

import LoaderSVG from "../assets/Loader.svg";

const wait = (seconds: number) =>
   new Promise((resolve) => setTimeout(resolve, seconds * 1000));

const cardSchema = z.object({
   cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
   cardDate: z.string().regex(/^(0[1-9]|1[0-2])\d{2}$/, "Format: MMYY"),
   cardCVC: z.string().regex(/^\d{3,4}$/, "CVC must be 3 or 4 digits")
});

function Form() {
   const {
      handleSubmit,
      setValue,
      formState: { errors, isSubmitting }
   } = useForm({
      resolver: zodResolver(cardSchema),
      defaultValues: {
         cardNumber: "",
         cardDate: "",
         cardCVC: ""
      }
   });

   const setCardNumber = (val: string) => {
      setValue("cardNumber", val);
   };
   const setCardDate = (val: string) => {
      setValue("cardDate", val);
   };
   const setCardCVC = (val: string) => {
      setValue("cardCVC", val);
   };

   const onSubmit = async (data: any) => {
      console.log("Valid data:", data);
      await wait(2);
      toast.success("Transaction successfully made");
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="mt-4">
            <InputField.CardNumber setState={setCardNumber} />
            {errors.cardNumber && (
               <small className="text-red-600">
                  {errors.cardNumber.message}
               </small>
            )}
         </div>
         <div className="flex gap-2 mt-3">
            <div>
               <InputField.CardDate setState={setCardDate} />
               {errors.cardDate && (
                  <small className="text-red-600">
                     {errors.cardDate.message}
                  </small>
               )}
            </div>
            <div>
               <InputField.CardCVC setState={setCardCVC} />
               {errors.cardCVC && (
                  <small className="text-red-600">
                     {errors.cardCVC.message}
                  </small>
               )}
            </div>
         </div>
         <div className="mt-4">
            <Button.Accent>
               <div className="flex gap-2 justify-center">
                  {!isSubmitting && <span>Pay 299.99 UAH</span>}
                  {isSubmitting && (
                     <>
                        <img
                           src={LoaderSVG}
                           alt="..."
                           className="animate-spin"
                        />{" "}
                        <span>Processing payment</span>
                     </>
                  )}
               </div>
            </Button.Accent>
         </div>
      </form>
   );
}

export { Form };
