const steps = [
  {
    n: "01",
    title: "Диагностика",
    text: "Определяем текущий уровень.",
  },
  {
    n: "02",
    title: "Анализ",
    text: "Находим темы, которые требуют внимания.",
  },
  {
    n: "03",
    title: "Персональный план",
    text: "Формируем последовательность подготовки.",
  },
  {
    n: "04",
    title: "Прогресс",
    text: "Показываем, как меняется результат.",
  },
];

export default function SolutionSection() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-8 sm:px-8 lg:py-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-dark px-6 py-14 text-cream sm:px-10 lg:px-14 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
          Решение
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Equal Ed превращает подготовку в понятный путь.
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.n} className="border-t border-white/15 pt-6">
              <p className="font-display text-3xl font-semibold text-lime">
                {step.n}
              </p>
              <h3 className="mt-4 font-display text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-cream/70">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
