import React from 'react';
import { Container } from 'react-bootstrap';

const ContactPage = () => {
    return (
        <div className='contactbackground'>
            <Container>
                <h2 className='contacthead'>Do you like my profile?</h2>
                <p className='contactpara'>
                    If there is any vacancy my inbox is always open. Whether <br />
                    you have any further questions or just want to say hi, <br />
                    I’ll try my best to get back to you!
                </p>
                <button
                    className='contactbtn'
                    onClick={() => {
                        window.open("https://wa.me/+34657317670");
                    }}
                >Contact me</button>
            </Container>
        </div>
    )
}
export default ContactPage;
