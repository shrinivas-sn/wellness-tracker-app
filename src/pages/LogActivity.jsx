import styles from "./LogActivity.module.css";
import { useState } from "react";

//Main form container
export default function LogActivity() {
  const [name, setName] = useState("");
  const [steps, setSteps] = useState();
  const [water, setWater] = useState();
  const [sleep, setSleep] = useState();
  const [mood, setMood] = useState();
  const [comment, setComment] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const dailyLog = {
      date: new Date().toLocaleDateString(),
      name: name,
      steps: steps,
      water: water,
      sleep: sleep,
      mood: mood,
      comment: comment,
    };
    
    //Storing the data into local storage
    const existingData = JSON.parse(localStorage.getItem("dailyLog")) || [];
    existingData.push(dailyLog);
    localStorage.setItem("dailyLog", JSON.stringify(existingData));
    console.log(dailyLog);
  }

  return (
    <div className={styles.maindiv}>
      <h1>This is log activity</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formdiv}>
          <p>User Name</p>
          <input
            type="text"
            value={name}
            onChange={function (event) {
              setName(event.target.value);
            }}
            placeholder="Enter your Name"
          ></input>
          <p>Steps walked</p>
          <input
            type="number"
            value={steps}
            onChange={function (event) {
              setSteps(event.target.value);
            }}
            placeholder="Steps"
          ></input>
          <p>Water intake</p>
          <input
            type="number"
            value={water}
            onChange={function (e) {
              setWater(e.target.value);
            }}
            placeholder="Water intake in glasses"
          ></input>
          <p>Sleep hours</p>
          <input
            type="number"
            value={sleep}
            onChange={function (e) {
              setSleep(e.target.value);
            }}
            placeholder="Daily sleep hours"
          ></input>
          <p>Mood</p>
          <input
            type="number"
            value={mood}
            onChange={function (e) {
              setMood(e.target.value);
            }}
            min="1"
            max="5"
            placeholder="Rate your today's mood on a 1-5 scale"
          ></input>
          <p>Comments</p>
          <textarea
            type="text"
            value={comment}
            onChange={function (e) {
              setComment(e.target.value);
            }}
            placeholder="Write a detailed comment of today's activity"
          ></textarea>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
