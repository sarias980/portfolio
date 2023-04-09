const Preloader = (props: {load:boolean}) => {
  return(<div id={props.load ? "preloader" : "preloader-none"}/>)
}

export default Preloader;
