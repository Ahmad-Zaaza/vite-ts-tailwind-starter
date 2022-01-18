import { createContainer } from "react-tracked";
import { useState } from "react";
import { INITIAL_APP_STATE } from "@/lib/initialAppState";

const useMyState = () => useState(INITIAL_APP_STATE);
export const { Provider: StoreProvider, useTracked: useStore } =
  createContainer(useMyState);
