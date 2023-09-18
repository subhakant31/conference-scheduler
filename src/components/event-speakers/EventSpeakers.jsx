import styles from "./EventSpeakers.module.scss";
import SpeakerCard from "../speaker-card/SpeakerCard";
import React from "react";
function EventSpeakers(props) {
  return (
    <React.Fragment>
      <h2 className={styles["speaker-heading"]} id="speakers">
        SPEAKERS
      </h2>
      <ul className={styles["available-speakers"]}>
        {props.speakerData.map((speaker) => {
          return (
            <SpeakerCard
              key={speaker.id}
              speakerFirstName={speaker.firstName}
              speakerlastName={speaker.lastName}
              speakerLocation={speaker.country}
              speakerJob={speaker.company}
              speakerJobArea={speaker.jobarea}
              speakerImage={speaker.image}
              speakerTopic={speaker.topic}
              speakerAbout={speaker.description}
            ></SpeakerCard>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default EventSpeakers;
