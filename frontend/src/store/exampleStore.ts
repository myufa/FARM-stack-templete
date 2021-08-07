import create, { SetState, GetState } from 'zustand'

interface CountStore {
    count: number,
    inc: () => void,
    reset: () => void
}
export const useCountStore = create<CountStore>(
    (set: SetState<CountStore>, get: GetState<CountStore>) => ({
    count: 0,
    inc: () => {
        const { count } = get()
        set({count: count + 1})
    },
    reset: () => set({count: 0})
}))
