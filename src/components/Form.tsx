import { FunctionComponent as FC, JSX } from "preact";
import { useState } from "preact/hooks";
import { emailIsValid } from "./util";

interface Props {
  onFinish?: (email: string) => void | Promise<void>;
}

const FormEmail: FC<Props> = ({ onFinish = () => {} }) => {
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
    console.log(event.target.value);

    setEmail(event.target.value);
  };

  return (
    <form
      class="flex sm:flex-col md:flex-row justify-center xs:items-end xl:items-center mt-3 mx-10 text-white"
      onSubmit={handleSubmit}
    >
      <label class="flex flex-col px-2 max-w-md ">
        Email
        <input
          placeholder="alguien@algunlugar.com"
          class="form-input rounded-md text-blue-900"
          id="email"
          type="email"
          value={email}
          onInput={handleEmailInput}
        />
        {isError && (
          <span class="text-yellow-200">* El correo no es válido</span>
        )}
      </label>
      <button
        class=" bg-blue-200 border-blue-600 px-4 py-2 text-blue-700 rounded-md"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
};

export default FormEmail;
