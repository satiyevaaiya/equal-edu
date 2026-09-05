const steps = [
  {
    n: "01",
    title: "Пройди диагностику",
    text: "Короткий старт, который показывает реальный уровень — без догадок.",
  },
  {
    n: "02",
    title: "Узнай свои слабые темы",
    text: "Видишь, где именно теряются баллы, и перестаёшь готовиться «вообще».",
  },
  {
    n: "03",
    title: "Следуй персональному плану",
    text: "Темы и задания идут в порядке, который имеет смысл именно для тебя.",
  },
  {
    n: "04",
    title: "Отслеживай прогресс",
    text: "Каждый шаг видно. Это даёт спокойствие — тебе и родителям.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          4 шага до уверенности
        </h2>
        <ol className="mt-12 grid gap-6 lg:grid-cols-2">
          {steps.map((step) => (
            <li
              key={step.n}
              className="group flex gap-5 rounded-[1.75rem] bg-white p-6 ring-1 ring-dark/8 transition-shadow hover:shadow-[0_18px_40px_rgba(23,21,31,0.08)] sm:p-8"
            >
              <span className="font-display text-5xl font-semibold leading-none text-purple/20 transition-colors group-hover:text-purple sm:text-6xl">
                {step.n}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold leading-snug">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-dark/65">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
