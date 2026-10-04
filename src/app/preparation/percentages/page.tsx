"use client";

import Link from "next/link";
import { useState } from "react";

const questions = [
  {
    question: "Сколько составляет 20% от 150?",
    options: ["20", "30", "35", "40"],
    answer: 1,
    explanation: "20% = 20/100 = 0,2. 150 × 0,2 = 30.",
  },
  {
    question: "25% от 80 — это:",
    options: ["15", "20", "25", "30"],
    answer: 1,
    explanation: "25% = 25/100 = 1/4. 80 : 4 = 20.",
  },
  {
    question: "Число 50 увеличили на 20%. Какое число получилось?",
    options: ["55", "60", "65", "70"],
    answer: 1,
    explanation: "20% от 50 = 10. Затем 50 + 10 = 60.",
  },
  {
    question: "Число 200 уменьшили на 15%. Какое число получилось?",
    options: ["160", "170", "175", "185"],
    answer: 1,
    explanation: "15% от 200 = 30. Затем 200 − 30 = 170.",
  },
  {
    question: "В классе 25 учеников. 40% из них занимаются спортом. Сколько это учеников?",
    options: ["8", "10", "12", "15"],
    answer: 1,
    explanation: "40% = 0,4. 25 × 0,4 = 10.",
  },
  {
    question: "Число 60 составляет 30% от какого числа?",
    options: ["120", "180", "200", "240"],
    answer: 2,
    explanation: "60 : 0,3 = 200.",
  },
];

