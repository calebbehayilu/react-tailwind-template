import { create } from "zustand";

interface CounterType {
    count: number;
    increase: () => void;
}

export const useCounter = create<CounterType>(set => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 }))
}))