import { create } from "zustand";
import { createAuthSlice } from "./auth";

export const useZustandStores = create((...a) => ({
    ... createAuthSlice(...a)
}));