import React from 'react';
import Image from "./elements/Image";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs bg-primary align-center justify-space-between container">
      {/* <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li> */}
      <li className="nav-item">
      <a href="https://github.com/waldo-22">
        <Image
          src={require("./../assets/img/githubbuttonicon.png")}
          alt="Github"
          width={200}
          href="https://github.com/waldo-22"
          height={64}
        />
        </a>
      </li>
      <li className="nav-item">
      <a href="https://www.linkedin.com/in/reniel-christianson-677575189">
        <Image
          src={require("./../assets/img/linkedinbuttonicon.png")}
          alt="Github"
          width={200}
          href="https://www.linkedin.com/in/reniel-christianson-677575189"
          height={60}
        />
      </a>
      </li>
      <li className="nav-item">
      <a href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true">
        <Image
          src={require("./../assets/img/resumebuttonicon.png")}
          alt="Github"
          width={200}
          href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true"
          height={64}
        />
      </a>
      </li>
    </ul>
  );
}

export default NavTabs;
