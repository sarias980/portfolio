import {Col, Row, ListGroup, Tab, Badge} from "react-bootstrap";
import React from "react";

const SkillsList = () => {
    const front = ['HTML5', 'CSS3', 'JavaScript / TypeScript', 'Angular', 'React Js', 'jQuery'];
    const back = ['Java', 'C#', 'Node', 'SQL / MYSQL', 'Mongo'];
    const framework = ['Bootsrap', 'Material-ui', 'React Native', 'Ionic', 'Redux Js', 'Git/ GitHub', 'Firebase'];

    const getBadgeList = (list: string[]) => {
        return (
            <div className={'skilllist'}>
                {list.map((f: string) =>
                    <Badge pill className={'skill-badge'}>
                        {f}
                    </Badge>
                )}
            </div>
        )
    }

    return (
        <div style={{marginTop: '25px'}}>
            <h3 style={{marginBottom: '15px'}}>Skills</h3>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#front">
                <ListGroup horizontal>
                    <ListGroup.Item className={'skill-button d-flex justify-content-between align-items-start'} action href="#front">
                        Front end
                        <Badge bg="primary" pill>
                            {front.length}
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className={'skill-button d-flex justify-content-between align-items-start'} action href="#back">
                        Back end
                        <Badge bg="primary" pill>
                            {back.length}
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className={'skill-button d-flex justify-content-between align-items-start'} action href="#framework">
                        Frameworks
                        <Badge bg="primary" pill>
                            {framework.length}
                        </Badge>
                    </ListGroup.Item>
                </ListGroup>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#front">
                            {getBadgeList(front)}
                        </Tab.Pane>
                        <Tab.Pane eventKey="#back">
                            {getBadgeList(back)}
                        </Tab.Pane>
                        <Tab.Pane eventKey="#framework">
                            {getBadgeList(framework)}
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Tab.Container>
        </div>
    )
}

export default SkillsList;
