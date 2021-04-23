import { LandingLayout } from "./layouts";
import { AvisoConstancias, FormEmail, HeaderPrincipal } from "./components";

export function App() {
  const handleFinished = async (email: string) => {
    console.log(email);
  };
  return (
    <LandingLayout>
      <div class="flex flex-col px-10 sm:px-40 xl:px-72">
        <HeaderPrincipal />
        <FormEmail onFinish={handleFinished} />
        <AvisoConstancias />
      </div>
    </LandingLayout>
  );
}
