import { create } from 'zustand'

export const useBearStore = create((set) => ({
    open: false,
    setOpen: (e) => set(() => ({ open: e })),

    openSoal: false,
    setOpenSoal: (e) => set(() => ({ openSoal: e })),

    currentQuestion: 0,
    setCurrentQuestion: (e) => set(() => ({ currentQuestion: e })),

    openTerimaKasih: false,
    setOpenTrimaKasih: (e) => set(() => ({ openTerimaKasih: e })),

    cek: false,
    setCek: (e) => set(() => ({ cek: e })),
}))