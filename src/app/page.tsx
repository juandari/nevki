import { getDictionary } from "./dictionaries";

const SOCIAL_MEDIAS = [
  {
    text: "Behance",
    number: "01",
  },
  {
    text: "Dribble",
    number: "02",
  },
  {
    text: "Instagram",
    number: "03",
  },
  {
    text: "LinkedIn",
    number: "04",
  },
];

export default async function Home() {
  const locale = await getDictionary("en");

  return (
    <main className="pt-10">
      <section className="flex justify-between items-center px-20">
        <p className="w-96">{locale.about}</p>
        <h2 className="text-secondary-500 text-9xl leading-10">about</h2>
      </section>

      <section
        aria-label="footer"
        className="mt-20 px-8 text-8xl bg-primary-500 pt-96 pb-20 relative"
      >
        <ul>
          {SOCIAL_MEDIAS.map((item) => (
            <li
              key={item.number}
              className="flex px-2 pb-5 mt-2 tracking-tighter justify-between items-center border-b-[5px] border-b-primary-400"
            >
              <span className="text-secondary-50">{item.text}</span>
              <span className="text-primary-400 font-semibold">
                {item.number}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="font-normal font-make text-secondary-50 text-[550px] w-full text-center">
          {locale["contact-button"]}
        </h3>

        <div className="mt-12 flex justify-between text-lg text-secondary-50">
          <span className="w-[33.3%] whitespace-nowrap">
            ALL RIGHTS RESERVED © 2023
          </span>
          <span className="w-[33.3%] uppercase text-center">
            Nefkijjj@gmail.com
          </span>
          <span className="w-[33.3%] uppercase text-right">MAKESTUDIO</span>
        </div>
      </section>
    </main>
  );
}
