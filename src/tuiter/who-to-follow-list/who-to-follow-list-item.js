import React from "react";
const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'https://images.seattletimes.com/wp-content/uploads/2019/07/nasameatball.jpg' }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-2"style={{ paddingLeft: '5px' }}>
       <img className="rounded-circle" height={48}  src={who.avatarIcon}/>
     </div>
     <div className="col-8">
       <div className="fw-bold">{who.userName}</div>
       <div>@{who.handle}</div>
     </div>
     <div className="col-2">
       <button className="btn btn-primary rounded-pill float-end">Follow</button>
     </div>
   </div>
  </li>
 );
};
export default WhoToFollowListItem;