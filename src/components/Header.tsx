import { FunctionComponent as FC } from "preact";
import Logo from "../assets/logo_naequina.png";

interface Props {}

const HeaderPrincipal: FC<Props> = () => (
  <section class="flex flex-col justify-center md:justify-around">
    <div class="text-5xl lg:text-8xl  text-center text-white mb-5">
      Constancias
    </div>
    <div class="flex flex-col sm:flex-row  justify-center items-start">
      <img
        src={Logo}
        alt="logo"
        class="max-w-xs max-h-xs xl:max-w-xl xl:max-h-xl self-center mx-5"
      />
      <span class="text-7xl text-center text-white mt-3 self-center mx-5">
        2021
      </span>
    </div>
  </section>
);

export default HeaderPrincipal;
