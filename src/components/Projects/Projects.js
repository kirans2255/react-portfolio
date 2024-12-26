import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kanban from "../../Assets/Projects/Kanban-App.png";
import scratchcard from "../../Assets/Projects/Scratch-Card.png";
import TapJoy from "../../Assets/Projects/TapJoy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TapJoy}
              isBlog={false}
              title="TapJoy"
              description="E-Commerce Website for Phones and Tablets
              This is a full-stack e-commerce website built with Node.js, MongoDB, HTML, and CSS for selling phones and tablets. The platform allows users to browse products, search, filter, and securely make purchases. It features user authentication, a shopping cart, and an admin panel for managing products and orders. The website offers a smooth and responsive shopping experience while showcasing my skills in developing dynamic, scalable web applications.."
              ghLink="https://github.com/kirans2255/TapJoy"
              demoLink="https://tapjoy-2.onrender.com/signin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kanban}
              isBlog={false}
              title="Kanban App"
              description="This project is a task management application designed to streamline task organization using a Kanban board. The frontend is built with React and TypeScript, ensuring a robust and type-safe codebase. The application is styled with Chakra UI for a modern, responsive design.
              To enhance the user experience, react-beautiful-dnd was integrated to enable drag-and-drop functionality, allowing users to easily organize tasks across different boards. The application is deployed on Vercel, ensuring fast and reliable hosting for seamless access."
              ghLink="https://github.com/kirans2255/Kanban_App_React"
              demoLink="https://kanabanapp-kirans2255s-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scratchcard}
              isBlog={false}
              title="Scratch-Card"
              description="This project is a Scratch Card application built with React, featuring a dynamic and interactive user interface. The frontend is powered by React and Redux with Redux Toolkit for efficient state management. The application is styled using Chakra UI, offering a modern and responsive design.
              User authentication is implemented with signup and login functionality, storing user details in a MongoDB database. Redux-persist is used to retain the application state across sessions, ensuring a seamless user experience. React Router allows smooth navigation between different sections of the app, while Axios is used for handling HTTP requests and managing API communication."
              ghLink="https://github.com/kirans2255/Scratch-Card"
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
