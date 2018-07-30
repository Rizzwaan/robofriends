import React from 'react';


const Card = (props) => {

	const {name, email, id} = props;

	return(
		<div className = "tc bg-light-green dib br3 ma2 pa3 bw2 shadow-5 grow">
         <img alt = 'Robo' src = {`https://robohash.org/${id}?size=200x200 `} />
           <h2>{name}</h2>
           <p>{email}</p>


		</div>


		);
}

export default Card;