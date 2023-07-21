import React from "react";
const TuitSummaryItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/600px-Tesla_logo.png?20210117060557"
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>{tuit.userName} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.title}</div>
     </div>
     <div className="col-2">
       <img width={70} className="float-end rounded-3" src={tuit.image}/>
     </div>
   </div>
  </li>
 );
};
export default TuitSummaryItem;