import { LandingLayout } from "./layouts";
import { AvisoConstancias, HeaderPrincipal } from "./components";

export function App() {
  return (
    <LandingLayout>
      <div class="flex flex-col mx-40">
        <HeaderPrincipal />
        <AvisoConstancias />
      </div>
    </LandingLayout>
  );
}
