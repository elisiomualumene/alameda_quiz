"use client"
import { useQuizStore } from "@/utils/global/points";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const score = useQuizStore((state) => state.score);
  return (
    <main>
      {children}
      <footer className="bg-lime-400 text-black font-bold text-center fixed bottom-0 w-full">
        Acertos: {score} de 5
      </footer>
    </main>
  );
}
