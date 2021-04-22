import { FunctionComponent as FC } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { ChangingProgressProvider } from "../context";
import { useChangingProgress } from "../hooks";

const AvisoConstancias: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let el = document.querySelector(".CircularProgressbar-trail");
    el?.setAttribute("stroke-width", "2");
    if (el) setVisible(true);
  }, []);

  return (
    <section class="flex flex-col sm:flex-row md:flex-row mx-5 my-10 lg:m-20 justify-center">
      <article
        class={`w-4/5 h-4/5 sm:w-3/4 sm:h-3/4 self-center ${
          visible ? "visible" : "invisible"
        }`}
      >
        <CircularProgressbarWithChildren
          strokeWidth={5}
          value={55}
          text={`${55}%`}
          circleRatio={0.75}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: "butt",
            trailColor: "#fff",
            textColor: "#fff",
            pathColor: "#fff",
          })}
        >
          <p class="text-white max-w-xs w-4/5 text-center mt-20 lg:mt-32 text-lg sm:text-lg lg:text-xl ">
            de asistencia durante los 2 días
          </p>
        </CircularProgressbarWithChildren>
      </article>
      <article class="flex flex-row mx-8 my-8">
        <div class="flex flex-col">
          <p class="font-light text-white text-xl my-3">
            Recuerda que para descargar tu constancia, es necesario que hayas
            cumplido con los requerimientos mínimos de asistencia del{" "}
            <strong class="text-white text-2xl">55 %</strong>.
          </p>
          <p class="font-light text-white text-xl my-3">
            En caso de que no lo hayas cubierto, no podrás descargar tu
            constancia.
          </p>
        </div>
      </article>
    </section>
  );
};

export default AvisoConstancias;
