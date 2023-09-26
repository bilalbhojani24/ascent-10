import React from 'react';

// Without prop destructing
// const Card = (props) => {
//   return (
//     <div className="card">
//       <h1>{props.heading}</h1>
//       <p>{props.description}</p>
//       <p>Price : {props.price}</p>
//       <button>Buy now</button>
//     </div>
//   );
// };

// With prop destructing
const Card = (props) => {
  const { heading, description, price } = props;

  return (
    <div className="card">
      <h1>{heading}</h1>
      <p>{description}</p>
      <p>Price : {price}</p>
      <button>Buy now</button>
    </div>
  );
};

export default Card;

// props means passing a data from parent component to child component
