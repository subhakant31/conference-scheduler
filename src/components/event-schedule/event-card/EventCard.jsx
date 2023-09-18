import styles from "./EventCard.module.scss";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function EventCard(props) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <li className={styles["event-card"]} data-aos='fade-up'>
      <span className={styles["event-card__start-end-time"]}>
        {props.eventCard.topicTime}
      </span>
      <div className={styles["event-card__speaker-image-wrapper"]}>
        <img src={props.eventCard.topicSpeakerImage} alt="speaker" />
      </div>
      <div className={styles["event-card__text-wrapper"]}>
        <h3 className={styles["event-card__text-wrapper__heading"]}>
          {props.eventCard.topicName}
        </h3>
        <span className={styles["event-card__text-wrapper__speaker-name"]}>
          By {props.eventCard.topicBy}
        </span>
        <p className={styles["event-card__text-wrapper__topic-brief"]}>
          {props.eventCard.topicBrief}
        </p>
      </div>
    </li>
  );
}

export default EventCard;
