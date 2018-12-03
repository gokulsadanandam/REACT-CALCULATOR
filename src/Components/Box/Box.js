import React , { Component } from 'react'

class box extends Component {

	constructor(props){
		super()
		console.log(props)
	}


render(){



	const style = {
		color : this.props.textcolor,
		fontSize : this.props.size,
		width : this.props.cols * 70,
		height : this.props.rows * 10,
		display : "inline-block",
		textAlign : this.props.align,
		backgroundColor : this.props.color,
		borderStyle : "solid",
		borderWidth : "2px"
	}


	return(

		<div style={style} >
			{this.props.data}
		</div>

		)
}


}

export default box