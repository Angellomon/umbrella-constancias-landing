import { FunctionComponent as FC } from "preact";

interface Props {}

const LandingLayout: FC<Props> = ({ children }) => (
  <div class="flex flex-row flex-wrap justify-center w-screen h-screen">
    {children}
  </div>
);

export default LandingLayout;
