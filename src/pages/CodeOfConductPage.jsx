import CodeOfConduct from "../components/code-of-conduct/CodeOfConduct";
import React, { useEffect } from "react";

function CodeOfConductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <React.Fragment>
      <CodeOfConduct />
    </React.Fragment>
  );
}

export default CodeOfConductPage;
