import React from "react";

const AboutMe = (props: { about: string }) => {

    return (
        <div>
            <h3 className='aboutmetext' style={{marginBottom: '15px'}}>About me</h3>
            <p className='aboutdetails'>
                {props.about}
            </p>
        </div>
    )
}
export default AboutMe
