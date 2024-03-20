'use client';
export const createAuthSlice = (set) => ({
    users: null,
    createUsers: (payload) => {
        set(({ users: payload }))
    },
    removeUsers: () => {
        set(({users: null}))
    }
})