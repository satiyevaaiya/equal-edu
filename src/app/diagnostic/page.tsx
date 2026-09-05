"use client";

import { useEffect, useMemo, useState } from "react";

type Question = {
  question: string;
  options: string[];
  answer: number;
  topic: string;
};

const questions: Question[] = [
  // ПРОЦЕНТЫ
  {
    question: "Сколько будет 20% от 150?",
    options: ["20", "30", "35", "40"],
    answer: 1,
    topic: "Проценты",
  },
  {
    question: "Цена товара 5000 тг. Скидка 10%. Какая новая цена?",
    options: ["4500 тг", "4800 тг", "4900 тг", "4000 тг"],
    answer: 0,
    topic: "Проценты",
  },
  {
    question: "Число 80 увеличили на 25%. Какое число получилось?",
    options: ["90", "95", "100", "105"],
    answer: 2,
    topic: "Проценты",
  },
  {
    question: "30 — это сколько процентов от 120?",
    options: ["20%", "25%", "30%", "35%"],
    answer: 1,
    topic: "Проценты",
  },
  {
    question: "После скидки 20% товар стоит 4000 тг. Сколько он стоил до скидки?",
    options: ["4500 тг", "4800 тг", "5000 тг", "5200 тг"],
    answer: 2,
    topic: "Проценты",
  },

  // ПЛОЩАДЬ И ПЕРИМЕТР
  {
    question: "Чему равна площадь прямоугольника со сторонами 6 см и 4 см?",
    options: ["10 см²", "20 см²", "24 см²", "28 см²"],
    answer: 2,
    topic: "Площадь и периметр",
  },
  {
    question: "Чему равен периметр квадрата со стороной 7 см?",
    options: ["14 см", "21 см", "28 см", "49 см"],
    answer: 2,
    topic: "Площадь и периметр",
  },
  {
    question: "Площадь квадрата равна 36 см². Чему равна его сторона?",
    options: ["4 см", "5 см", "6 см", "9 см"],
    answer: 2,
    topic: "Площадь и периметр",
  },
  {
    question: "Прямоугольник имеет длину 10 см и ширину 3 см. Его периметр?",
    options: ["13 см", "26 см", "30 см", "60 см"],
    answer: 1,
    topic: "Площадь и периметр",
  },
  {
    question: "Площадь прямоугольника равна 48 см², а ширина — 6 см. Найди длину.",
    options: ["6 см", "7 см", "8 см", "9 см"],
    answer: 2,
    topic: "Площадь и периметр",
  },

  // ДВИЖЕНИЕ
  {
    question: "Автомобиль ехал со скоростью 60 км/ч 2 часа. Какое расстояние он проехал?",
    options: ["30 км", "60 км", "120 км", "180 км"],
    answer: 2,
    topic: "Движение",
  },
  {
    question: "Пешеход прошёл 15 км за 3 часа. Какова его скорость?",
    options: ["3 км/ч", "5 км/ч", "8 км/ч", "10 км/ч"],
    answer: 1,
    topic: "Движение",
  },
  {
    question: "Расстояние между городами 240 км. Машина едет со скоростью 80 км/ч. Сколько часов займёт поездка?",
    options: ["2 часа", "3 часа", "4 часа", "5 часов"],
    answer: 1,
    topic: "Движение",
  },
  {
    question: "Велосипедист ехал со скоростью 12 км/ч 4 часа. Какое расстояние он проехал?",
    options: ["36 км", "40 км", "48 км", "52 км"],
    answer: 2,
    topic: "Движение",
  },
  {
    question: "Поезд прошёл 300 км за 5 часов. Найди его скорость.",
    options: ["50 км/ч", "60 км/ч", "70 км/ч", "75 км/ч"],
    answer: 1,
    topic: "Движение",
  },

  // ДРОБИ
  {
    question: "Чему равно 1/2 + 1/4?",
    options: ["1/6", "2/4", "3/4", "1"],
    answer: 2,
    topic: "Дроби",
  },
  {
    question: "Чему равно 3/4 − 1/4?",
    options: ["1/4", "1/2", "2/3", "3/8"],
    answer: 1,
    topic: "Дроби",
  },
  {
    question: "Чему равно 2/3 × 3/4?",
    options: ["1/2", "2/7", "3/4", "1"],
    answer: 0,
    topic: "Дроби",
  },
  {
    question: "Какая дробь больше?",
    options: ["1/3", "1/2", "1/4", "1/5"],
    answer: 1,
    topic: "Дроби",
  },
  {
    question: "Чему равно 5/6 − 1/3?",
    options: ["1/2", "2/3", "3/6", "4/6"],
    answer: 0,
    topic: "Дроби",
  },

  // ПРОПОРЦИИ
  {
    question: "Реши пропорцию: 2/5 = x/10",
    options: ["2", "4", "5", "8"],
    answer: 1,
    topic: "Пропорции",
  },
  {
    question: "Если 3 тетради стоят 600 тг, сколько стоят 5 тетрадей?",
    options: ["800 тг", "900 тг", "1000 тг", "1200 тг"],
    answer: 2,
    topic: "Пропорции",
  },
  {
    question: "Реши: 4 : 8 = x : 16",
    options: ["4", "6", "8", "10"],
    answer: 2,
    topic: "Пропорции",
  },
  {
    question: "Если 5 кг яблок стоят 1500 тг, сколько стоит 1 кг?",
    options: ["200 тг", "250 тг", "300 тг", "350 тг"],
    answer: 2,
    topic: "Пропорции",
  },
  {
    question: "Реши: x/12 = 3/4",
    options: ["6", "8", "9", "10"],
    answer: 2,
    topic: "Пропорции",
  },

  // ПРИЗНАКИ ДЕЛЕНИЯ
  {
    question: "Какое число делится на 2?",
    options: ["135", "247", "368", "451"],
    answer: 2,
    topic: "Признаки деления",
  },
  {
    question: "Какое число делится на 5?",
    options: ["123", "240", "317", "428"],
    answer: 1,
    topic: "Признаки деления",
  },
  {
    question: "Какое число делится на 3?",
    options: ["124", "215", "327", "401"],
    answer: 2,
    topic: "Признаки деления",
  },
  {
    question: "Какое число делится на 9?",
    options: ["234", "315", "428", "512"],
    answer: 1,
    topic: "Признаки деления",
  },
  {
    question: "Какое число делится и на 2, и на 5?",
    options: ["125", "230", "317", "421"],
    answer: 1,
    topic: "Признаки деления",
  },

  // ТЕКСТОВЫЕ ЗАДАЧИ
  {
    question: "У Маши было 20 яблок. Она отдала 7. Сколько осталось?",
    options: ["11", "12", "13", "14"],
    answer: 2,
    topic: "Текстовые задачи",
  },
  {
    question: "В классе 30 учеников. 18 из них девочки. Сколько мальчиков?",
    options: ["10", "12", "14", "16"],
    answer: 1,
    topic: "Текстовые задачи",
  },
  {
    question: "У Пети было 5000 тг. Он потратил 1800 тг. Сколько осталось?",
    options: ["2800 тг", "3000 тг", "3200 тг", "3500 тг"],
    answer: 2,
    topic: "Текстовые задачи",
  },
  {
    question: "В коробке 6 рядов по 8 карандашей. Сколько всего карандашей?",
    options: ["14", "42", "48", "56"],
    answer: 2,
    topic: "Текстовые задачи",
  },
  {
    question: "В библиотеке было 120 книг. 35 книг взяли ученики. Сколько осталось?",
    options: ["75", "85", "95", "105"],
    answer: 1,
    topic: "Текстовые задачи",
  },

  // УРАВНЕНИЯ
  {
    question: "Реши уравнение: x + 7 = 15",
    options: ["6", "7", "8", "9"],
    answer: 2,
    topic: "Уравнения",
  },
  {
    question: "Реши уравнение: x − 9 = 4",
    options: ["5", "11", "13", "15"],
    answer: 2,
    topic: "Уравнения",
  },
  {
    question: "Реши уравнение: 3x = 21",
    options: ["6", "7", "8", "9"],
    answer: 1,
    topic: "Уравнения",
  },
  {
    question: "Реши уравнение: 2x + 4 = 14",
    options: ["4", "5", "6", "7"],
    answer: 1,
    topic: "Уравнения",
  },
  {
    question: "Реши уравнение: 5x − 10 = 20",
    options: ["4", "5", "6", "7"],
    answer: 2,
    topic: "Уравнения",
  },
];

