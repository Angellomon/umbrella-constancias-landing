import { FunctionComponent as FC } from "preact";
import Logo from "../assets/logo_naequina.png";

interface Props {}

const HeaderPrincipal: FC<Props> = () => (
  <section class="flex flex-col justify-center">
    <div class="text-5xl text-center text-white">Constancias</div>
    <div class="flex flex-col sm:flex-row md:justify-between justify-center items-start">
      <img
        src={Logo}
        alt="logo"
        class="max-w-xs max-h-xs xl:max-w-xl xl:max-h-xl self-center"
      />
      <span class="text-7xl text-center text-white mt-3 self-center">2021</span>
    </div>
  </section>
);

export default HeaderPrincipal;
