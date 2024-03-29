import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";

const TopContent = () => {

    return (
        <div className="topContent" >
       <div className="topContent__container">
       <h1>Mr.Selvaraj</h1>
         <p>A Professional <b>FULL STACK DEVELOPER</b></p>
         <a
            href="https://drive.google.com/file/d/1eL7Ajwo1D58PeCO5NsrVEBym_hR_Rw2t/view?usp=share_link"
           target="_blank"
            rel="noopener noreferrer"
         >
           <button className="topContent__downloadButton">Download CV</button>         </a>
         <Link to="projects" smooth={true} duration={500}>
           <button
              className="topContent__workButton">
           
              My Work
            </button>
          </Link>
         </div>
         </div>
         )
         }
         export default TopContent;




// import React from "react";
// import "./TopContent.css";
// import { fadeInLeft } from "react-animations";
// import Radium, { StyleRoot } from "radium";
// import { Link } from "react-scroll";

// const styles = {
//   fadeInLeft: {
//     animation: "x 2s",
//     animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
//   },
// };

// const TopContent = ({ setSelected }) => {
//   return (
//     <StyleRoot>
//       <div className="topContent" style={styles.fadeInLeft}>
//         <div className="topContent__container">
//           <h1>Mr.Anton Francis Jeejo</h1>
//           <p>A Professional Web and App Developer</p>
//           <a
//             href="https://drive.google.com/file/d/19n-zE5oohh8jdeKoOCI8vCno61_JTllT"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="topContent__downloadButton">Download CV</button>
//           </a>
//           <Link to="projects" smooth={true} duration={500}>
//             <button
//               className="topContent__workButton"
//               onClick={() => setSelected("projects")}
//             >
//               My Work
//             </button>
//           </Link>
//         </div>
//       </div>
//     </StyleRoot>
//   );
// };

// export default TopContent;