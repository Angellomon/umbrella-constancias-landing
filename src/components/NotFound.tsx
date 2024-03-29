import { FunctionalComponent } from "preact";

interface Props {
  onClose?: () => void;
}

const NotFoundAlert: FunctionalComponent<Props> = ({ onClose = () => {} }) => {
  return (
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-8 py-3 rounded relative mt-5 mx-11 sm:mx-24 lg:mx-11"
      role="alert"
    >
      <span class="block sm:inline my-3">
        Según nuestros registros, no completaste el 55% de asistencia requerida
        para acceder a la constancia.
      </span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={onClose}>
        <svg
          class="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Cerrar</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
};

export default NotFoundAlert;
