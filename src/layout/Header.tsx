import clsx from "clsx";
import { useState } from "react";
import VectorSVG from "../assets/Vector.svg";

type Language = "UKR" | "ENG";

function Header() {
   const [language, setLanguage] = useState<Language>("ENG");
   return (
      <header>
          {/* Visible on small screens (< 1000px) */}
          <div className="flex md:hidden absolute w-full justify-between top-6 left-0 px-6">
            <div>
               <img src={VectorSVG} alt="<-" />
            </div>
            <LanguageTab
               title={language === "UKR" ? "Eng" : "Укр"}
               value={language === "UKR" ? "ENG" : "UKR"}
               {...{ language, setLanguage }}
            />
         </div>
         {/* Visible on Desktop (> 1000px) */}
         <div className="hidden md:flex max-w-[852px] mx-auto justify-end px-2 py-4 gap-4">
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
