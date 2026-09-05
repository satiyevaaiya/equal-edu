"use client";

export default function PreparationPage() {
  const topics = [
    {
      title: "Проценты",
      description: "Проценты, скидки и нахождение части от числа.",
    },
    {
      title: "Площадь и периметр",
      description: "Формулы площади и периметра основных фигур.",
    },
    {
      title: "Движение",
      description: "Скорость, время и расстояние.",
    },
    {
      title: "Дроби",
      description: "Сложение, вычитание и умножение дробей.",
      link: "/preparation/fractions",
    },
    {
      title: "Пропорции",
      description: "Отношения, пропорции и решение задач.",
    },
    {
      title: "Признаки деления",
      description: "Делимость чисел на 2, 3, 5 и 9.",
    },
    {
      title: "Текстовые задачи",
      description:
        "Как переводить условие задачи в математическую модель.",
    },
    {
      title: "Уравнения",
      description: "Линейные уравнения и раскрытие скобок.",
    },
  ];

  return (
    <main className="min-h-screen bg-cream px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
            Equal Ed
          </p>

          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-dark sm:text-6xl">
            Твой план подготовки
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-dark/65">
            Здесь собраны темы, которые помогут тебе системно подготовиться
            к математике НИШ.
          </p>
        </header>

        <section className="mt-10 rounded-[2rem] bg-dark p-6 text-cream sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
            Твой следующий шаг
          </p>

          <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
            Начни с базовых тем и двигайся постепенно
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-cream/70">
            После диагностики ты уже знаешь свои сильные и слабые стороны.
            Теперь можно перейти к обучению и закрепить знания практикой.
          </p>
        </section>

        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic, index) => (
            <article
              key={topic.title}
              className="rounded-[1.75rem] bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple text-sm font-semibold text-cream">
                  {index + 1}
                </span>

                <span className="text-xs font-semibold text-dark/40">
                  0%
                </span>
              </div>

              <h2 className="mt-6 font-display text-xl font-semibold text-dark">
                {topic.title}
              </h2>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-dark/60">
                {topic.description}
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-purple"
                  style={{ width: "0%" }}
                />
              </div>

              {topic.link ? (
                <a
                  href={topic.link}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-purple px-5 py-3 text-sm font-semibold text-cream transition hover:bg-[#5a1ff0]"
                >
                  Начать тему
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      `Раздел «${topic.title}» скоро будет доступен.`
                    )
                  }
                  className="mt-5 w-full rounded-full bg-purple px-5 py-3 text-sm font-semibold text-cream transition hover:bg-[#5a1ff0]"
                >
                  Начать тему
                </button>
              )}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
  