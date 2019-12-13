import React from "react";
import AppBar from "material-ui/AppBar";

import "./TitleBar.scss";

const TitleBar = () => (
  <div>
    <AppBar title="Chuck Norris [NEVER] Jokes" showMenuIconButton={false} />
  </div>
);

export default TitleBar;
