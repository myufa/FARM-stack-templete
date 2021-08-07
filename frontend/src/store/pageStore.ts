import create, { SetState, GetState } from 'zustand'


type pageOpt = '/' | '/counter/'
interface PageStore {
    page: pageOpt
    setPage: (newPage: pageOpt) => void
}

export const usePageStore = create<PageStore>(
    (set: SetState<PageStore>, get: GetState<PageStore>) => ({
    page: '/',
    setPage: (newPage) => {
        set({page: newPage})
    }
}))