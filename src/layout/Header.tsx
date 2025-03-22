import clsx from "clsx";
import { useState } from "react";
import VectorSVG from "../assets/Vector.svg";

type Language = "UKR" | "ENG";

function Header() {
   const [selectedLanguage, setSelectedLanguage] = useState<Language>("ENG");
   return (
      <header>
         <div className="max-w-[852px] mx-auto hidden md:flex justify-end p-2 gap-4">
            <LanguageTab
               title="Eng"
               value="ENG"
               isSelected={selectedLanguage === "ENG"}
               setLanguage={setSelectedLanguage}
            />
            <LanguageTab
               title="Укр"
               value="UKR"
               isSelected={selectedLanguage === "UKR"}
               setLanguage={setSelectedLanguage}
            />
         </div>
         <div className="absolute w-full flex justify-between top-6 px-6 left-0 md:hidden">
            <div>
               <img src={VectorSVG} alt="<-" />
            </div>
            <LanguageTab
               title={selectedLanguage === "UKR" ? "Eng" : "Укр"}
               value={selectedLanguage === "UKR" ? "ENG" : "UKR"}
               isSelected={false}
               setLanguage={setSelectedLanguage}
            />
         </div>
      </header>
   );
}

type LanguageTabProps = {
   title: string;
   value: Language;
   isSelected: boolean;
   setLanguage: (languageVal: Language) => void;
};

function LanguageTab({
   title,
   value,
   isSelected,
   setLanguage
}: LanguageTabProps) {
   return (
      <button
         disabled={isSelected}
         className={clsx("transition cursor-pointer", {
            "!text-[#B0B4BE] !cursor-not-allowed": isSelected
         })}
         onClick={() => {
            setLanguage(value);
         }}
      >
         {title}
      </button>
   );
}

export { Header };
