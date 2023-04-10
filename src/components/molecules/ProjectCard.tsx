import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProjectCard = (props: {
    imgPath: string;
    title: string;
    description: string;
    ghLink: string;}) => {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{textAlign: "justify"}}>
                    {props.description}
                </Card.Text>
                <Button className="viewbtn btn-outline" variant="primary" href={props.ghLink} target="_blank">
                    View
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
