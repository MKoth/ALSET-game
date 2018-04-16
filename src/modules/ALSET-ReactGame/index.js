import React from 'react';
// All games inside games directory
import GemCollector from './games/gemCollector/';
import Squad from './games/squadGame/';
import PlayerPerWin from './games/singlePlayerTwoWindows/';

const AlsetReactGame = props => {
	console.log(props);
    switch(props.selectedGame.id) {
        case 0: { //'gemCollector'
            return <GemCollector {...props} />;
        }
        case 1: { //'Squad'
            return <Squad {...props} />;
        }
		case 2: { //'PlayerPerWin'
            return <PlayerPerWin {...props} />;
        }
        // create a case here for new game
        default: {
            return <Squad {...props} />;
        }
    }
};

export default AlsetReactGame;