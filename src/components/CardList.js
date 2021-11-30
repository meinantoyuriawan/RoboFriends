import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  // testing component did catch for next improvement
  // if (true) {
  //   throw new Error('error has been occured');
  // }
  const cardArray = robots.map ((user, i) => {
    return (
    <Card 
        key={i} 
        id={user.id} 
        name={user.name} 
        username={user.username} 
        email={user.email}/
    >
    );
  })
  return (
    <div>
        {cardArray}
    </div>
  )
}

export default CardList;