import styles from "./Dashboard.module.css";
import { useState, useEffect } from "react";
export default function Dashboard() {
  const data = JSON.parse(localStorage.getItem("dailyLog")) || [];
  const userName = data.length > 0 ? data[0].name : "User";
  const [quote, setQuote] = useState("Loading a quote...");

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((response) => response.json())
      .then((data) =>
        setTimeout(() => {
          setQuote(data.quote);
        }, 1500),
      );
  }, []);

  let totalStepsCount = 0;
  let totalWaterIntake = 0;
  let totalSleepHours = 0;
  let averageMoodScore = 0;
  for (let i = 0; i < data.length; i++) {
    totalStepsCount = totalStepsCount + Number(data[i].steps);
    totalWaterIntake = totalWaterIntake + Number(data[i].water);
    totalSleepHours = totalSleepHours + Number(data[i].sleep);
    averageMoodScore = (averageMoodScore + Number(data[i].mood)) / 5;
  }
  return (
    <div className={styles.dashboard}>
      <h1>Dashborad Page</h1>
      <div className={styles.container}>
        <div className={styles.dashboardcard}>
          <h2 className={styles.subtitle}>
            Summary of {userName}'s total activity:
          </h2>
          <div className={styles.content}>
            <p>1. Total Steps walked: {totalStepsCount}</p>
            <p>2. Total Water intake is: {totalWaterIntake} glasses.</p>
            <p>3. Total Sleep hours is: {totalSleepHours} hours.</p>
            <p>4. Average Mood score is: {averageMoodScore}.</p>
          </div>
        </div>
        <div className={styles.quotecard}>
          <h2 className={styles.subtitle}>Today's motivational quote:</h2>
          <h3 className={styles.content}>{quote}</h3>
        </div>
      </div>
    </div>
  );
}
