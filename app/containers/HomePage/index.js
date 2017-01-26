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
import messages from './messages';

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
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title="Company Name"
        />
      </MuiThemeProvider>
    );
  }
}
