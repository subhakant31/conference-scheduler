import styles from "./ListCoc.module.scss";
import CocPara from "./Code-of-conduct-para/CocPara";
import React from "react";
function ListCoc(props) {
  return (
    <li>
      <h2>{props.cocData.cocHeading}</h2>
      {props.cocData.cocDetails.map((cocPara, index) => {
        return <CocPara key={index} para={cocPara}></CocPara>;
      })}
    </li>
  );
}
export default ListCoc;
