import create from "zustand";
import { devtools, persist } from 'zustand/middleware'

const store = (set) => ({
    peoples : ['Aditya Negara', 'Aura Puteri Negeri', 'Ayesha Puteri Nagari'],
    addPeople : (person) => set((state) => ({peoples : [...state.peoples, person]}))
})

const settingStoreFunction = (set) =>({
    darkTheme : false,
    toggleDarkTheme : () => set((state) =>({darkTheme : !state.darkTheme})),
})



const useStore = create(devtools(store))
const settingStore = create(devtools(persist(settingStoreFunction, {name : 'user_settings'})))

export default useStore;
export {settingStore};