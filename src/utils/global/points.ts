import { create } from "zustand";

type QuizStore = {
  score: number;
  incrementScore: () => void;
  resetQuiz: () => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  score: 0,
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
  resetQuiz: () => set({ score: 0 }),
}));
