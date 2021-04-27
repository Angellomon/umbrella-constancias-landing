import { FunctionComponent as FC, JSX } from "preact";
import { useState } from "preact/hooks";
import { emailIsValid } from "./util";

interface Props {
  onFinish?: (email: string) => void | Promise<void>;
  isLoading?: boolean;
}

const FormEmail: FC<Props> = ({ onFinish = () => {}, isLoading = false }) => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [isError, setIsError] = useState(false);

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    if (emailIsValid(email)) {
      if (!email) return;

      await onFinish(email);
      setIsError(false);
    } else setIsError(true);
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
      class="flex flex-col md:flex-row justify-center items-center md:items-end mt-10 mx-10 text-white"
      onSubmit={handleSubmit}
    >
      <label class="flex flex-col md:max-w-md sm:w-full">
        Email{" "}
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
        class={`md:ml-5 block focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-30 w-full md:max-w-xs bg-blue-200  px-2 py-2 mt-2 text-blue-600 rounded-md`}
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
};

export default FormEmail;
