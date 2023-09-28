import './glitch.css'

const Glitch= (props)=>{


    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;


    function glitchfn(e){
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
          e.target.innerText = e.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return e.target.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
          if (iteration >= e.target.dataset.value.length) {
            clearInterval(interval);
          }
    
          iteration += 1 / 3;
        }, 30);
      };



    return (
        <>
        <h1 style={{}} className="glitchText" data-value={props.GlitchText} onMouseEnter={(e)=>glitchfn(e)}>{props.GlitchText}</h1>
        </>
    )
}

export default Glitch;


// usage = >

{/* <Glitch GlitchText="Login"></Glitch> */}