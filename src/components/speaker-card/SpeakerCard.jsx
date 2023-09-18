import React from "react";
import styles from "./SpeakersCard.module.scss";

function SpeakerCard(props) {
  return (
    <li className={styles["speaker-card"]}>
      <div className={styles["speaker-card__img-wrapper"]}>
        <img src={props.speakerImage} alt="speaker image" loading="lazy" />
      </div>
      <div className={styles["speaker-card__text-wrapper"]}>
        <div className={styles["speaker-card__text-wrapper__first-name"]}>
          {props.speakerFirstName}{" "}
          <em className={styles["last-name"]}>{props.speakerlastName}</em>
        </div>
        <div className={styles["speaker-card__text-wrapper__location"]}>
          {props.speakerLocation}
        </div>
        <div className={styles["speaker-card__text-wrapper__jobarea"]}>
          {props.speakerJobArea}
        </div>
        <div className={styles["speaker-card__text-wrapper__jobtitle"]}>
          {props.speakerJob}
        </div>
        <div className={styles["speaker-card__text-wrapper__topic"]}>
          <span> Talk :</span> {props.speakerTopic}
        </div>
        <p className={styles["speaker-card__text-wrapper__desc"]}>
          {props.speakerAbout.substring(0, 100) + "..."}
        </p>
      </div>
    </li>
  );
}

export default SpeakerCard;
