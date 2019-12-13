import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import ProfilePic from "../../images/headshot.jpg";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "Serdar Mustafa",
        biography:
          "34 year old Husband/Father/Developer/Athlete living in Tallinn. Originally from London, England. Love to make stuff."
      },
      image: "https://imgur.com/a/JpgsZHs",
      quote: {
        content: "Be like water...",
        source: "Bruce Lee"
      }
    };
  }
  render() {
    return (
      <div className="About">
        <Image src={this.state.image} />
        <Profile person={this.state.person} quote={this.state.quote} />
      </div>
    );
  }
}

function Image(props) {
  return (
    <div
      className="Image"
      style={{ backgroundImage: `url(${ProfilePic})` }}
    ></div>
  );
}
function Profile(props) {
  return (
    <div className="Profile">
      <div>
        <Link to="/">
          <Typography className="Jokes">Jokes</Typography>
        </Link>
      </div>
      <h1 className="Name">{props.person.name}</h1>
      <p className="Bio">{props.person.biography}</p>
      <div className="Quote">
        <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
        <div className="byline">&mdash; {props.quote.source}</div>
      </div>
    </div>
  );
}

export default About;
