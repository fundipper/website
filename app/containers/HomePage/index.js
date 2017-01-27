/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import AppBar from 'material-ui/AppBar';
import {
  lightGreen500, lightGreen700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AutoComplete from 'material-ui/AutoComplete';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import GithubIcon from '../../../static/github/GitHub-Mark-32px.png';
import LinkedinIcon from '../../../static/linkedin/In-Black-28px-TM.png';
import messages from './messages';
import MainContent from '../../components/MainContent';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightGreen500,
    primary2Color: lightGreen700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: darkBlack,
    pickerHeaderColor: lightGreen500,
    clockCircleColor: darkBlack,
    shadowColor: fullBlack,
  },
  appBar: {
    height: 50,
  },
});

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    dataSource: [],
    navDrawerExpanded: false
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            onLeftIconButtonTouchTap={() => this.setState({ navDrawerExpanded: !this.state.navDrawerExpanded })}
          >
            <Drawer
              open={this.state.navDrawerExpanded}
              docked={false}
              onRequestChange={(open) => this.setState({ navDrawerExpanded: open })}
            >
              <MenuItem>thing 1</MenuItem>
              <MenuItem>thing 2</MenuItem>
            </Drawer>
          </AppBar>
          <MainContent
            posts={this.props.posts}
          />
          <FlatButton
            style={{ marginLeft: 'calc(50% - 88px)', top: '20px' }}
            href="https://github.com/fundipper"
          >
            <img
              style={{ height: '25px' }}
              src={GithubIcon}
              alt="Github"
            />
          </FlatButton>
          <FlatButton
            style={{ marginleft: 'calc(50% - 176px)', top: '20px' }}
            href="https://www.linkedin.com/in/ian-aspin-a427946a/"
          >
            <img
              style={{ height: '25px' }}
              src={LinkedinIcon}
              alt="Linkedin"
            />
          </FlatButton>
        </div>
      </MuiThemeProvider>
    );
  }
}
