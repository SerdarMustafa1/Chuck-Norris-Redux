import React from 'react';
import AppBar from 'material-ui/AppBar';

import './TitleBar.scss'

const TitleBar = () => (
  <AppBar
    title="Chuck Norris [NEVER] Jokes"
    showMenuIconButton={true}
  />
);

export default TitleBar;