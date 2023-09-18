import React, { useEffect, useState } from "react";
import HeroText from "../components/Herobanner/HeroBannerText";
import { faker } from "@faker-js/faker";
import Eventdescription from "../components/event-description/Eventdescription";
import Button from "../components/button/Buttton";
import EventSpeakers from "../components/event-speakers/EventSpeakers";
import Sponsors from "../components/Sponsors/Sponsors";
import fetchData from "../utilityFunction";
import { ThreeCircles } from "react-loader-spinner";
function HomePage() {
  const conferenceData = {
    startDate: faker.date.anytime(),
  };
  const [homePageData, setHomePageData] = useState({});
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      const fetchedData = await fetchData(`{
        allSpeakers {
          id
          image
          jobarea
          topic
          description
          country
          company
          firstName
          lastName
        }
        homepagemodel {
          presentors
          location
          herobannertitle
          herobannercaption
          eventstartdate
        }
      }`);

      setIsContentLoaded(true);
      setHomePageData(fetchedData);
    })();
  }, []);
  return (
    <React.Fragment>
      {isContentLoaded ? (
        <>
          <HeroText
            startDate={conferenceData.startDate}
            heroBannerTitle={homePageData.homepagemodel.herobannertitle}
            heroBannerCaption={homePageData.homepagemodel.herobannercaption}
            eventLocation={homePageData.homepagemodel.location}
            presentors={homePageData.homepagemodel.presentors}
          ></HeroText>
          <Eventdescription></Eventdescription>
          <Button></Button>
          <EventSpeakers speakerData={homePageData.allSpeakers}></EventSpeakers>
          <Sponsors></Sponsors>
        </>
      ) : (
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass="loader-animation"
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="#00fff7"
          innerCircleColor="#fff"
          middleCircleColor="#7b7b7b"
        />
      )}
    </React.Fragment>
  );
}

export default HomePage;
