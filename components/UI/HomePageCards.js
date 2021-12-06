import React from 'react'
import ArticleCard from './ArticleCard'
import Button from "@mui/material/Button";
function HomePageCards() {
    const lst = [];
    const data = `I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway. Some quick example text to build on the card title and make up the bulk of thecard's content.`;
    for (let i = 0; i < 2; i++) lst.push({ data: data, i: i });

    return (
   <>
        <br />
        <hr />
        <div
        style={{
          marginTop: "50px",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "justify",
          display: "flex",
          flexFlow: "wrap",
        }}
        className="container"
      >
        {/* {lst.map(({ data, i }) => ( */}
           <div>
          <ArticleCard desc="hedfmsad" key={1} />
        <ArticleCard desc="dfsdf" key={2} />
           </div>
        {/* // ))} */}
        
        <div>
         
        </div>
      </div>
      <hr />
   </>

    )
}

export default HomePageCards


