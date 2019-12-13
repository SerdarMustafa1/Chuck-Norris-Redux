import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import CircularProgress from "material-ui/CircularProgress";

const RandomJoke = props => {
  if (props.joke.id === null) {
    return <CircularProgress size={60} thickness={7} />;
  } else {
    return (
      <Grid
        fluid
        style={{ fontFamily: "Heebo, sans-serif", textTransform: "uppercase" }}
      >
        <Row>
          <Col>
            <img src={props.joke.icon_url} />
          </Col>
          <Col xs>"{props.joke.value}"</Col>
        </Row>
        <Row></Row>
      </Grid>
    );
  }
};

export default RandomJoke;
