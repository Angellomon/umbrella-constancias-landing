import { FunctionComponent as FC } from "preact";
import Logo from "../assets/logo_naequina.png";

interface Props {}

const HeaderPrincipal: FC<Props> = () => (
  <section class="flex flex-col">
    <div class="text-5xl text-center text-white">Constancias</div>
    <div class="flex flex-row justify-evenly items-start">
      <img src={Logo} alt="logo" class="max-w-xl max-h-xl" />
      <span class="text-7xl text-center text-white mt-3">2021</span>
    </div>
  </section>
);

export default HeaderPrincipal;
