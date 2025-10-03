import { create } from "zustand";
interface TypeStatus {
  status: boolean;
  changeStatus: (inp: boolean) => void;
}
export const useStatus = create<TypeStatus>((set) => ({
  status: false,
  changeStatus: (inp: boolean) => set({ status: inp })
}))
