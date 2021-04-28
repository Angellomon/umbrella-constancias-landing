import { FunctionComponent as FC } from "preact";

interface Props {}

const LandingLayout: FC<Props> = ({ children }) => (
  <div class="flex flex-col mt-52 xl:px-60 justify-center items-center w-screen h-screen max-w-full">
    {children}
  </div>
);

export default LandingLayout;
