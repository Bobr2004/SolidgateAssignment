import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError, useForm } from "react-hook-form";
import { z } from "zod";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import toast from "react-hot-toast";

import LoaderSVG from "../assets/Loader.svg";
import { wait } from "../global/functions";

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
         <fieldset>
            <InputField.CardNumber setState={setCardNumber} />
            <ErrorMessage fieldError={errors.cardNumber} />
         </fieldset>
         <div className="flex gap-2 mt-3">
            <fieldset>
               <InputField.CardDate setState={setCardDate} />
               <ErrorMessage fieldError={errors.cardDate} />
            </fieldset>
            <fieldset>
               <InputField.CardCVC setState={setCardCVC} />
               <ErrorMessage fieldError={errors.cardCVC} />
            </fieldset>
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

function ErrorMessage({ fieldError }: { fieldError: FieldError | undefined }) {
   if (fieldError)
      return <small className="text-red-600">{fieldError.message}</small>;
   return <></>;
}

export { Form };
