import React            from 'react'
import ReactDOM         from 'react-dom'
import Savedpets 				from './Savedpets.jsx'
import SearchPets				from './SearchPets.jsx'


export default class App extends React.Component{

	constructor(){
    super();
    this.state = {
      savedPets: []
    }
    console.log(this.state);
  }

	getSavedPets(){
		console.log('clicked');
    return fetch('http://localhost:3000/saved_pets')
    .then(r => r.json())
    .then(data => {
    	this.setState({savedPets: data})
    	console.log('state updated to: ' + this.state.savedPets[0].animal_name)
    })
    .catch(err => console.log('=======',err))
  }

	render(){
		
		return (
			<div>
				<SearchPets />
				<button onClick={() => this.getSavedPets()}> Get dem pets </button>
				<Savedpets petsFromState = {this.state.savedPets}/>
			</div>
		)
	}

}

ReactDOM.render(<App />, document.querySelector('#container'))
