import React from "react";
import { Container } from "react-bootstrap";

import '../App.css'

export default function About() {
    return (
<>
<div className= "jumbotron" id='About'>
  <h1>Hello, welcome!</h1>
  {/* <img src={process.env.PUBLIC_URL + "/images/hero.png"} id='heroImg'></img> */}
    <Container>
      <p className="aboutTxt">
        My name is Layne Donahue, I am a full stack web developer from Upstate New York.  Recently, I made the move to Los Angeles in search of better opportunities for work.
        With each day, I grow and learn as a person and developer.  I believe that no task is below me or too great for me, as everything in life is a learning opportunity.
        I plan to continue to grow and become a better developer.
      </p>
    </Container>
</div>;
</>
);
}

