import { FunctionComponent as FC } from "preact";

interface Props {}

const LandingLayout: FC<Props> = ({ children }) => (
  <div class="flex flex-col mt-9 sm:mt-16 xl:px-50 justify-center items-center w-full h-full  max-w-full">
    {children}
  </div>
);

export default LandingLayout;
