import React from "react";
import Image from "../elements/Image";

export default function Home() {
  return (
    <div
      className="col-12 col-md-10 mb-3 p-3 container flex-row justify-space-between-lg justify-center align-center bg-light"
      style={{ border: "1px dotted #1a1a1a" }}
    >
      <h1>Greetings! My name is Reniel Christianson</h1>
      <p>
        I am beginner full stack developer. I am a determined and driven
        individual that is looking to embark on this journey of coding. I have
        learned so much about JS, react, MySQL, CSS, HTML ect. There is always
        something new to learn or practice and get better at!
      </p>
      {/* <a href="https://github.com/waldo-22">
        <Image
          src={require("./../../assets/img/githubicon.png")}
          alt="Github"
          width={64}
          href="https://github.com/waldo-22"
          height={64}
        />
      </a>
      <a href="https://www.linkedin.com/in/reniel-christianson-677575189">
        <Image
          src={require("./../../assets/img/linkedinicon.png")}
          alt="Github"
          width={64}
          href="https://www.linkedin.com/in/reniel-christianson-677575189"
          height={64}
        />
      </a>
      <a href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true">
        <Image
          src={require("./../../assets/img/resumeicon.png")}
          alt="Github"
          width={64}
          href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true"
          height={64}
        />
      </a> */}

      {/* 1 image box */}
      {/* <a href="https://www.linkedin.com/in/reniel-christianson-677575189">
        <button>LinkedIn</button>
      </a> */}
      {/* <a href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true">
        <button>Click to view Resume</button>
      </a> */}
      <div>
        <h1>Skills And Trade</h1>
      <a href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true">
        <Image
          src={require("./../../assets/img/devpic.png")}
          alt="Github"
          width={120}
          href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true"
          height={120}
        />
      </a>
        <h4>
          These are a list of services I am able to provide and apply with the
          skills and knowledge I have gained:
        </h4>

        <p><u>PWA</u>: Commonly known as a progressive web app, is a type of application software delivered through the web, built using common web technologies including HTML, CSS, JavaScript, and WebAssembly.</p>

        <p><u>MERN Stack</u>: MERN is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node. js. It is designed to make the development process smoother and easier.</p>

        <p><u>CSS</u>: Is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language.</p>

        <p><u>HTML</u>: (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.</p>

        <p><u>React</u>: Is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</p>

        <p><u>JavaScript</u>: Is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.</p>

        <p><u>SQL</u>: (Structured Query Language) is a standardized programming language that is used to manage relational databases and perform various operations on the data in them.</p>

        <p><u>ExpressJS</u>: Is a back end web application framework for Node. js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.</p>

        <p><u>NodeJS</u>: Is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.</p>

        <p><u>API's (Server-side, and Third-party)</u>: (Application Programming Interface) is a set of functions that allows applications to access data and interact with external software components, operating systems, or microservices. To simplify, an API delivers a user response to a system and sends the system's response back to a user.</p>

        <p><u>No SQL</u>: NoSQL databases (aka "not only SQL") are non-tabular databases and store data differently than relational tables. NoSQL databases come in a variety of types based on their data model. The main types are document, key-value, wide-column, and graph.</p>

      </div>
      <div>
        <h1>Projects/Work:</h1>
        <p>
          These are some fully functional projects I have worked on and built.
        </p>

        <h2><u>Furiously Fast "Fast & Furious" Facts!</u></h2>
        <h3>Fetch API's</h3>
        <a href="https://lindybriggs.github.io/Project-1">
        <Image
          src={require("./../../assets/img/fff&fscreenshot.png")}
          alt="Github"
          width={400}
          href="https://lindybriggs.github.io/Project-1"
          height={300}
        />
        (click me/Try me)
      </a>
        <h4>
          <u>DESCRIPTION</u>: With the use of weather map APIs, we are able to display
          a select amount information from a searched/selected city. We are also
          able predict and display 5 days ahead of time so the user can fully
          prepare and be knowledgeable of whats to come.{" "}
        </h4>

        <h2><u>Weather Data</u></h2>
        <h3>Fetch API's</h3>
        <a href="https://waldo-22.github.io/hw6-travelData">
        <Image
          src={require("./../../assets/img/weatherdashboardscreenshot.png")}
          alt="Github"
          width={400}
          href="https://waldo-22.github.io/hw6-travelData"
          height={300}
        />
        (click me/Try me)
      </a>
        <h4>
        <u>DESCRIPTION</u>: With the use of 3 APIs, we can provide users with
          information on the 9 movies in the Fast & Furious franchise. When
          users select a movie from the dropdown menu, they're presented with
          that movie's title, brief description, plot, and a related video. From
          Wikipedia's API, the title and brief are data we fetched. YouTube's
          API provides a video ID, which we inserted into a URL to embed that
          video to the page. Lastly, the movie's plot is sourced from OMDb's
          API. Using an audio tag, the song, 'Tokyo Drift' plays upon page load.
          Local storage is used to save the user's previous dropdown inquiry.{" "}
        </h4>

        <h2><u>Password Generator</u></h2>
        <h3>HTML, CSS, JavaScript </h3>
        <a href="https://waldo-22.github.io/hw3-passwordgen">
        <Image
          src={require("./../../assets/img/passwordgenscreenshot.png")}
          alt="Github"
          width={400}
          href="https://waldo-22.github.io/hw3-passwordgen"
          height={300}
        />
        (click me/Try me)
      </a>
        <h4>
        <u>DESCRIPTION</u>: Creates application that enables users to generate random
          passwords based on criteria that they’ve selected. Features
          dynamically updated HTML and CSS powered by JavaScript code. It is a
          clean and polished, responsive user interface that adapts to multiple
          screen sizes.{" "}
        </h4>

        <h2><u>Tech Blog</u></h2>
        <h3>Handlebars, SQL, ExpressJS</h3>
        <a href="https://afternoon-beyond-40690.herokuapp.com">
        <Image
          src={require("./../../assets/img/techblogscreenshot.png")}
          alt="Github"
          width={400}
          href="https://afternoon-beyond-40690.herokuapp.com"
          height={300}
        />
        (click me/Try me)
      </a>
        <h4>
        <u>DESCRIPTION</u>: CMS-style blog site similar to a Wordpress site, where
          developers can publish their blog posts and comment on other
          developers’ posts as well. Follows the MVC paradigm in its
          architectural structure, using Handlebars.js as the templating
          language, Sequelize as the ORM, and the express-session npm package
          for authentication.{" "}
        </h4>
      </div>
    </div>
  );
}
