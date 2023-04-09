import React from 'react'
import Typewriter from "typewriter-effect";

const Text = (props: { strings:string[]}) => {
    return (
        <Typewriter
            options={{
                strings: props.strings,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}

export default Text;
