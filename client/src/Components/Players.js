import React, {Component} from 'react';

class Players extends Component {

    render(){
        return(
            this.props.players.map(player => {
                return (
                    <div className='card'>
                        <h2>{player.name}</h2>
                        <p>Country: {player.country}</p>
                        <p>Searches: {player.searches}</p>
                    </div>
                )
            })

        )
    }
}

export default Players;