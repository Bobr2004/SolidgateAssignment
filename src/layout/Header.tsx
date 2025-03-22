import clsx from "clsx";
import { useState } from "react";
import VectorSVG from "../assets/Vector.svg";

type Language = "UKR" | "ENG";

function Header() {
   const [language, setLanguage] = useState<Language>("ENG");
   return (
      <header>
         <div className="max-w-[852px] mx-auto hidden md:flex justify-end p-2 gap-4">
            <LanguageTab
               title="Eng"
               value="ENG"
               {...{ language, setLanguage }}
            />
            <LanguageTab
               title="Укр"
               value="UKR"
               {...{ language, setLanguage }}
            />
         </div>
         <div className="absolute w-full flex justify-between top-6 px-6 left-0 md:hidden">
            <div>
               <img src={VectorSVG} alt="<-" />
            </div>
            <LanguageTab
               title={language === "UKR" ? "Eng" : "Укр"}
               value={language === "UKR" ? "ENG" : "UKR"}
               {...{ language, setLanguage }}
            />
         </div>
      </header>
   );
}

type LanguageTabProps = {
   title: string;
   value: Language;
   language: Language;
   setLanguage: (languageVal: Language) => void;
};

function LanguageTab({
   title,
   value,
   language,
   setLanguage
}: LanguageTabProps) {
   return (
      <button
         disabled={language === value}
         className={clsx("transition cursor-pointer", {
            "!text-[#B0B4BE] !cursor-not-allowed": language === value
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
