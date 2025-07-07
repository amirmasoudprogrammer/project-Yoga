// stores/useStepStore.js
import { create } from 'zustand';

const useStepStore = create((set, get) => ({
    step: 1,
    setStep: (newStep) => {
        if (newStep <= 3) {
            set({ step: newStep });
        }
    },
}));

export default useStepStore;
;