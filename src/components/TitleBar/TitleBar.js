import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from '@material-ui/core/Drawer';
import { NavLink } from 'react-router-dom'

import './TitleBar.scss'

const TitleBar = () => (
<div>
<AppBar
    title="Chuck Norris [NEVER] Jokes"
    showMenuIconButton={true}
  />
          <Drawer
            open={this.state.menuOpen}
            onRequestChange={open => this.setState({menuOpen: open})}
            docked={false}>

          <MenuItem onTouchTap={this.closeLeftNav} value={'/'} primaryText="Home"/>
     </Drawer>
</div>
);

export default TitleBar;