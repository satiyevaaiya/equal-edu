"use client";

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
    question:
      "В классе 30 учеников. 40% из них занимаются спортом. Сколько это учеников?",
    options: ["10", "12", "14", "16"],
    answer: 1,
    explanation: "30 × 40/100 = 12 учеников.",
  },
  {
    question: "Цена товара была 4000 тг. После скидки 25% сколько он стоит?",
    options: ["2500 тг", "3000 тг", "3200 тг", "3500 тг"],
    answer: 1,
    explanation: "25% от 4000 = 1000. 4000 − 1000 = 3000 тг.",
  },
  {
    question: "12 — это сколько процентов от 60?",
    options: ["10%", "15%", "20%", "25%"],
    answer: 2,
    explanation: "12 : 60 × 100% = 20%.",
  },
  {
    question: "Если 30% числа равны 45, чему равно всё число?",
    options: ["120", "135", "150", "180"],
    answer: 2,
    explanation: "45 : 0,3 = 150.",
  },
  {
    question:
      "В магазине было 500 товаров. Продали 60%. Сколько товаров осталось?",
    options: ["150", "200", "250", "300"],
    answer: 1,
    explanation:
      "Продали 500 × 0,6 = 300 товаров. Осталось 500 − 300 = 200.",
  },
  {
    question:
      "Зарплата 100 000 тг увеличилась на 10%. Какой стала зарплата?",
    options: ["105 000 тг", "110 000 тг", "115 000 тг", "120 000 тг"],
    answer: 1,
    explanation:
      "10% от 100 000 = 10 000. Новая зарплата = 100 000 + 10 000 = 110 000 тг.",
  },
];

