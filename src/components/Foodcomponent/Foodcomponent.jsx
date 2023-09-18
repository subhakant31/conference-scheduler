import styles from "./Foodcomponent.module.scss";
import React from "react";
import wave from "../../assets/images/svg collection/wave.svg";
import chinesefood from "../../assets/images/chinesefood.jpg";
import breakfast from "../../assets/images/healthy-breakfast.webp";
import lunch from "../../assets/images/lunch.jpg";
import dinner from "../../assets/images/dinner.jpg";
import { faker } from "@faker-js/faker";
function Foodcomponent() {
  const foodData = [
    {
      foodID: 1,
      foodName: "Break Fast",
      foodImage: `${breakfast}`,
      foodAlt: "Breakfast",
      foodDescription:
        "Two eggs, 2 bacon strips, 2 sausage links,2 triangles of French toast & 2 buttermilk pancakes",
      foodCalories: "990-1100 kcal | 8.99",
    },
    {
      foodID: 2,
      foodName: "Lunch",
      foodImage: `${lunch}`,
      foodAlt: "Lunch",
      foodDescription:
        "Main-course gravy, dal or curry, sabzi or stir fry, condiments like raita, chutney, pickle, salad, papadum and boiled rice",
      foodCalories: "900 cal | 6.77",
    },
    {
      foodID: 3,
      foodName: "Snacks",
      foodImage: `${chinesefood}`,
      foodAlt: "Snacks",
      foodDescription:
        "Two eggs, 2 bacon strips, 2 sausage links,2 triangles of French toast & 2 buttermilk pancakes",
      foodCalories: "1200-1300 kcal | 9.9 ",
    },
    {
      foodID: 4,
      foodName: "Dinner",
      foodImage: `${dinner}`,
      foodAlt: "Dinner",
      foodDescription:
        "Main-course gravy, dal or curry, sabzi or stir fry, condiments like raita, chutney, pickle, salad, papadum and boiled rice",
      foodCalories: "990-1100 cal |7.77",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles["food"]}>
        <img src={wave} alt="wave" />
        <div className={styles["food-head"]}>
          <span className={styles["food-head__span"]}>
            The Amazing Taste Of{" "}
            <span className={styles["food-menu__span-targetedspan"]}>
              {" "}
              Asian Cuisine
            </span>
          </span>
        </div>
        <div className={styles["food-menu"]}>
          <div className={styles["food-menu__wrapper"]}>
            <div className={styles["food-menu__wrapper-img"]}>
              <div className={styles["lines-pattern"]}>
                <span className={styles["line-design"]}></span>
                <span className={styles["line-design"]}></span>
                <span className={styles["line-design"]}></span>
                <span className={styles["line-design"]}></span>
                <span className={styles["line-design"]}></span>
                <span className={styles["line-design"]}></span>
              </div>
              <img src={foodData[0].foodImage} alt={foodData[0].foodAlt} />
            </div>
            <div className={styles["food-content"]}>
              <span className={styles["food-content__spanone"]}>
                {foodData[0].foodName}
              </span>
              <span className={styles["line-designsecond__pattern"]}></span>

              <span className={styles["food-content__spanone-spantwo"]}>
                {foodData[0].foodDescription}
              </span>
              <span
                className={` ${styles["food-content__spanone-spantwo-three"]} ${styles["calorie-count"]}`}
              >
                {foodData[0].foodCalories}
              </span>
            </div>
          </div>
        </div>

        <div className={styles["food-menu"]}>
          <div className={styles["food-menu__wrapper"]}>
            <div className={styles["food-content"]}>
              <span
                className={`${styles["food-content__spanone"]} ${styles["spanone-pattern_two"]}`}
              >
                {foodData[1].foodName}
              </span>
              <span className={styles["line-designsecond__patterntwo"]}></span>

              <span
                className={`${styles["food-content__spanone-spantwo"]} ${styles["spantwo-pattern_two"]}`}
              >
                {foodData[1].foodDescription}
              </span>
              <span
                className={`${styles["food-content__spanone-spantwo"]} ${styles["spantwo-pattern_two"]} ${styles["calorie-count"]}`}
              >
                {foodData[1].foodCalories}
              </span>
            </div>
            <div className={styles["food-menu__wrapper-img"]}>
              <img src={foodData[1].foodImage} alt={foodData[1].foodAlt} />
              <div className={styles["lines-pattern"]}>
                <span
                  className={`${styles["line-design"]} ${styles["line-designsecond__pattern-right"]}`}
                ></span>
                <span
                  className={`${styles["line-design"]} ${styles["line-designsecond__pattern-right"]}`}
                ></span>
                <span
                  className={`${styles["line-design"]} ${styles["line-designsecond__pattern-right"]}`}
                ></span>
                <span
                  className={`${styles["line-design"]} ${styles["line-designsecond__pattern-right"]}`}
                ></span>
                <span
                  className={`${styles["line-design"]} ${styles["line-designsecond__pattern-right"]}`}
                ></span>
                <span
                  className={`${styles["line-design"]} ${styles["line-designsecond__pattern-right"]}`}
                ></span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["food-menu"]}>
          <div className={styles["food-menu__wrapper"]}>
            <div className={styles["food-menu__wrapper-img"]}>
              <div className={styles["lines-pattern"]}>
                <span className={styles["line-design"]}></span>
                <span className={styles["line-design"]}></span>
                <span className={styles["line-design"]}></span>
                <span className={styles["line-design"]}></span>
                <span className={styles["line-design"]}></span>
                <span className={styles["line-design"]}></span>
              </div>
              <img src={foodData[2].foodImage} alt={foodData[2].foodAlt} />
            </div>
            <div className={styles["food-content"]}>
              <span className={styles["food-content__spanone"]}>
                {foodData[2].foodName}
              </span>
              <span className={styles["line-designsecond__pattern"]}></span>
              <span className={styles["food-content__spanone-spantwo"]}>
                {foodData[2].foodDescription}{" "}
              </span>
              <span
                className={`${styles["food-content__spanone-spantwo-three"]} ${styles["calorie-count"]}`}
              >
                {foodData[2].foodCalories}
              </span>
            </div>
          </div>
        </div>

        <div className={styles["food-menu"]}>
          <div className={styles["food-menu__wrapper"]}>
            <div className={styles["food-content"]}>
              <span
                className={`${styles["food-content__spanone"]} ${styles["spanone-pattern_two"]}`}
              >
                {foodData[3].foodName}
              </span>
              <span className={styles["line-designsecond__patterntwo"]}></span>

              <span
                className={`${styles["food-content__spanone-spantwo"]} ${styles["spantwo-pattern_two"]}`}
              >
                {foodData[3].foodDescription}
              </span>
              <span
                className={`${styles["food-content__spanone-spantwo"]} ${styles["spantwo-pattern_two"]} ${styles["calorie-count"]}`}
              >
                {foodData[3].foodCalories}
              </span>
            </div>
            <div className={styles["food-menu__wrapper-img"]}>
              <img src={foodData[3].foodImage} alt={foodData[3].foodAlt} />
              <div className={styles["lines-pattern"]}>
                <span
                  className={`${styles["line-design"]} ${styles["line-designsecond__pattern-right"]}`}
                ></span>
                <span
                  className={`${styles["line-design"]} ${styles["line-designsecond__pattern-right"]}`}
                ></span>
                <span
                  className={`${styles["line-design"]} ${styles["line-designsecond__pattern-right"]}`}
                ></span>
                <span
                  className={`${styles["line-design"]} ${styles["line-designsecond__pattern-right"]}`}
                ></span>
                <span
                  className={`${styles["line-design"]} ${styles["line-designsecond__pattern-right"]}`}
                ></span>
                <span
                  className={`${styles["line-design"]} ${styles["line-designsecond__pattern-right"]}`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Foodcomponent;
