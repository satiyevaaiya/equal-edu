const features = [
  {
    title: "Диагностика",
    text: "Определи свой текущий уровень.",
    className: "bg-purple text-cream sm:col-span-2",
    accent: "text-lime",
  },
  {
    title: "Персональный план",
    text: "Получай понятную последовательность тем и заданий.",
    className: "bg-white text-dark ring-1 ring-dark/8",
    accent: "text-purple",
  },
  {
    title: "Практика",
    text: "Закрепляй знания на заданиях.",
    className: "bg-white text-dark ring-1 ring-dark/8",
    accent: "text-purple",
  },
  {
    title: "Аналитика",
    text: "Следи за своим прогрессом.",
    className: "bg-dark text-cream",
    accent: "text-lime",
  },
  {
    title: "Слабые темы",
    text: "Видь, что нужно подтянуть.",
    className: "bg-white text-dark ring-1 ring-dark/8",
    accent: "text-purple",
  },
  {
    title: "Прогресс",
    text: "Понимай, насколько ты приблизился к цели.",
    className: "bg-lime text-dark sm:col-span-2 lg:col-span-1",
    accent: "text-dark/50",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 px-5 py-8 sm:px-8 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Всё необходимое для подготовки — в одном месте.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`min-h-[220px] rounded-[1.75rem] p-7 transition-transform hover:-translate-y-1 ${feature.className}`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-[0.18em] ${feature.accent}`}
              >
                Equal Ed
              </p>
              <h3 className="mt-10 font-display text-2xl font-semibold">
                {feature.title}
              </h3>
              <p className="mt-3 max-w-xs text-base leading-7 opacity-80">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
