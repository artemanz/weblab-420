import Number from "./number";
import c from "./styles.module.scss";
type Props = {};

const workCards = [
  { id: 1, text: "Заполнение брифа, сбор и анализ бизнес-требований" },
  { id: 2, text: "Утверждение технического задания, подписание договора" },
  {
    id: 3,
    text: "Создание мастер-почты для регистрации всех необходимых аккаунтов",
  },
  { id: 4, text: "Создание продающего контента для сайта и социальных сетей" },
  { id: 5, text: "Создание сайта для генерации заявок от клиентов" },
  {
    id: 6,
    text: "Создание и дизайн профилей компании в социальных сетях",
  },
  { id: 7, text: "Настройка Битрикс24, формирование воронки продаж" },
  { id: 8, text: "Приобретение домена, размещение сайта на хостинг" },
  { id: 9, text: "Обслуживание сайта и предоставление гарантии" },
];

const HowWeWork = (props: Props) => {
  return (
    <section className={c.section}>
      <div className="anchor" id="howWeWork" />
      <div className={c.container}>
        <h2 className={c.title}>Как мы работаем</h2>

        <div className={c.grid}>
          {workCards.map((w) => (
            <div key={w.id} className={c.workCard}>
              <div className={c.workCardNumber}>
                <Number number={w.id} />
              </div>
              <div className={c.workCardDot} />
              <p className={c.workCardText}>{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
