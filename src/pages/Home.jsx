import styles from "./Home.module.css";
export default function Home() {
  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}>Daily Wellness Tracker Application</h1><br />
      <div className={styles.carddiv}>
    <Cards />
      </div>
    </div>
  );
}
function Cards() {
  return (
    <div className={styles.cards}>
      {appFeatures.map(function (card) {
        return (
            <div className={styles.card}>
          <Card
            id={card.id}
            title={card.title}
            description={card.description}
          />
          </div>
        );
      })}
    </div>
  );
}

function Card(card) {
  return (
    <div>
      <p>{card.id}. {card.title}:</p><br />
      <p>{card.description}</p>
    </div>
  );
}

//card content
const appFeatures = [
  {
    id: 1,
    title: "Daily Activity Tracking",
    description:
      "Easily log your daily steps and water intake to stay hydrated, active, and hit your fitness goals.",
  },
  {
    id: 2,
    title: "Sleep & Recovery",
    description:
      "Monitor your nightly sleep hours to ensure your body and mind get the rest they need to perform at their best.",
  },
  {
    id: 3,
    title: "Mood & Insights",
    description:
      "Record your mood on a 1-5 scale with custom notes to discover patterns between your habits and your overall wellbeing.",
  },

  {
    id: 4,
    title: "Visual History",
    description: "Look back at your past entries with a sortable, filterable history list to see how far you've come on your wellness journey."
  },
];
