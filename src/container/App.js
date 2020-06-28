import React from 'react';
import {Component} from 'react';
import CardList from '../component/CardList';
//import { robots } from'./robots.js';
import SearchBox from '../component//SearchBox.js'
import Scroll from '../component//Scroll';
import './App.css';

class App extends Component{
	constructor(){
		super();
		this.state={
			robots:[],
			searchfield:""
		}

		//console.log("constructor");
	}


	searchChange=(event)=>{
		this.setState({searchfield:event.target.value});
	}


	componentDidMount(){
		// console.log("componentDidMount");
		fetch( 'https://jsonplaceholder.typicode.com/users ')
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}))
	}

	render(){
		const filteredRobots=this.state.robots.filter((robot)=>{
				return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); })

		// console.log("render");
		if (this.state.robots.length === 0)
		{
			return(<h1 className="tc"> ... Loading ...</h1>)
		}
		else{
			return(
			<div className="tc" >
			<h1 className="green head-style"> Robot Friends </h1>
			<SearchBox searchChange={this.searchChange}/>
			<Scroll>
			<CardList robots={filteredRobots} /> 
			</Scroll>
			
			</div>);
		}
		
	}

}

export default App;
