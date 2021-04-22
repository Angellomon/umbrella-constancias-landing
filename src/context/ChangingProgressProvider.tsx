import { useState, useEffect } from "preact/hooks";
import { createContext, FunctionComponent as FC } from "preact";

type ChangingProgressContextType = {
  valuesIndex: number;
};

export const ChangingProgressContext = createContext<ChangingProgressContextType>(
  { valuesIndex: 0 }
);

interface Props {
  interval?: number;
  values: number[];
}

const ChangingProgressProvider: FC<Props> = ({
  children,
  interval = 1000,
  values,
}) => {
  const [valuesIndex, setValuesIndex] = useState(0);

  useEffect(() => {
    let i = setInterval(() => {
      setValuesIndex((valuesIndex + 1) % values.length);
    }, interval);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <ChangingProgressContext.Provider value={{ valuesIndex }}>
      {children}
    </ChangingProgressContext.Provider>
  );
};

export default ChangingProgressProvider;
