import React from 'react'

export default class Savedpets extends React.Component {
	renderPets(pets){
		return pets.map(pet => {
			return <p> { pet.animal_name } </p>;
		});
	}
	
	render(){
		console.log('rendering savedpets!')
		return (
			<div>
				{ this.renderPets(this.props.petsFromState) }
			</div>
		)
	}
}