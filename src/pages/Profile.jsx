import styles from "./Profile.module.css";
export default function Profile() {
  const profile = JSON.parse(localStorage.getItem("dailyLog")) || [];
  const userProfile =
    profile.length > 0
      ? profile[0].name
      : "New User Please go to Log Activity to register";
  const joinedDate =
    profile.length > 0
      ? profile[0].date
      : "New user? Please go to Log Activity page to join";
  console.log(profile);
  return (
    <div className={styles.container}>
      <h1>Profile Page</h1>
      <div className={styles.profilecard}>
        <h2 className={styles.profiletitle}>{userProfile}'s profile details</h2>
        <div className={styles.profilephoto}></div>
        <div>
          Member since: {joinedDate}
        </div>
      </div>
    </div>
  );
}
