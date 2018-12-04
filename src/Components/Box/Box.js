import React , { Component } from 'react'
	
class box extends Component {

	constructor(props){
		super(props)
		// this.number = this.number.bind(this)
		this.state = {
				data : 0,
			}
			// console.log(this)
	}

	/*number(){
		console.log(this.props.operations.operations)

		let array = this.props.operations.operations
		// console.log(typeof(array.operations))
		// console.log(this.props.data)
			array.push(this.props.data)
			console.log(this.state.data)
			console.log(this.props.data)
			this.state.data = parseInt(this.state.data) + parseInt(this.props.data)
			console.log(this.state.data)
		this.setState({
			data : this.state.data,
			operations : array
		})
		console.log(this)
	}*/

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
		borderWidth : "2px",
		cursor : "pointer" 
	}

	return(

		<div style={style}  >
			<span onClick= { (e) => this.props.clickHandle(this.props.data,e) }> {this.props.data || this.state.data} </span>
		</div>

		)
}


}

export default box