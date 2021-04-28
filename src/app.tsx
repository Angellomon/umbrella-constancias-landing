import { LandingLayout } from "./layouts";
import {
  AvisoConstancias,
  FormEmail,
  HeaderPrincipal,
  NotFoundAlert,
  Footer,
} from "./components";
import axios from "axios";
import { useState } from "preact/hooks";

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleFinished = async (email: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await axios.get(
        // `https://naequina-constancias.herokuapp.com/api/v1/asistentes/buscar?correo=${email}`,
        `http://localhost:5001/api/v1/asistentes/buscar?correo=${email}`,
        {
          responseType: "blob",
        }
      );

      if (res.status !== 200) return;

      const url = window.URL.createObjectURL(new Blob([res.data]));
      window.open(url);
      // const link = document.createElement("a");
      // link.href = url;
      // link.setAttribute("download", "file.pdf"); //or any other extension
      // document.body.appendChild(link);
      // link.click();
    } catch (error) {
      console.log(error);

      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsError(false);
  };

  return (
    <LandingLayout>
      <HeaderPrincipal />
      <FormEmail onFinish={handleFinished} isLoading={isLoading} />
      {isError && <NotFoundAlert onClose={handleClose} />}
      <AvisoConstancias />
      <Footer />
    </LandingLayout>
  );
}
