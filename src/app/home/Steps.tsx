"use client";

const STEPS = [
  { title: "Add a resume pdf", text: "or create from scratch" },
  { title: "Preview design", text: "and make edits" },
  { title: "Download new resume", text: "and apply with confidence" },
];

export const Steps = () => {
  return (
    <section
      className="mx-auto mt-40 sm:mt-8 rounded-2xl px-8 pb-12 pt-10 lg:mt-2"
      style={{
        background: "linear-gradient(135deg, #4feeff, #8a4fff)",
      }}
    >
      <h1 className="text-center text-3xl font-bold text-white drop-shadow">
        3 Simple Steps
      </h1>
      <div className="mt-8 flex justify-center">
        <dl className="flex flex-col gap-y-10 lg:flex-row lg:justify-center lg:gap-x-20 text-white">
          {STEPS.map(({ title, text }, idx) => (
            <div className="relative self-start pl-14" key={idx}>
              <dt className="text-lg font-bold">
                <div className="bg-white absolute left-0 top-1 flex h-10 w-10 select-none items-center justify-center rounded-full p-[3.5px] opacity-90 shadow-md">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-purple-500 text-white font-bold">
                    <div className="-mt-0.5 text-xl">{idx + 1}</div>
                  </div>
                </div>
                {title}
              </dt>
              <dd className="text-sm opacity-90">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
