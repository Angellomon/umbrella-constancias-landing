import { FunctionComponent as FC } from "preact";
import Logo from "../assets/logo_naequina.png";

interface Props {}

const HeaderPrincipal: FC<Props> = () => (
  <section>
    <div class="text-5xl text-center text-white">Constancias</div>
    <div class="flex flex-row justify-evenly items-start">
      <img src={Logo} alt="logo" class="w-1/2 h-1/2" />
      <span class="text-7xl text-center text-white mt-3">2021</span>
    </div>
  </section>
);

export default HeaderPrincipal;
