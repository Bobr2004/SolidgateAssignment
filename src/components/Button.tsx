import { PropsWithChildren } from "react";

function Button() {
   return <button></button>;
}

Button.Accent = function ({ children }: PropsWithChildren) {
   return (
      <div className="group">
         <button
            className="w-full py-3 px-4 text-center font-semibold rounded-md cursor-pointer
         transition relative group-hover:top-[-2px] active:top-[4px]
       text-gray-1 bg-accent hover:bg-accent-h active:bg-accent-p"
         >
            {children}
         </button>
      </div>
   );
};

Button.Absolute = function ({ children }: PropsWithChildren) {
   return (
      <button
         className="w-full py-3.5 px-4 cursor-pointer
         rounded-[3px] flex justify-center
       text-gray-1 bg-gray-12"
      >
         {children}
      </button>
   );
};

export { Button };
