import React from "react";
import colors from "../../colors";
/**
 * @param {words}
 * @return {json} {style:{string}, no-style: {}}
 */
// const getStyledWords = () => {

// }

const PageTitle = ({ title }) => {
  const wordsArray = title.split(" ");
  return (
    <div
      style={{
        display: "flex",
        fontSize: "3.5rem",
        fontWeight: "bold",
        
        textAlign: "right",
        marginTop: "25px",
      }}
    >
      <p style={{ color: "red" }}>{wordsArray[0]} </p>
      <p style={{ color: colors.darkBlue }}>{wordsArray.slice(1).join(" ")}</p>
    </div>
  );
};

export default PageTitle;
