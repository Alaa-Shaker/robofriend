import React from 'react';
import './Card.css';


const Card = (props)=>{

	return(
		<div className="tc mw5   grad dib br3 pa3 ma2 grow bw2 shadow-5 hover-bg-light-blue bg-light-green">
		<img alt='robot' className="br-100 h4 w4  ba b--black-05 pa2" src={`https://robohash.org/${props.id}?set=set1&&200*200`}/>
		<h2 className="f3 mb2"> {props.name} </h2>
		<p className ="f5 fw4 gray mt0">{props.email} </p>
		</div>

		);
		
	/*
		return(

		<article className="mw5 center br3 pa3 pa4-ns mv3 no-underline bg-animate bg-white hover-bg-light-blue black grad shadow-5">

		<div className="tc">
		<img alt='robot' className="br-100 h4 w4  ba b--black-05 pa2" src={`https://robohash.org/${id}?200*200`}/>
		<h2 className="f3 mb2"> {name} </h2>
		<p className ="f5 fw4 gray mt0">{email} </p>
		</div>

		</article>
		);
	*/
	
}

export default  Card;