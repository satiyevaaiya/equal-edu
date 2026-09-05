const problems = [
  {
    n: "01",
    title: "Не знаешь свой реальный уровень",
    text: "Ощущение «вроде понимаю» не помогает на экзамене. Нужна честная точка отсчёта.",
  },
  {
    n: "02",
    title: "Не понимаешь, какие темы слабые",
    text: "Время уходит на всё сразу. А результат даёт работа с конкретными пробелами.",
  },
  {
    n: "03",
    title: "Задания без системы",
    text: "Сотни задач подряд создают иллюзию подготовки, но не складываются в прогресс.",
  },
  {
    n: "04",
    title: "Один план не подходит каждому",
    text: "Шаблонные курсы игнорируют, где именно ты уже силён — и где ещё нет.",
  },
];

export default function ProblemSection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Подготовка не должна начинаться с вопроса:
          <span className="mt-3 block text-purple">
            «А с чего мне вообще начать?»
          </span>
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {problems.map((item) => (
            <article
              key={item.n}
              className="rounded-[1.5rem] border border-dark/8 bg-white p-6 transition-transform hover:-translate-y-1 sm:p-8"
            >
              <p className="font-display text-sm font-semibold text-purple">
                {item.n}
              </p>
              <h3 className="mt-4 font-display text-xl font-semibold leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-dark/65">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
