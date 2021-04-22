import { useContext } from "preact/hooks";
import { ChangingProgressContext } from "../context";

export const useChangingProgress = () => useContext(ChangingProgressContext);
