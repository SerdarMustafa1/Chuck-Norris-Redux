import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AppBar from "material-ui/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./TitleBar.scss";

const TitleBar = () => (
  <div>
    <AppBar title="Chuck Norris [NEVER] Jokes" showMenuIconButton={false}>
      <Toolbar>
        <Button>
          <Link to="/about">
            <Typography>About Me</Typography>
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default TitleBar;
