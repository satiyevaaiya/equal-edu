import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-10 sm:px-8 sm:pt-16 lg:pb-28 lg:pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-purple/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-40 h-52 w-52 rotate-12 rounded-[2rem] bg-lime/50 blur-2xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-dark">
            <span className="h-2 w-2 rounded-full bg-lime" />
            Бесплатная диагностика
          </p>

          <h1 className="animate-fade-up mt-6 font-display text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-dark sm:text-6xl lg:text-[4.4rem]">
            Подготовка к НИШ.
            <br />
            <span className="text-purple">Но по-другому.</span>
          </h1>

          <p className="animate-fade-up mt-6 max-w-md text-lg leading-8 text-dark/70">
            Узнай свой уровень, найди слабые темы и получи понятный план
            подготовки.
          </p>

          <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/diagnostic"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-purple px-6 py-3 text-base font-semibold text-cream transition-transform hover:scale-[1.03] hover:bg-[#5a1ff0]"
            >
              Пройти диагностику
            </Link>

            <a
              href="/diagnostic"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-dark/15 bg-white px-6 py-3 text-base font-semibold text-dark transition-colors hover:border-dark/30 hover:bg-cream"
            >
              Как это работает
            </a>
          </div>

          <p className="mt-6 text-sm text-dark/50">
            Подготовка для школьников Казахстана
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -left-6 top-8 h-20 w-20 rounded-3xl bg-purple"
          />

          <div
            aria-hidden="true"
            className="absolute -right-4 bottom-16 h-16 w-16 rotate-12 rounded-2xl bg-lime"
          />

          <article className="animate-float relative rounded-[1.75rem] border border-dark/8 bg-white p-5 shadow-[0_24px_60px_rgba(23,21,31,0.08)] sm:p-7">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-dark">Диагностика</p>

              <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-dark">
                12 минут
              </span>
            </div>

            <p className="mt-6 font-display text-4xl font-semibold tracking-tight">
              68%
            </p>

            <p className="mt-1 text-sm text-dark/55">Текущий уровень</p>

            <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-cream">
              <div className="h-full w-[68%] rounded-full bg-purple" />
            </div>

            <div className="mt-6 grid gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dark/45">
                Слабые темы
              </p>

              <div className="flex flex-wrap gap-2">
                {["Дроби", "Проценты", "Текстовые задачи"].map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-dark/10 px-3 py-1.5 text-sm text-dark"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-dark p-4 text-cream">
              <p className="text-xs uppercase tracking-[0.16em] text-lime">
                Следующий шаг
              </p>

              <p className="mt-2 font-medium">
                Тема 4 · Проценты и доли
              </p>
            </div>
          </article>

          <aside className="absolute -right-2 top-20 hidden w-40 rounded-2xl border border-dark/8 bg-cream p-3 shadow-sm sm:block">
            <p className="text-xs text-dark/50">Математика</p>

            <p className="mt-1 font-display text-lg font-semibold text-purple">
              +14
            </p>

            <p className="text-xs text-dark/55">
              за последнюю неделю
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}