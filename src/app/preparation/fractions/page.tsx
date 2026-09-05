"use client";

import { useState } from "react";

const questions = [
  {
    question:
      "В книге 120 страниц. Дания прочитала в первый день 2/3 всех страниц, а во второй — 1/4 оставшихся страниц. Сколько страниц ей осталось прочитать?",
    options: ["20 страниц", "30 страниц", "40 страниц", "50 страниц"],
    answer: 1,
    explanation:
      "2/3 от 120 = 80 страниц. Осталось 40 страниц. 1/4 от 40 = 10 страниц. Значит, осталось 40 − 10 = 30 страниц.",
  },
  {
    question: "2/5 км = ? м",
    options: ["200 м", "400 м", "500 м", "600 м"],
    answer: 1,
    explanation:
      "1 км = 1000 м. Поэтому 2/5 × 1000 = 400 м.",
  },
  {
    question: "7/10 дм = ? см",
    options: ["0,7 см", "7 см", "70 см", "700 см"],
    answer: 1,
    explanation:
      "1 дм = 10 см. Поэтому 7/10 × 10 = 7 см.",
  },
  {
    question: "3/5 т = ? кг",
    options: ["300 кг", "500 кг", "600 кг", "800 кг"],
    answer: 2,
    explanation:
      "1 тонна = 1000 кг. Поэтому 3/5 × 1000 = 600 кг.",
  },
  {
    question:
      "Автотуристы за три дня проехали 360 км. В первый день они проехали 3/5 всего пути, а во второй — 2/10 всего пути. Сколько километров они проехали в третий день?",
    options: ["36 км", "72 км", "108 км", "144 км"],
    answer: 1,
    explanation:
      "В первый день: 360 × 3/5 = 216 км. Во второй: 360 × 2/10 = 72 км. За два дня: 288 км. В третий день: 360 − 288 = 72 км.",
  },
  {
    question: "Какая дробь равна 1/2?",
    options: ["2/3", "2/4", "3/5", "4/6"],
    answer: 1,
    explanation:
      "Если умножить числитель и знаменатель 1/2 на 2, получим 2/4. Значит, 1/2 = 2/4.",
  },
  {
    question: "Вычисли: 3/4 + 1/8.",
    options: ["4/8", "5/8", "7/8", "1"],
    answer: 2,
    explanation:
      "Приводим 3/4 к знаменателю 8: 3/4 = 6/8. Затем 6/8 + 1/8 = 7/8.",
  },
  {
    question: "Вычисли: 5/6 − 1/3.",
    options: ["1/2", "2/3", "1/3", "5/3"],
    answer: 0,
    explanation:
      "1/3 = 2/6. Поэтому 5/6 − 2/6 = 3/6 = 1/2.",
  },
  {
    question: "Вычисли: 2/3 × 3/4.",
    options: ["1/2", "2/7", "3/4", "5/6"],
    answer: 0,
    explanation:
      "Перемножаем числители и знаменатели: 2 × 3 / 3 × 4 = 6/12 = 1/2.",
  },
  {
    question: "Вычисли: 2/3 : 4/5.",
    options: ["5/6", "6/5", "8/15", "2/5"],
    answer: 0,
    explanation:
      "При делении дробей вторую дробь переворачиваем: 2/3 : 4/5 = 2/3 × 5/4 = 10/12 = 5/6.",
  },
];

