import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '0px 10px',
    marginTop: '20px',
  },
  paper: {
    textAlign: 'center',
    padding: '40px 20px',
    cursor: 'pointer',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class SelectMode extends Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes, selectedGame } = this.props;
    const { spacing } = this.state;
    const gameModes = selectedGame.gameModes;
    return (
      <div className={classes.root}>
        <Typography variant="display1">
          <b>{selectedGame.name} :</b> Select Code Editor Visibility
        </Typography>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                <Grid key={0} item onClick={() => this.props.nextPage('selectedCodeEditorVisibility', false)}>
                  <Paper className={classes.paper}>
                    <Typography variant="headline" component="h3">
                      {"Don't show code editor"}
                    </Typography>
                  </Paper>
                </Grid>
				<Grid key={1} item onClick={() => this.props.nextPage('selectedCodeEditorVisibility', true)}>
                  <Paper className={classes.paper}>
                    <Typography variant="headline" component="h3">
                      {"Show code editor"}
                    </Typography>
                  </Paper>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SelectMode.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectMode);
