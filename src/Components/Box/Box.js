import React , { Component } from 'react'
	
class box extends Component {

render(){



	const style = {
		color : "white",
		fontSize : this.props.size,
		width : this.props.cols * 25 + "%",
		height : this.props.rows * 10,
		display : "inline-block",
		textAlign : this.props.align,
		backgroundColor : "rgb(0,0,0,1)",
		cursor : "pointer" 
	}

	return(

		<div style={style} onClick= { (e) => this.props.clickHandle(this.props.data,e) } >
			{this.props.data || this.state.data} 
		</div>

		)
}


}

export default box