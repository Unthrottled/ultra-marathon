import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider, Global, css } from '@emotion/react';

import { lightTheme, darkTheme } from './index';
import Header from '../Header';
import { baseStyles } from '../styles/GlobalStyles';
import { styles } from '../../custom/styles/styles';
import Background from '../Background';

class ThemeProvider extends React.Component {
  state = {
    isDarkThemeActive: false,
  };

  componentDidMount() {
    this.retrieveActiveTheme();
    this.setTheme();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.setTheme();
  }

  retrieveActiveTheme = () => {
    const isDarkThemeActive = JSON.parse(window.localStorage.getItem('isDarkThemeActive'));

    this.setState({ isDarkThemeActive });
  };

  toggleActiveTheme = () => {
    this.setState(prevState => ({ isDarkThemeActive: !prevState.isDarkThemeActive }));

    const darkThemeActive = !this.state.isDarkThemeActive;
    window.localStorage.setItem('isDarkThemeActive', JSON.stringify(darkThemeActive));
    this.setTheme();

  };

  setTheme = () => {
    const darkThemeActive = this.state.isDarkThemeActive;
    const theme = this.getCurrentActiveTheme(darkThemeActive);
    document.documentElement.style.setProperty(
      "--info-foreground",
      theme.colors.infoForeground,
    )
    document.documentElement.style.setProperty(
      "--secondary-background",
      theme.colors.secondaryBackground,
    )
    document.documentElement.style.setProperty(
      "--accent-color",
      theme.colors.accentColor,
    )
    document.documentElement.style.setProperty(
      "--selection-background",
      theme.colors.selectionBackground,
    )
    document.documentElement.style.setProperty(
      "--selection-foreground",
      theme.colors.selectionForeground,
    )
    document.documentElement.style.setProperty(
      "--border-color",
      theme.colors.borderColor,
    )
    document.documentElement.style.setProperty(
      "--base-background",
      theme.colors.baseBackground,
    )
    document.documentElement.style.setProperty(
      "--header-color",
      theme.colors.headerColor,
    )
    document.documentElement.style.setProperty(
      "--caret-row",
      theme.colors.caretRow,
    )
    document.documentElement.style.setProperty(
      "--comments",
      theme.colors.comments,
    )
    document.documentElement.style.setProperty(
      "--custom-hover",
      theme.colors.accentColorTransparent,
    )
    document.documentElement.style.setProperty(
      "--base-icon-color",
      theme.colors.baseIconColor,
    )
    document.documentElement.style.setProperty(
      "--button-color",
      theme.colors.buttonColor,
    )
    document.documentElement.style.setProperty(
      "--button-font",
      theme.colors.buttonFont,
    )
  }


  render() {
    const { children, location } = this.props;

    const { isDarkThemeActive } = this.state;

    const currentActiveTheme = this.getCurrentActiveTheme(isDarkThemeActive);

    return (
      <div>
        <Background theme={currentActiveTheme} />
        <Global styles={[baseStyles, ...styles]} />
        <Header
          location={location}
          isDarkThemeActive={isDarkThemeActive}
          toggleActiveTheme={this.toggleActiveTheme}
        />
        <EmotionThemeProvider theme={currentActiveTheme}>{children}</EmotionThemeProvider>
      </div>
    );
  }

  getCurrentActiveTheme(isDarkThemeActive) {
    return isDarkThemeActive ? darkTheme : lightTheme;
  }
}

export default ThemeProvider;
