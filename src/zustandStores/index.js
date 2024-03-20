// import { create } from "zustand";
// import { createAuthSlice } from "./auth";
// import { createProductSlice } from "./product";
// import { createJSONStorage } from "zustand/middleware";

// export const useZustandStores = create((...a) => ({
//     ... createAuthSlice(...a),
//     ... createProductSlice(...a)
        
// }),
// {
//     name:"pos-app",
//     storage:createJSONStorage(()=> localStorage)
// }
// );

import { create } from "zustand";
import { createAuthSlice } from "./auth";
import { persist, createJSONStorage, combine } from 'zustand/middleware';
import { createProductSlice } from "./product";

export const useZustandStores = create(
        persist(
            (...a) => ({
                ...createAuthSlice(...a),
                ...createProductSlice(...a),
            }),
            {
                name: 'pos-app',
                storage: createJSONStorage(() => localStorage)
            }
        )
);