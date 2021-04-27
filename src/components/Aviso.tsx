import { FunctionComponent as FC } from "preact";
import Porcentaje from "./Porcentaje";
import Mensaje from "./Mensaje";

const AvisoConstancias: FC = () => {
  return (
    <section class="flex flex-col mt-10 justify-center items-center">
      <Mensaje />
      <Porcentaje />
    </section>
  );
};

export default AvisoConstancias;
