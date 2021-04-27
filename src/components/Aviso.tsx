import { FunctionComponent as FC } from "preact";
import Porcentaje from "./Porcentaje";
import Mensaje from "./Mensaje";

const AvisoConstancias: FC = () => {
  return (
    <section class="flex flex-col sm:flex-row md:flex-row mx-5 mt-10  justify-center ">
      <Porcentaje />
      <Mensaje />
    </section>
  );
};

export default AvisoConstancias;
