
"use client";

export default function ProfilePage() {
  const topics = [
    { title: "Проценты", progress: 65 },
    { title: "Площадь и периметр", progress: 40 },
    { title: "Движение", progress: 80 },
    { title: "Дроби", progress: 100 },
    { title: "Пропорции", progress: 20 },
    { title: "Признаки деления", progress: 0 },
    { title: "Текстовые задачи", progress: 0 },
    { title: "Уравнения", progress: 30 },
  ];

  return (
    <main className="min-h-screen bg-cream px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
              Equal Ed
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold text-dark sm:text-4xl">
              Профиль ученика
            </h1>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple text-lg font-semibold text-cream">
            А
          </div>
        </header>

        {/* Welcome */}
        <section className="mt-8 rounded-[2rem] bg-dark p-7 text-cream sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">
            Твой прогресс
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Привет, Айя! 👋
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-cream/70">
            Ты уже начала подготовку. Продолжай в том же темпе —
            каждый пройденный раздел приближает тебя к цели.
          </p>
        </section>

        {/* Statistics */}
        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
            <p className="text-sm text-dark/50">Пройдено тем</p>
            <p className="mt-2 font-display text-4xl font-semibold text-dark">
              3
            </p>
            <p className="mt-1 text-sm text-dark/50">из 8</p>
          </div>

          <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
            <p className="text-sm text-dark/50">Выполнено заданий</p>
            <p className="mt-2 font-display text-4xl font-semibold text-dark">
              27
            </p>
            <p className="mt-1 text-sm text-dark/50">заданий</p>
          </div>

          <div className="rounded-[1.75rem] bg-purple p-6 text-cream shadow-sm">
            <p className="text-sm text-cream/70">Серия занятий</p>
            <p className="mt-2 font-display text-4xl font-semibold">
              3 🔥
            </p>
            <p className="mt-1 text-sm text-cream/70">дня подряд</p>
          </div>
        </section>

        {/* Goal */}
        <section className="mt-6 rounded-[1.75rem] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-purple">
                Твоя цель
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-dark">
                Подготовка к поступлению в НИШ
              </h2>
            </div>

            <span className="rounded-full bg-lime px-4 py-2 text-sm font-semibold text-dark">
              68%
            </span>
          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-purple"
              style={{ width: "68%" }}
            />
          </div>

          <p className="mt-3 text-sm text-dark/50">
            Осталось пройти ещё 5 тем
          </p>
        </section>

        {/* AI Recommendation */}
        <section className="mt-6 rounded-[1.75rem] border border-purple/10 bg-purple/5 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple text-xl text-cream">
              ✦
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-purple">
                Equal Ed AI
              </p>

              <h2 className="mt-2 font-display text-xl font-semibold text-dark">
                Твоя персональная рекомендация
              </h2>

              <p className="mt-2 leading-7 text-dark/60">
                Рекомендуем продолжить тему «Проценты». По результатам
                диагностики именно здесь стоит закрепить знания.
              </p>

              <a
                href="/preparation"
                className="mt-5 inline-flex rounded-full bg-purple px-6 py-3 text-sm font-semibold text-cream transition hover:bg-[#5a1ff0]"
              >
                Продолжить обучение →
              </a>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="mt-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-purple">
                Обучение
              </p>

              <h2 className="mt-2 font-display text-2xl font-semibold text-dark sm:text-3xl">
                Твои темы
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic, index) => (
              <article
                key={topic.title}
                className="rounded-[1.5rem] bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple text-xs font-semibold text-cream">
                    {index + 1}
                  </span>

                  <span className="text-xs font-semibold text-dark/40">
                    {topic.progress}%
                  </span>
                </div>

                <h3 className="mt-5 min-h-[48px] font-display text-base font-semibold text-dark">
                  {topic.title}
                </h3>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-purple"
                    style={{ width: topic.progress + "%" }}
                  />
                </div>

                <p className="mt-3 text-xs text-dark/45">
                  {topic.progress === 100
                    ? "Тема пройдена ✓"
                    : topic.progress > 0
                    ? "В процессе"
                    : "Ещё не начато"}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Back */}
        <div className="mt-10 text-center">
          <a
            href="/preparation"
            className="text-sm font-semibold text-purple transition hover:opacity-70"
          >
            ← Вернуться к подготовке
          </a>
        </div>
      </div>
    </main>
  );
}
