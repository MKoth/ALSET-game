import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Util from '../../commonFuncs/index';

import { withStyles } from 'material-ui/styles';

import GemCollector from './code/';

const styles = theme => ({});

class PlayEditableSquadGame extends Component {
  constructor() {
    super();
    this.state = {
      scores : [0,0]
    };
    this.handleGameEvents= this.handleGameEvents.bind(this);
  }

  handleGameEvents(event) {
    if(event.type==='score_update'){
      if (
        event.scores[0] != this.state.scores[0] ||
        event.scores[1] != this.state.scores[1]
      ) {
        this.setState({ scores: event.scores });
      }   
    }
  
    this.props.onGameEvent(event);

  }

  render() {
    return (
      <div>
        {this.initGemCollector()}
      </div>
    );
  }

  initGemCollector = () => {
    return <GemCollector
		gameData={this.props}
		onGameEvent={this.handleGameEvents}
		getCommands={Util.getCommands}
    />;
  };  
}

export default withStyles(styles)(PlayEditableSquadGame);
