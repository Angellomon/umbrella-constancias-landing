import { LandingLayout } from "./layouts";
import {
  AvisoConstancias,
  FormEmail,
  HeaderPrincipal,
  NotFoundAlert,
  Footer,
  PDFDoc,
} from "./components";
import axios from "axios";
import { useState } from "preact/hooks";

export function App() {
  const [isError, setIsError] = useState(false);

  const [pdfFile, setPdfFile] = useState("");

  const handleFinished = async (email: string) => {
    try {
      setIsError(false);
      const res = await axios.get(
        `https://umbrella-constancias.herokuapp.com/eventos/d02mbve0yy/asistentes/buscar?correo=${email}`,
        {
          responseType: "blob",
        }
      );

      if (res.status !== 200) return;

      const url = window.URL.createObjectURL(new Blob([res.data]));
      // window.open(url);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        "CONSTANCIA DE PARTICIPACIÓN NAEQUINA 2021.pdf"
      ); //or any other extension
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.log(error);

      setIsError(true);
    } finally {
    }
  };

  const handleClose = () => {
    setIsError(false);
  };

  return (
    <LandingLayout>
      <HeaderPrincipal />
      <FormEmail onFinish={handleFinished} />
      {isError && <NotFoundAlert onClose={handleClose} />}
      <AvisoConstancias />
      <Footer />
      {pdfFile && <PDFDoc file={pdfFile} />}
    </LandingLayout>
  );
}
