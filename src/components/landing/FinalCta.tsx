export default function FinalCta() {
  return (
    <section id="start" className="scroll-mt-24 px-5 pb-16 sm:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-purple px-6 py-16 text-center text-cream sm:px-10 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-lime/30"
        />
        <div
          aria-hidden="true"
          className="absolute -right-8 bottom-6 h-24 w-24 rotate-12 rounded-3xl bg-dark/20"
        />
        <h2 className="relative font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          Готов узнать свой уровень?
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-lg leading-8 text-cream/80">
          Начни с диагностики и узнай, с чего тебе лучше начать подготовку.
        </p>
        <a
            href="/diagnostic"
          className="relative mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-lime px-7 py-3 text-base font-semibold text-dark transition-transform hover:scale-[1.04]"
        >
          Пройти диагностику
        </a>
      </div>
    </section>
  );
}
