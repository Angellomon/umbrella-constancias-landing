import { FunctionComponent as FC, JSX } from "preact";
import { useState } from "preact/hooks";
import { emailIsValid } from "./util";
import Loading from "./Loading";

interface Props {
  onFinish?: (email: string) => void | Promise<void>;
  isLoading?: boolean;
}

const FormEmail: FC<Props> = ({ onFinish = () => {} }) => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = (event) => {
    const doSubmit = async () => {
      setIsLoading(true);
      event.preventDefault();

      if (emailIsValid(email)) {
        if (!email) return;

        await onFinish(email);
        setIsError(false);
      } else setIsError(true);
      setIsLoading(false);
    };
    doSubmit();
  };

  const handleEmailInput: JSX.GenericEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (!event.target) return;
    setIsError(false);

    setEmail((event.target as any).value);
  };

  return (
    <form
      class="flex flex-col md:flex-row justify-center items-center md:items-end mt-10 max-w-sm md:max-w-3xl w-3/4 lg:w-full text-white"
      onSubmit={handleSubmit}
    >
      <label class="flex flex-col w-full mx-10 md:mx-0">
        Email
        {isError && (
          <div class="text-yellow-200 ">* El correo no es válido</div>
        )}
        <input
          placeholder="alguien@algun-lugar.com"
          class="form-input rounded-md text-blue-900"
          id="email"
          type="email"
          value={email}
          onInput={handleEmailInput}
        />
      </label>
      <button
        disabled={isLoading}
        class={`cursor-pointer md:ml-5 block focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-30 w-full md:w-1/3 md:max-w-xs bg-blue-200 px-2 py-2 mt-2 text-blue-600 rounded-md`}
        type="submit"
      >
        <span class="flex flex-row justify-center">
          {isLoading ? <span>Cargando...</span> : <span>Enviar</span>}
          {isLoading && <Loading />}
        </span>
      </button>
    </form>
  );
};

export default FormEmail;