const topics = [
  "Проценты",
  "Площадь и периметр",
  "Движение",
  "Дроби",
  "Пропорции",
  "Признаки деления",
  "Текстовые задачи",
  "Уравнения",
];

export default function DiagnosticPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  useEffect(() => {
    if (finished) return;

    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, finished]);

  const chooseAnswer = (answerIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentQuestion] = answerIndex;
      return next;
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setTimeLeft(60 * 60);
    setFinished(false);
    localStorage.removeItem("equalEdDiagnostic");
  };

  const score = useMemo(() => {
    return questions.reduce((total, question, index) => {
      return total + (answers[index] === question.answer ? 1 : 0);
    }, 0);
  }, [answers]);

  const percentage = Math.round((score / questions.length) * 100);

  const topicResults = useMemo(() => {
    return topics.map((topic) => {
      const topicQuestions = questions
        .map((question, index) => ({ question, index }))
        .filter((item) => item.question.topic === topic);

      const correct = topicQuestions.reduce((total, item) => {
        return (
          total +
          (answers[item.index] === item.question.answer ? 1 : 0)
        );
      }, 0);

      return {
        topic,
        correct,
        total: topicQuestions.length,
        percentage: Math.round(
          (correct / topicQuestions.length) * 100
        ),
      };
    });
  }, [answers]);

  const weakestTopics = [...topicResults]
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, 2);

  const strongestTopics = [...topicResults]
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 2);

  const getLevel = () => {
    if (percentage >= 90) {
      return {
        title: "Отличный уровень",
        description:
          "Ты уверенно справляешься с большинством заданий. Можно переходить к более сложным темам.",
      };
    }

    if (percentage >= 70) {
      return {
        title: "Хороший уровень",
        description:
          "У тебя уже есть хорошая база. Теперь стоит закрепить отдельные темы.",
      };
    }

    if (percentage >= 50) {
      return {
        title: "Хороший старт",
        description:
          "Основы уже есть. Системная практика поможет значительно улучшить результат.",
      };
    }

    return {
      title: "Начнём с основ",
      description:
        "Не переживай — диагностика нужна именно для того, чтобы определить, с чего начать.",
    };
  };

  const level = getLevel();

  useEffect(() => {
    if (!finished) return;

    const result = {
      score,
      total: questions.length,
      percentage,
      level: level.title,
      strongestTopics,
      weakestTopics,
    };

    localStorage.setItem(
      "equalEdDiagnostic",
      JSON.stringify(result)
    );
  }, [
    finished,
    score,
    percentage,
    level.title,
    strongestTopics,
    weakestTopics,
  ]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (finished) {
    return (
      <main className="min-h-screen bg-cream px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
              Equal Ed
            </p>

            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-dark sm:text-6xl">
              Диагностика завершена
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-dark/65">
              Мы определили твои сильные стороны и темы, которые стоит
              повторить.
            </p>
          </header>

          <section className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] bg-dark p-7 text-cream">
              <p className="text-sm text-cream/60">Твой результат</p>

              <p className="mt-3 font-display text-5xl font-semibold">
                {score}/{questions.length}
              </p>

              <p className="mt-2 text-cream/60">
                правильных ответов
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-7">
              <p className="text-sm text-dark/50">Процент</p>

              <p className="mt-3 font-display text-5xl font-semibold text-purple">
                {percentage}%
              </p>

              <p className="mt-2 text-dark/50">
                общий результат диагностики
              </p>
            </div>

            <div className="rounded-[2rem] bg-lime p-7">
              <p className="text-sm text-dark/60">Твой уровень</p>

              <p className="mt-3 font-display text-2xl font-semibold text-dark">
                {level.title}
              </p>

              <p className="mt-2 text-sm leading-6 text-dark/65">
                {level.description}
              </p>
            </div>
          </section>

          <section className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-purple">
                Сильные стороны
              </p>

              <div className="mt-5 space-y-4">
                {strongestTopics.map((item) => (
                  <div
                    key={item.topic}
                    className="flex items-center justify-between rounded-2xl bg-gray-50 p-4"
                  >
                    <span className="font-medium text-dark">
                      {item.topic}
                    </span>

                    <span className="font-semibold text-purple">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-purple">
                Стоит повторить
              </p>

              <div className="mt-5 space-y-4">
                {weakestTopics.map((item) => (
                  <div
                    key={item.topic}
                    className="flex items-center justify-between rounded-2xl bg-gray-50 p-4"
                  >
                    <span className="font-medium text-dark">
                      {item.topic}
                    </span>

                    <span className="font-semibold text-purple">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-[2rem] bg-dark p-7 text-cream sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
              Твой следующий шаг
            </p>

            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
              Начни с темы «{weakestTopics[0]?.topic}»
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-cream/70">
              Equal Ed подобрал направление, с которого лучше всего
              продолжить подготовку.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/preparation"
                className="inline-flex items-center justify-center rounded-full bg-lime px-6 py-3 font-semibold text-dark transition hover:opacity-90"
              >
                Перейти к подготовке
              </a>

              <a
                href="/profile"
                className="inline-flex items-center justify-center rounded-full border border-cream/20 px-6 py-3 font-semibold text-cream transition hover:bg-cream/10"
              >
                Открыть профиль
              </a>

              <button
                type="button"
                onClick={restart}
                className="inline-flex items-center justify-center rounded-full border border-cream/20 px-6 py-3 font-semibold text-cream transition hover:bg-cream/10"
              >
                Пройти заново
              </button>
            </div>
          </section>

          <section className="mt-8 rounded-[2rem] bg-white p-7">
            <h2 className="font-display text-2xl font-semibold text-dark">
              Результаты по всем темам
            </h2>

            <div className="mt-6 space-y-5">
              {topicResults.map((item) => (
                <div key={item.topic}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-dark">
                      {item.topic}
                    </span>

                    <span className="text-sm font-semibold text-dark/50">
                      {item.percentage}%
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-purple"
                      style={{
                        width: item.percentage + "%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
              Equal Ed
            </p>

            <p className="mt-2 text-sm text-dark/50">
              Диагностика знаний
            </p>
          </div>

          <div className="rounded-full bg-dark px-5 py-3 text-sm font-semibold text-cream">
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </div>
        </header>

        <div className="mt-8">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-dark">
              Вопрос {currentQuestion + 1} из {questions.length}
            </span>

            <span className="text-dark/50">
              {Math.round(
                ((currentQuestion + 1) / questions.length) * 100
              )}
              %
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-purple"
              style={{
                width:
                  ((currentQuestion + 1) / questions.length) * 100 +
                  "%",
              }}
            />
          </div>
        </div>

        <section className="mt-8 rounded-[2rem] bg-white p-7 shadow-sm sm:p-10">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-purple/10 px-4 py-2 text-xs font-semibold text-purple">
              {question.topic}
            </span>

            <span className="text-sm text-dark/40">
              {currentQuestion + 1}/{questions.length}
            </span>
          </div>

          <h1 className="mt-8 font-display text-2xl font-semibold leading-tight text-dark sm:text-4xl">
            {question.question}
          </h1>

          <div className="mt-8 grid gap-3">
            {question.options.map((option, index) => {
              const selected = answers[currentQuestion] === index;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => chooseAnswer(index)}
                  className={`rounded-2xl border p-5 text-left transition ${
                    selected
                      ? "border-purple bg-purple text-cream"
                      : "border-gray-200 bg-white text-dark hover:border-purple hover:bg-purple/5"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                        selected
                          ? "bg-cream text-purple"
                          : "bg-gray-100 text-dark/60"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="font-medium">
                      {option}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-dark transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
            >
              ← Назад
            </button>

            <button
              type="button"
              onClick={nextQuestion}
              disabled={answers[currentQuestion] === undefined}
              className="rounded-full bg-purple px-6 py-3 text-sm font-semibold text-cream transition hover:bg-[#5a1ff0] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {currentQuestion === questions.length - 1
                ? "Завершить"
                : "Далее →"}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}