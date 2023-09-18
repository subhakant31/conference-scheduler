import React from "react";
import styles from "./CodeOfConduct.module.scss";
import ListCoc from "./code-of-conduct-list/ListCoc";

function CodeOfConduct(props) {
  const codeOfConductData = [
    {
      cocID: 'c1',
      cocHeading: "conference code of conduct",
      cocDetails: [
        "All attendees, speakers, sponsors, volunteers and third parties relations who establish a contractual relationship with JSWORLD Conferences are required to agree with the following code of conduct. JSWORLD Conferences will enforce this code throughout the event. We expect cooperation from everyone involved with JSWORLD Conferences to help ensure a safe environment for everybody.",
      ],
    },
    {
      cocID: 'c2',
      cocHeading: "react conferences anti-discrimination and anti-harassment",
      cocDetails: [
        "Our conferences are dedicated to providing discrimination and harassment-free conference experiences for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate racism and/ or harassment of conference participants in any form. Sexual language and imagery is not appropriate for any of our conference venues, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organisers.",
        "Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, technology choices, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.",
        "Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images, activities, or other materials. Booth staff (including volunteers) should not use sexualised clothing/uniforms/costumes, or otherwise create a sexualised environment.",
        "If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.",
        "Conference staff will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.",
        "We expect participants to follow these rules at conference and workshop venues and conference-related social events.",
      ],
    },
    {
      cocID: 'c3',
      cocHeading: "anti-racism",
      cocDetails: [
        "Emphasizing the importance of our standpoint against Racism and having mutual respect towards the equality of any of our attendees, speakers and staff regardless race, physical appearance, ethnicity, religion (or lack thereof), gender, gender identity and expression, age, sexual orientation, disability, body size, or technology choices. We do not tolerate racism of conference participants, speakers, staff or third parties who establish a contractual relationship with JSWORLD Conferences in any form.",
      ],
    },

    {
      cocID: 'c4',
      cocHeading: "enforcement",
      cocDetails: [
        "Participants, Speakers, Staff and Third Party vendors asked to stop any harassing behavior are expected to comply immediately.",
        "Participants, Speakers, Staff and Third Party vendors involved in any case of Racism towards anyone involved within the Frotend Love Conferences & Events at any level will be expelled from the event immediately with no refund.",
        "If a participant engages in harassing behaviour, event organisers retain the right to take any actions to keep the event a welcoming environment for all participants. This includes warning the offender or expulsion from the conference with no refund.",
        "Event organisers may take action to address anything designed to, or with the clear impact of, disrupting the event or making the environment hostile for any participants. We expect participants to follow these rules at all event venues and event-related social activities. We think people should follow these rules outside event activities too!",
        "If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified as they'll be wearing branded clothing and/or badges.",
      ],
    },
    {
      cocID: 'c5',
      cocHeading: "reporting",
      cocDetails: [
        "Any form of violation of our Code of Conduct can also be addressed to our TEAM Members with an Organisation Badge, you will be able to contact us over email via: hello@jsworldconference.com subjected Violation CoC.",
        "For any direct help reach out via whatsapp on telephone number: +31622227889",
      ],
    },
    {
      cocID: 'c6',
      cocHeading: "emergency",
      cocDetails: [
        "In case of emergency when attending one of our conferences at a location in The Netherlands. When attending a virtual conference from a location picked by yourself be aware of the emergency contact information in your country or region.",
        "For any direct help reach out via whatsapp on telephone number: +31622227889",
      ],
    },
  ];
  return (
    <React.Fragment>
      <h2 className={styles['section-heading']}>code of conduct</h2>
      <ol className={styles["coc-wrapper"]}>
        {codeOfConductData.map((coc) => {
          return <ListCoc cocData={coc} key={coc.cocID} />;
        })}
      </ol>
    </React.Fragment>
  );
}

export default CodeOfConduct;
