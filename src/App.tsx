import { Toaster } from "react-hot-toast";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";

function App() {
   return (
      <>
         <Header />
         <Main />
         <Footer />
         <Toaster />
      </>
   );
}

export { App };
