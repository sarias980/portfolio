import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from "../molecules/ProjectCard";
import Project from "../../modules/project";
import Admira from "../../assets/mokup-new-admira-mobi.png";
import RWE from "../../assets/rwe.jpeg";
import UVE from "../../assets/uve.jpeg";
import Mint5 from "../../assets/mint5.jpg";
import Coachendo from "../../assets/coachendo.png";
import Corvi from "../../assets/corvi.png";

const ProjectsPage = () => {
    const projectList: Project[] = [
        new Project('Admira Digital Networks', 'Admira is a suite of cloud solutions for Digital Signage, IoT and Smart Retail.\n' +
            'It is based on a flexible and modular platform that adapts to the needs of your business and gets the most out of the digital circuit.',
            'https://admira.com/en/home/', Admira),
        new Project('RWE', 'RWE is a trusted partner for electricity generation, building storage systems and energy trading.\n' +
            'To do this internal work beater they uses different functional tools, like mobile apps.',
            'https://www.rwe.com/en/', RWE),
        new Project('UVE', 'UVE Platform (SaaS) integrates all data-sharing, analytics, business management and customer transaction processes into a single, ' +
            'end-to-end environment, providing you with a guide for the perfect execution at the point of sale',
            'https://uvesolutions.com/', UVE),
        new Project('Mint5', '' +
            'Mint5 is a platform to create NFT from your Instagram posts, sell and trade in an easy way.\n' +
            'For this project I was part of the founder team, as a software engineer.',
            'https://www.mint5.io/', Mint5),
        new Project('Coachendo', 'Coachendo offers a conversational AI coach. All coaching sessions are based on research and have been verified by top coaches.',
            'https://coachendo.com/', Coachendo),
        new Project('Corvi', 'Corvi is a Chrome plugin, this use your Drive account and ChatGTP to autogenerate a completed presentation',
            'https://chrome.google.com/webstore/detail/corvi-ai/jadgbfpejnjpbaabpopfldpcpnnlcnaj', Corvi),

    ]

    const getCardCol = (project: Project) => {
        if (project) {
            return (
                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={project.imgPath}
                        title={project.title}
                        description={project.description}
                        ghLink={project.ghLink}
                    />
                </Col>
            )
        }
    }
    return (
        <div className="projectbackground">
            <Container fluid className="project-section">
                <Container>
                    <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                        {
                            projectList.map((p: Project) => getCardCol(p))
                        }
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
export default ProjectsPage;
