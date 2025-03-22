import { twMerge } from "tailwind-merge";
import { Button } from "../components/Button";
import { Separator } from "../components/Separator";

import AppleSVG from "../assets/Apple.svg";
import VectorSVG from "../assets/Vector.svg";
import { Form } from "./Form";

function Main() {
   return (
      <main className="flex flex-col items-center md:items-start md:flex-row md:justify-center px-4 gap-8">
         <section className="max-w-[420px] w-full md:grow">
            <div className="mt-5 md:mt-0 flex flex-col items-center md:items-start">
               <h2 className="font-semibold text-lg relative">
                  Checkout{" "}
                  <div className="hidden md:block absolute top-1/2 -left-6 -translate-y-1/2">
                     <img src={VectorSVG} alt="<-" />
                  </div>
               </h2>
               <p className="flex flex-col items-center  md:items-start mt-4">
                  <b className="text-2xl">5 days free</b>
                  <span className="text-sm">then 299.99 UAH per 14 days</span>
               </p>
               <div className="mt-6 w-full">
                  <Button.Absolute>
                     <img src={AppleSVG} alt="Apple pay" />
                  </Button.Absolute>
               </div>
            </div>
            <div className="flex gap-4 items-center mt-6">
               <Separator />
               <p className="grow w-full text-center text-gray-8 whitespace-nowrap">
                  or pay with card
               </p>
               <Separator />
            </div>
            <div>
               <Form />
            </div>
            <div className="mt-2">
               <p className="border-gray-4 border-[1px] rounded-lg px-4 py-3 ">
                  <small className="text-xs text-gray-8">
                     You'll have your <b>Plan Pro during 1 year.</b> After this
                     period of time, your plan will be <b>automatically</b>{" "}
                     renewed with its original price without any discounts
                     applied.
                  </small>
               </p>
            </div>
         </section>
         <section className="max-w-[420px] w-full md:grow">
            <div
               className={twMerge(
                  "rounded-lg bg-gray-2 p-4 pt-3 md:p-8 md:pb-10 flex flex-col gap-4"
               )}
            >
               <h2 className="md:mb-2 text-lg font-semibold">
                  Wireless earbuds with noise canceling & long battery (56
                  characters)
               </h2>
               <p>
                  Enjoy premium sound with our wireless earbuds. Featuring noise
                  cancellation, long battery life, and a comfortable fit,
                  they’re perfect for work, travel, and workouts. Seamless
                  Bluetooth ensures uninterrupted listening anywhere. (230
                  characters)
               </p>
               <Separator />
               <p className="flex flex-col">
                  <span className="text-sm">
                     Lamel Professional Smart Skin Compact Powder
                  </span>{" "}
                  <small className="text-xs text-gray-6">Пудра для лица</small>
               </p>
               <Separator />
               <p className="flex justify-end">
                  <b className="text-sm">Total 299.99 UAH</b>
               </p>
            </div>
         </section>
      </main>
   );
}


export { Main };
