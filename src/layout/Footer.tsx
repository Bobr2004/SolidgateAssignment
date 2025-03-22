import SolidSVG from "../assets/Solid.svg";

function Footer() {
   return (
      <footer>
         <p className="mb-10 md:mb-6 flex gap-1 items-center justify-center text-sm text-gray-8">
            Powered by <img src={SolidSVG} alt="Solid" />
         </p>
      </footer>
   );
}

export { Footer };