export default function FractionsPage() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const chooseAnswer = (questionIndex: number, answerIndex: number) => {
    if (submitted) return;

    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const submitTest = () => {
    if (answers.length !== questions.length) return;

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
            Дроби
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-dark/65">
            Разберём дроби от самых основ до операций с ними, а затем
            проверим знания на практике.
          </p>
        </header>

        {/* INTRO */}
        <section className="mt-10 rounded-[2rem] bg-dark p-6 text-cream sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
            Самое главное
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold">
            Что показывает дробь?
          </h2>

          <p className="mt-5 text-lg leading-8 text-cream/75">
            Дробь показывает, сколько частей мы взяли от целого.
          </p>

          <div className="mt-6 rounded-2xl bg-white/10 p-5">
            <p className="text-center font-display text-5xl font-semibold">
              3/5
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-lime">3 — числитель</p>
                <p className="mt-1 text-sm leading-6 text-cream/65">
                  Показывает, сколько частей мы взяли.
                </p>
              </div>

              <div>
                <p className="font-semibold text-lime">5 — знаменатель</p>
                <p className="mt-1 text-sm leading-6 text-cream/65">
                  Показывает, на сколько одинаковых частей разделили целое.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-cream/75">
            То есть <strong className="text-cream">3/5</strong> — это три
            части из пяти.
          </p>
        </section>

        {/* THEORY */}
        <section className="mt-8 space-y-5">
          <TheoryCard
            number="1"
            title="Правильные и неправильные дроби"
          >
            <p>
              <strong>Правильная дробь</strong> — числитель меньше
              знаменателя.
            </p>

            <div className="mt-4 rounded-2xl bg-cream p-4">
              <p className="font-semibold text-purple">2/7, 3/8, 5/9</p>
              <p className="mt-2 text-sm text-dark/60">
                Такие дроби меньше 1.
              </p>
            </div>

            <p className="mt-5">
              <strong>Неправильная дробь</strong> — числитель больше или
              равен знаменателю.
            </p>

            <div className="mt-4 rounded-2xl bg-cream p-4">
              <p className="font-semibold text-purple">7/5, 9/4, 6/6</p>
              <p className="mt-2 text-sm text-dark/60">
                Такие дроби больше или равны 1.
              </p>
            </div>
          </TheoryCard>

          <TheoryCard number="2" title="Смешанные числа">
            <p>
              Смешанное число состоит из <strong>целой части и дроби</strong>.
            </p>

            <Example>2 3/5 = 2 целых и ещё 3/5</Example>

            <p className="mt-5">
              Чтобы превратить смешанное число в неправильную дробь:
            </p>

            <Example>2 3/5 → (2 × 5 + 3) / 5 = 13/5</Example>

            <p className="mt-5">
              Чтобы неправильную дробь превратить в смешанное число, нужно
              разделить числитель на знаменатель:
            </p>

            <Example>13/5 = 2 3/5</Example>
          </TheoryCard>

          <TheoryCard number="3" title="Равные дроби">
            <p>
              Иногда две дроби выглядят по-разному, но имеют одно и то же
              значение.
            </p>

            <Example>1/2 = 2/4 = 3/6</Example>

            <p className="mt-5">
              Чтобы получить равную дробь, можно{" "}
              <strong>
                умножить числитель и знаменатель на одно и то же число
              </strong>
              .
            </p>

            <Example>2/3 × 2 = 4/6</Example>

            <p className="mt-4 text-sm text-dark/60">
              Главное — умножать и верхнее, и нижнее число.
            </p>
          </TheoryCard>

          <TheoryCard number="4" title="Сокращение дробей">
            <p>
              Сократить дробь — значит разделить числитель и знаменатель на
              одно и то же число.
            </p>

            <Example>
              8/12 → 8 : 4 = 2 и 12 : 4 = 3 → 2/3
            </Example>

            <p className="mt-5">
              Лучше сокращать дробь до тех пор, пока дальше сократить её
              уже нельзя.
            </p>
          </TheoryCard>

          <TheoryCard number="5" title="Сравнение дробей">
            <p>
              Если знаменатели одинаковые, сравниваем{" "}
              <strong>числители</strong>.
            </p>

            <Example>3/7 &lt; 5/7</Example>

            <p className="mt-5">
              Если числители одинаковые, больше будет та дробь, у которой{" "}
              <strong>меньше знаменатель</strong>.
            </p>

            <Example>3/4 &gt; 3/8</Example>

            <p className="mt-4 text-sm text-dark/60">
              При делении целого на 4 части каждая часть больше, чем при
              делении на 8 частей.
            </p>
          </TheoryCard>

          <TheoryCard number="6" title="Сложение и вычитание дробей">
            <p>
              Если знаменатели одинаковые, складываем или вычитаем{" "}
              <strong>только числители</strong>.
            </p>

            <Example>2/7 + 3/7 = 5/7</Example>

            <p className="mt-5">
              Если знаменатели разные, сначала приводим дроби к{" "}
              <strong>общему знаменателю</strong>.
            </p>

            <Example>
              1/2 + 1/3 = 3/6 + 2/6 = 5/6
            </Example>
          </TheoryCard>

          <TheoryCard number="7" title="Умножение дробей">
            <p>
              При умножении дробей всё довольно просто:
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-cream p-4">
                <p className="font-semibold text-purple">
                  Числитель × числитель
                </p>
              </div>

              <div className="rounded-2xl bg-cream p-4">
                <p className="font-semibold text-purple">
                  Знаменатель × знаменатель
                </p>
              </div>
            </div>

            <Example>2/3 × 4/5 = 8/15</Example>

            <p className="mt-4 text-sm text-dark/60">
              Иногда перед умножением можно сократить числа, чтобы пример
              получился проще.
            </p>
          </TheoryCard>

          <TheoryCard number="8" title="Деление дробей">
            <p>
              Чтобы разделить одну дробь на другую,{" "}
              <strong>вторую дробь переворачиваем и умножаем</strong>.
            </p>

            <Example>
              2/3 : 4/5 → 2/3 × 5/4 = 10/12 = 5/6
            </Example>

            <div className="mt-5 rounded-2xl bg-purple p-5 text-center text-cream">
              <p className="text-sm uppercase tracking-widest text-lime">
                Запомни
              </p>
              <p className="mt-2 text-xl font-semibold">
                Деление дробей → переверни вторую → умножь
              </p>
            </div>
          </TheoryCard>

          <TheoryCard number="9" title="Дробь от числа">
            <p>
              Чтобы найти дробь от числа, нужно{" "}
              <strong>умножить число на эту дробь</strong>.
            </p>

            <Example>
              3/5 от 20 = 20 × 3/5 = 4 × 3 = 12
            </Example>

            <p className="mt-4 text-sm text-dark/60">
              Значит, 3/5 от 20 = 12.
            </p>
          </TheoryCard>

          <TheoryCard number="10" title="Перевод дробей в десятичные">
            <p>
              Чтобы превратить дробь в десятичную, нужно{" "}
              <strong>разделить числитель на знаменатель</strong>.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Example>1/2 = 0,5</Example>
              <Example>3/4 = 0,75</Example>
              <Example>1/5 = 0,2</Example>
            </div>

            <p className="mt-5">
              Но не все дроби превращаются в конечную десятичную дробь.
            </p>

            <Example>1/3 = 0,333...</Example>

            <p className="mt-4 text-sm text-dark/60">
              Здесь цифра 3 будет повторяться бесконечно.
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
              Реши все задания самостоятельно, а затем нажми «Проверить
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