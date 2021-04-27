import { FunctionalComponent as FC } from "preact";

import { useEffect, useState } from "preact/hooks";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

const Porcentaje: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let el = document.querySelector(".CircularProgressbar-trail");
    el?.setAttribute("stroke-width", "2");
    if (el) setVisible(true);
  }, []);

  return (
    <article
      class={` w-auto h-full self-center ${visible ? "visible" : "invisible"}`}
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
          textSize: 25,
        })}
      >
        <p class="text-white max-w-xs w-4/5  text-center mt-20 sm:mt-32 lg:mt-32 text-lg lg:text-xl ">
          de asistencia durante los 2 días
        </p>
      </CircularProgressbarWithChildren>
    </article>
  );
};

export default Porcentaje;
