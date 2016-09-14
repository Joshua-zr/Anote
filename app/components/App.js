import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Delete from 'material-ui/svg-icons/action/delete';
import Archive from 'material-ui/svg-icons/content/archive';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    let styles = {
      drawer: {
        top: '64px',
      },
    }
    return (
      <div>
        <AppBar
          title="Title"
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
          />
        <Drawer
          containerStyle={styles.drawer}
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem
              onTouchTap={this.handleClose.bind(this)}
              leftIcon={<Archive />}
              >Archive</MenuItem>
            <MenuItem
              onTouchTap={this.handleClose.bind(this)}
              leftIcon={<Delete />}
              >Trash</MenuItem>
        </Drawer>
        {this.props.children}
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default App;
