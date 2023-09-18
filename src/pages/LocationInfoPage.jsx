import React, { useEffect } from "react";
import { useState } from "react";
import fetchData from "../utilityFunction";
import LocationData from "../components/location-data/LocationData";
import { ThreeCircles } from "react-loader-spinner";
import styles from "../components/location-data/LocationData.module.scss";

function LocationInfoPage() {
  const [locationData, setLocationData] = useState({});
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      const fetchedData = await fetchData(`{
        allLocations {
          id
          where
          country
          website
          state
          city
          address
          buildingNo
          direction
          image
        }
      }`);

      setIsContentLoaded(true);
      setLocationData(fetchedData);
    })();
  }, []);
  return (
    <React.Fragment>
      {isContentLoaded ? (
        <>
          <div className={styles["location-container"]}>
            <h2>location</h2>
            {locationData.allLocations.map((location) => {
              return (
                <LocationData
                  key={location.id}
                  country={location.country}
                  website={location.website}
                  state={location.state}
                  city={location.city}
                  address={location.address}
                  buildingNo={location.buildingNo}
                  direction={location.direction}
                  map={location.image}
                  where={location.where}
                />
              );
            })}
          </div>
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

export default LocationInfoPage;
