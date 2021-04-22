import { FunctionComponent as FC } from "preact";

interface Props {}

const LandingLayout: FC<Props> = ({ children }) => (
  <div class="flex flex-row flex-wrap justify-center m-h-full m-w-full h-full w-full">
    {children}
  </div>
);

export default LandingLayout;
