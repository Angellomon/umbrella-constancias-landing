import { FunctionalComponent as FC } from "preact";

import Patrocinadores from "../assets/patrocinadores.png";

const Footer: FC = () => {
  return (
    <section class="mx-4 mt-20 ">
      <img
        class="w-full rounded-md border-blue-800"
        src={Patrocinadores}
        alt="patrocinadores"
      />
    </section>
  );
};

export default Footer;
