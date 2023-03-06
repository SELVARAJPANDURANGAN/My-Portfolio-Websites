import React from "react";
import { IconButton } from "@material-ui/core";
import { GitHub, LinkedIn } from "@mui/icons-material";
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>vselvar1@gmail.com</span>
        </p>
        <p>
          Github Username : <span>@SELVARAJPANDURANGAN</span>
        </p>
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href="https://github.com/SELVARAJPANDURANGAN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHub/>
            </IconButton>
          </a>
         
        </div>
      </div>
    </Element>
  );
};

export default Contact;