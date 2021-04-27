import { FunctionalComponent as FC } from "preact";

import Patrocinadores from "../assets/patrocinadores.png";

const Footer: FC = () => {
  return (
    <section class="m-4 ">
      <img
        class="w-full rounded-md border-blue-800"
        src={Patrocinadores}
        alt="patrocinadores"
      />
    </section>
  );
};

export default Footer;
