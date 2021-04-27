import { FunctionalComponent as FC } from "preact";

const Mensaje: FC = () => {
  return (
    <article class="flex flex-row mx-8 my-8">
      <div class="flex flex-col">
        <p class="font-light text-white text-xl xl:text-2xl my-3 lg:mt-10 leading-tight">
          Recuerda que para descargar tu constancia, es necesario que hayas
          cumplido con los requerimientos mínimos de asistencia del{" "}
          <strong class="text-white text-2xl font-bold">55 %</strong>
          .<br class="my-3" />
        </p>
        <p class="font-light text-white text-xl xl:text-2xl leading-tight">
          En caso de que no lo hayas cubierto, no podrás descargar tu
          constancia.
        </p>
      </div>
    </article>
  );
};

export default Mensaje;
