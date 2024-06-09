"use client"
import React, { useState, useEffect } from "react";
import { Card } from "@/components/card";
import { useQuizStore } from "@/utils/global/points";
import questions from "@/utils/constants/questions";

type SelectedQuestion = {
  question: string;
  options: string[];
  answer: string;
};

export default function Home() {
  const [selectedQuestions, setSelectedQuestions] = useState<
    SelectedQuestion[]
  >([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const incrementScore = useQuizStore((state) => state.incrementScore);
  const resetQuiz = useQuizStore((state) => state.resetQuiz);
  const score = useQuizStore((state) => state.score);

  // Função para selecionar aleatoriamente 5 questões
  const selectRandomQuestions = () => {
    const randomIndices: number[] = [];
    while (randomIndices.length < 5) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    const selectedQuestions: SelectedQuestion[] = randomIndices.map(
      (index) => questions[index]
    );
    setSelectedQuestions(selectedQuestions);
  };

  useEffect(() => {
    selectRandomQuestions();
  }, []); // Executa somente na montagem inicial

  const handleAnswer = (selectedOption: string) => {
    setSelectedOption(selectedOption);
    setShowFeedback(true);
    const currentQuestion = selectedQuestions[currentQuestionIndex];

    setTimeout(() => {
      if (selectedOption === currentQuestion.answer) {
        incrementScore();
      }
      setShowFeedback(false);
      setSelectedOption(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 1000); // Aguarde 1 segundo antes de passar para a próxima pergunta
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    resetQuiz();
    selectRandomQuestions();
  };

  return (
    <main className="px-[15rem] pt-[5rem]">
      <h1 className="text-slate-400 text-2xl font-bold">Alameda Quiz Game</h1>
      <p className="text-3xl font-bold pt-6 mb-4">
        Teste os seus Conhecimentos
      </p>
      <hr className="border-slate-700 border-2 mb-4" />
      {currentQuestionIndex < selectedQuestions.length ? (
        <Card
          question={selectedQuestions[currentQuestionIndex].question}
          options={selectedQuestions[currentQuestionIndex].options}
          answer={selectedQuestions[currentQuestionIndex].answer}
          onAnswer={handleAnswer}
          showFeedback={showFeedback}
          selectedOption={selectedOption}
          index={currentQuestionIndex}
        />
      ) : (
        <div>
          <p className="text-2xl">Quiz Concluído!</p>
          <p className="text-xl">
            Você acertou {score} de {selectedQuestions.length} perguntas.
          </p>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleReset}
          >
            Reiniciar Jogo
          </button>
        </div>
      )}
    </main>
  );
}
