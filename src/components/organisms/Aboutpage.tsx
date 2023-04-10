import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ImgColumn from "../molecules/aboutColumns/ImgColumn";
import AboutMe from "../molecules/aboutColumns/AboutMe";
import SkillsList from "../molecules/aboutColumns/SkillsList";

const AboutPage = () => {
    const about =
        'I\'m a full stack developer focus in cross-platform developments, whit experience like Apps technical lead and specified in the front-end. ' +
        'I have worked on multiple projects in different sectors, both individually and as a team. ' +
        'Learning to collaborate with different departments to work as a team and manage development teams. ';

    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7}>
                        <div>
                            <AboutMe about={about}/>
                            <SkillsList/>
                        </div>
                    </Col>
                    <Col md={5}>
                        <ImgColumn/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AboutPage;