export default function PercentagesPage() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const chooseAnswer = (questionIndex: number, answerIndex: number) => {
    if (submitted) return;

    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const submitTest = () => {
    if (!allAnswered) return;

    setSubmitted(true);

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  const restartTest = () => {
    setAnswers([]);
    setSubmitted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const score = questions.reduce((total, question, index) => {
    return total + (answers[index] === question.answer ? 1 : 0);
  }, 0);

  const allAnswered = answers.length === questions.length;

  return (
    <main className="min-h-screen bg-cream px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
            Equal Ed · Математика
          </p>

          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-dark sm:text-6xl">
            Проценты
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-dark/65">
            Научимся находить процент от числа, определять процент одного
            числа от другого и решать задачи со скидками и изменениями.
          </p>
        </header>

        {/* INTRO */}
        <section className="mt-10 rounded-[2rem] bg-dark p-6 text-cream sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
            Самое главное
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold">
            Что такое процент?
          </h2>

          <p className="mt-5 text-lg leading-8 text-cream/75">
            Процент — это одна сотая часть целого.
          </p>

          <div className="mt-6 rounded-2xl bg-white/10 p-5 text-center">
            <p className="font-display text-5xl font-semibold">
              1% = 1/100
            </p>

            <p className="mt-4 text-cream/70">
              Поэтому 25% = 25/100 = 1/4.
            </p>
          </div>

          <p className="mt-5 text-center text-cream/75">
            Знак процента —{" "}
            <strong className="text-cream">%</strong>.
          </p>
        </section>

        {/* THEORY */}
        <section className="mt-8 space-y-5">

          <TheoryCard number="1" title="Как найти процент от числа">
            <p>
              Чтобы найти процент от числа, нужно умножить число на
              процент, записанный в виде дроби.
            </p>

            <Example>
              20% от 150 = 150 × 20/100 = 30
            </Example>

            <p className="mt-5 text-sm text-dark/60">
              Можно сначала перевести процент в десятичную дробь:
              20% = 0,2.
            </p>
          </TheoryCard>

          <TheoryCard number="2" title="Перевод процентов в число">
            <p>
              Чтобы перевести процент в десятичную дробь, нужно разделить
              его на 100.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Example>10% = 0,1</Example>
              <Example>25% = 0,25</Example>
              <Example>75% = 0,75</Example>
            </div>
          </TheoryCard>

          <TheoryCard
            number="3"
            title="Как узнать, сколько процентов одно число составляет от другого"
          >
            <p>
              Нужно разделить первое число на второе и умножить результат
              на 100%.
            </p>

            <Example>
              20 из 80 → 20/80 × 100% = 25%
            </Example>

            <p className="mt-5 text-sm text-dark/60">
              Значит, 20 составляет 25% от 80.
            </p>
          </TheoryCard>

          <TheoryCard number="4" title="Увеличение числа на процент">
            <p>
              Чтобы увеличить число на определённый процент, сначала
              находим этот процент от числа, а затем прибавляем его.
            </p>

            <Example>
              200 увеличили на 10% → 20
            </Example>

            <p className="mt-5">
              Теперь прибавляем найденное значение:
            </p>

            <Example>
              200 + 20 = 220
            </Example>

            <p className="mt-4 text-sm text-dark/60">
              Значит, после увеличения на 10% получаем 220.
            </p>
          </TheoryCard>

          <TheoryCard number="5" title="Уменьшение числа на процент">
            <p>
              Чтобы уменьшить число на определённый процент, сначала
              находим этот процент от числа, а затем вычитаем его.
            </p>

            <Example>
              500 уменьшили на 20% → 100
            </Example>

            <p className="mt-5">
              Вычитаем найденное значение из исходного числа:
            </p>

            <Example>
              500 − 100 = 400
            </Example>

            <p className="mt-4 text-sm text-dark/60">
              Значит, после уменьшения на 20% получаем 400.
            </p>
          </TheoryCard>

          <TheoryCard number="6" title="Скидки">
            <p>
              Скидка — это уменьшение первоначальной цены на определённый
              процент.
            </p>

            <Example>
              4000 тг − 25% = 3000 тг
            </Example>

            <p className="mt-5 text-sm text-dark/60">
              Сначала найдём размер скидки:
              4000 × 25/100 = 1000 тг.
            </p>

            <p className="mt-2 text-sm text-dark/60">
              Затем: 4000 − 1000 = 3000 тг.
            </p>
          </TheoryCard>

          <TheoryCard number="7" title="Проценты в реальной жизни">
            <p>
              Проценты встречаются в скидках, результатах тестов,
              статистике, банковских расчётах и других ситуациях.
            </p>

            <Example>
              80% от 20 вопросов = 16 правильных ответов
            </Example>

            <p className="mt-4 text-sm text-dark/60">
              20 × 80/100 = 16.
            </p>
          </TheoryCard>

          <TheoryCard number="8" title="Как найти целое по его проценту">
            <p>
              Если известно, чему равен определённый процент числа, можно
              найти всё число.
            </p>

            <Example>
              30% числа = 45 → 45 : 0,3 = 150
            </Example>

            <p className="mt-4 text-sm text-dark/60">
              Значит, исходное число равно 150.
            </p>
          </TheoryCard>

        </section>

        {/* PRACTICE */}
        <section className="mt-14">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
              Практика
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-dark sm:text-4xl">
              Проверь, насколько хорошо ты понял тему
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-dark/60">
              Реши все задания самостоятельно, а затем нажми
              «Проверить ответы».
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

                    <h3 className="text-lg font-semibold leading-7 text-dark">
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
                          : "✕ Пока неправильно"}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-dark/65">
                        {question.explanation}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* RESULT */}
          <div className="mt-8">
            {!submitted ? (
              <div className="rounded-[2rem] bg-dark p-6 text-center text-cream sm:p-8">
                <p className="text-sm text-cream/60">
                  Отвечено: {answers.length} из {questions.length}
                </p>

                <button
                  type="button"
                  onClick={submitTest}
                  disabled={!allAnswered}
                  className="mt-5 rounded-full bg-lime px-8 py-4 font-semibold text-dark transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Проверить ответы
                </button>

                {!allAnswered && (
                  <p className="mt-3 text-sm text-cream/50">
                    Ответь на все вопросы, чтобы проверить результат.
                  </p>
                )}
              </div>
            ) : (
              <div className="rounded-[2rem] bg-purple p-8 text-center text-cream sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">
                  Результат
                </p>

                <p className="mt-3 font-display text-6xl font-semibold">
                  {score}/{questions.length}
                </p>

                <p className="mt-3 text-cream/75">
                  {score === questions.length
                    ? "Отлично! Ты уверенно владеешь этой темой."
                    : score >= 7
                    ? "Очень хороший результат! Осталось закрепить несколько моментов."
                    : score >= 5
                    ? "Хороший старт! Повтори ошибки и попробуй ещё раз."
                    : "Не переживай — именно для этого мы и учимся. Повтори теорию и попробуй снова."}
                </p>

                <button
                  type="button"
                  onClick={restartTest}
                  className="mt-6 rounded-full bg-lime px-7 py-3 font-semibold text-dark transition hover:scale-[1.03]"
                >
                  Попробовать ещё раз
                </button>
              </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <div className="mt-12 pb-6 text-center">
          <a
            href="/preparation"
            className="text-sm font-semibold text-purple hover:underline"
          >
            ← Вернуться к подготовке
          </a>
        </div>
      </div>
    </main>
  );
}

function TheoryCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime text-sm font-bold text-dark">
          {number}
        </span>

        <h2 className="font-display text-2xl font-semibold text-dark">
          {title}
        </h2>
      </div>

      <div className="mt-6 text-base leading-8 text-dark/70">
        {children}
      </div>
    </article>
  );
}

function Example({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-2xl bg-cream px-5 py-4 font-semibold text-purple">
      {children}
    </div>
  );
}