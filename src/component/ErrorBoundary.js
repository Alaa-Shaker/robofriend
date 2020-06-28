import React , {Component} from 'react';


class ErrorBounday extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasError:false
		}
	}
	componentDidCatch(error,info){
		this.setState({hasError:true})
	}

	render(){
		if (this.state.hasError){
			return(<h1> Ooooooops ,Somthing Not work Good </h1>);
		}
		else{ return this.props.children;}
		}
		
}

export default ErrorBounday;