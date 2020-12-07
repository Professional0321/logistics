import React from 'react';
import {
  ThemeProvider,
  createMuiTheme,
  ThemeOptions,
} from '@material-ui/core/styles';
import themeProps from './config';

interface Props {
  children: React.ReactNode;
  onMouseOver?: any;
}

const OverrideTheme: React.FC<Props> = (props) => {
  const { children } = props;
  const theme = createMuiTheme({ ...themeProps } as ThemeOptions);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default OverrideTheme;
