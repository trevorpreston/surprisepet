import React             from 'react'
import ReactDOM          from 'react-dom'



export default class App extends React.Component{
	render(){
		return (
			<p> heya!!!</p>
		)
	}

}

ReactDOM.render(<App />, document.querySelector('#container'))
