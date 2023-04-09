import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Text from "../atoms/Text";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Homepage = () => {
    const titles = [
        "Apps technical lead",
        "Senior Front End Developer",
        "Full stack",
    ]

    return(
        <div className='homepagebackground'>
            <Container>
                <Row>
                    <Col md={7}>
                        <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
                        <h2 className='nametext'>I'm Sergi Arias</h2>
                        <span></span>
                        <Text strings={titles}/>
                        <button onClick={() => {
                            window.open("https://github.com/sarias980");
                        }}
                                className='socailmediabtn'><AiFillGithub className='icon' /></button>
                        <button onClick={() => {
                            window.open("https://www.linkedin.com/in/sergi-arias-fern%C3%A1ndez-ab2729148/");
                        }}
                                className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
                        <button onClick={() => {
                            window.open("https://instagram.com/sarias_wolf");
                        }}
                                className='socailmediabtn'><AiFillInstagram className='icon' /></button>
                    </Col>

                    <Col md={5}>
                        <div className="imagedeveloper">
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Homepage;
