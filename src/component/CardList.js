import React from 'react';
import Card from './Card';
import './CardList.css';  //not needed cause us library

const CardList =({robots})=>{
	const CardComponent=robots.map((item,index)=>{
		return(
			<Card
			 key={item.id}
			 id={item.id}
			 name={item.name}
			 email={item.email}
			 />
			);
	});

	return(
		<div className="flex flex-wrap justify-around ">
		{CardComponent}
		</div>
		);
}

export default CardList;