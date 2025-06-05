import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

export default function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ display:"flex",justifyContent:"center" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <Button variant="primary" href={props.ghLink1} target="_blank">
            <BsGithub /> &nbsp;
            {props.ghLink2 ? "Frontend" : "GitHub"}
          </Button>
          {props.ghLink2 && <Button variant="primary" href={props.ghLink2} target="_blank">
            <BsGithub /> &nbsp;
            Backend
          </Button>}
          <Button variant="primary" href={props.demoLink} target="_blank">
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}
