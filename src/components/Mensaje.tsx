import { FunctionalComponent as FC } from "preact";

const Mensaje: FC = () => {
  return (
    <article class="flex flex-row mx-8 lg:mx-80 md:mx-32 my-8">
      <div class="flex flex-col">
        <p class="text-justify font-light text-white text-xl xl:text-2xl my-3 lg:mt-10 leading-tight">
          Recuerda que para descargar tu constancia, es necesario que hayas
          cumplido con los requerimientos mínimos de asistencia del{" "}
          <strong class="text-white text-2xl font-bold">55 %</strong> del
          tiempo. En caso que no lo hayas cubierto, no podrás descargar la
          constancia.
        </p>
      </div>
    </article>
  );
};

export default Mensaje;