export default function PercentagesPage() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const chooseAnswer = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;

    setAnswers((current) => {
      const updated = [...current];
      updated[questionIndex] = optionIndex;
      return updated;
    });
  };

  const checkAnswers = () => {
    setSubmitted(true);
  };

  const resetPractice = () => {
    setAnswers([]);
    setSubmitted(false);
  };

  const score = questions.reduce((total, question, index) => {
    return total + (answers[index] === question.answer ? 1 : 0);
  }, 0);

  return (
    <main className="min-h-screen bg-cream text-dark">
      {/* HEADER */}
      <section className="px-6 pb-12 pt-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/preparation"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition hover:-translate-y-0.5"
          >
            ← Все темы
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
              Подготовка · Математика
            </p>

            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight sm:text-6xl">
              Проценты
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-dark/65">
              Разберём, как находить процент от числа, само число по его
              проценту, а также как увеличивать и уменьшать числа на процент.
            </p>
          </div>
        </div>
      </section>

      {/* THEORY */}
      <section className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* CARD 1 */}
            <article className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-xl font-bold">
                01
              </div>

              <h2 className="mt-6 font-display text-2xl font-semibold">
                Что такое процент?
              </h2>

              <p className="mt-4 leading-7 text-dark/65">
                Процент — это одна сотая часть числа. Поэтому
                <strong className="text-dark"> 1% = 1/100</strong>.
              </p>

              <div className="mt-6 rounded-2xl bg-cream p-5">
                <p className="font-semibold">Полезно помнить:</p>

                <div className="mt-4 space-y-2 text-dark/70">
                  <p>1% = 0,01</p>
                  <p>10% = 0,1</p>
                  <p>25% = 0,25</p>
                  <p>50% = 0,5</p>
                  <p>100% = 1</p>
                </div>
              </div>
            </article>

            {/* CARD 2 */}
            <article className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-xl font-bold">
                02
              </div>

              <h2 className="mt-6 font-display text-2xl font-semibold">
                Как найти процент от числа?
              </h2>

              <p className="mt-4 leading-7 text-dark/65">
                Чтобы найти процент от числа, переведи процент в десятичную
                дробь и умножь число на неё.
              </p>

              <div className="mt-6 rounded-2xl bg-cream p-5">
                <p className="font-semibold">Формула</p>

                <p className="mt-3 text-xl font-semibold">
                  a% от b = b × a / 100
                </p>

                <p className="mt-4 text-sm text-dark/60">
                  Например: 20% от 150 = 150 × 20 / 100 = 30.
                </p>
              </div>
            </article>

            {/* CARD 3 */}
            <article className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-xl font-bold">
                03
              </div>

              <h2 className="mt-6 font-display text-2xl font-semibold">
                Как найти число по его проценту?
              </h2>

              <p className="mt-4 leading-7 text-dark/65">
                Если известно, сколько составляет определённый процент, можно
                найти исходное число.
              </p>

              <div className="mt-6 rounded-2xl bg-cream p-5">
                <p className="font-semibold">Пример</p>

                <p className="mt-3 leading-7">
                  30% числа = 45
                </p>

                <p className="mt-2 text-xl font-semibold">
                  45 : 0,3 = 150
                </p>

                <p className="mt-4 text-sm text-dark/60">
                  Значит, исходное число равно 150.
                </p>
              </div>
            </article>

            {/* CARD 4 */}
            <article className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-xl font-bold">
                04
              </div>

              <h2 className="mt-6 font-display text-2xl font-semibold">
                Увеличение и уменьшение на процент
              </h2>

              <p className="mt-4 leading-7 text-dark/65">
                Если число увеличивают на процент, мы прибавляем найденную
                часть. Если уменьшают — вычитаем её.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-cream p-5">
                  <p className="font-semibold">Увеличение</p>
                  <p className="mt-2 text-dark/70">
                    50 увеличили на 20%:
                  </p>
                  <p className="mt-2 font-semibold">
                    50 + 50 × 0,2 = 60
                  </p>
                </div>

                <div className="rounded-2xl bg-cream p-5">
                  <p className="font-semibold">Уменьшение</p>
                  <p className="mt-2 text-dark/70">
                    200 уменьшили на 15%:
                  </p>
                  <p className="mt-2 font-semibold">
                    200 − 200 × 0,15 = 170
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* QUICK RULE */}
      <section className="px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] bg-purple p-8 text-cream sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">
              Запомни
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Проценты становятся проще, если переводить их в дробь.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-2xl font-semibold">25%</p>
                <p className="mt-2 text-cream/70">= 0,25</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-2xl font-semibold">40%</p>
                <p className="mt-2 text-cream/70">= 0,4</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-2xl font-semibold">75%</p>
                <p className="mt-2 text-cream/70">= 0,75</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
              Практика
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Проверь, насколько хорошо ты понял тему
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-dark/60">
              Реши задания самостоятельно, а затем нажми «Проверить
              ответы».
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {questions.map((question, questionIndex) => {
              const selectedAnswer = answers[questionIndex];

              return (
                <article
                  key={question.question}
                  className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple text-sm font-semibold text-cream">
                      {questionIndex + 1}
                    </span>

                    <h3 className="text-lg font-semibold leading-7">
                      {question.question}
                    </h3>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {question.options.map((option, optionIndex) => {
                      const selected = selectedAnswer === optionIndex;
                      const correct =
                        submitted && optionIndex === question.answer;
                      const wrong =
                        submitted &&
                        selected &&
                        optionIndex !== question.answer;

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            chooseAnswer(questionIndex, optionIndex)
                          }
                          className={`rounded-2xl border-2 p-4 text-left transition ${
                            correct
                              ? "border-green-500 bg-green-50"
                              : wrong
                                ? "border-red-400 bg-red-50"
                                : selected
                                  ? "border-purple bg-purple/10 text-purple"
                                  : "border-gray-200 hover:border-purple/40"
                          }`}
                        >
                          <span className="font-semibold">
                            {String.fromCharCode(65 + optionIndex)}.
                          </span>{" "}
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  {submitted && (
                    <div
                      className={`mt-5 rounded-2xl p-4 ${
                        selectedAnswer === question.answer
                          ? "bg-green-50"
                          : "bg-red-50"
                      }`}
                    >
                      <p
                        className={`font-semibold ${
                          selectedAnswer === question.answer
                            ? "text-green-700"
                            : "text-red-700"
                        }`}
                      >
                        {selectedAnswer === question.answer
                          ? "✓ Правильно!"
                          : "✕ Пока не получилось"}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-dark/70">
                        {question.explanation}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* RESULT */}
          {submitted && (
            <div className="mt-8 rounded-[2rem] bg-white p-8 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
                Результат
              </p>

              <h3 className="mt-3 font-display text-4xl font-semibold">
                {score} из {questions.length}
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-dark/60">
                {score === questions.length
                  ? "Отличный результат! Ты уверенно справляешься с процентами."
                  : score >= 4
                    ? "Хороший результат! Повтори несколько формул и попробуй ещё раз."
                    : "Ничего страшного. Вернись к теории и попробуй решить задания ещё раз."}
              </p>

              <button
                type="button"
                onClick={resetPractice}
                className="mt-6 rounded-full bg-purple px-6 py-3 font-semibold text-cream transition hover:-translate-y-0.5"
              >
                Пройти ещё раз
              </button>
            </div>
          )}

          {!submitted && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={checkAnswers}
                disabled={answers.length !== questions.length}
                className={`rounded-full px-8 py-4 font-semibold transition ${
                  answers.length === questions.length
                    ? "bg-lime text-dark hover:-translate-y-0.5"
                    : "cursor-not-allowed bg-gray-200 text-gray-400"
                }`}
              >
                Проверить ответы
              </button>

              {answers.length !== questions.length && (
                <p className="mt-3 text-sm text-dark/50">
                  Ответь на все вопросы, чтобы проверить результат.
                </p>
              )}
            </div>
          )}

          {/* BACK */}
          <div className="mt-12 text-center">
            <Link
              href="/preparation"
              className="font-semibold text-purple transition hover:underline"
            >
              ← Вернуться ко всем темам
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}ыы