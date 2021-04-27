import { FunctionComponent as FC } from "preact";

interface Props {}

const LandingLayout: FC<Props> = ({ children }) => (
  <div class="flex flex-col mt-48 xl:px-72 justify-center items-center w-screen h-screen">
    {children}
  </div>
);

export default LandingLayout;
