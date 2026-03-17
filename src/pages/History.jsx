import styles from "./History.module.css";
export default function History() {
  const logs = JSON.parse(localStorage.getItem("dailyLog")) || [];
  return (
    <div className={styles.historypage}>
      <h1>History of the user's daily activity</h1>
      <br />
      <div className={styles.historydiv}>
        {logs.map(function (logs, index) {
          return (
            <div key={index} className={styles.historycard}>
              <p>
                1. Today {logs.name} walked: {logs.steps} steps.
              </p>
              <p>2. Today you drank {logs.water} glasses of water.</p>
              <p>3. Today you slept for {logs.sleep} hours.</p>
              <p>4. Today's mood rating is: {logs.mood}</p>
              <p>5. Today's comment: {logs.comment}.</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
