import { Card, CardContent, Container, TextField } from "@mui/material";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import './style.css';


const Memegenerator = () =>{

    const [topText, setTopText] = useState("Top Text");
    const [bottomText, setBottomText] = useState("Bottom Text");
    const [image, setImage] = useState("https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/05/spongebob.jpg?w=1000&h=600&crop=1");
    
    const takeScreenshot = () => {
        html2canvas(document.querySelector("#meme")).then(canvas => {
            document.body.appendChild(canvas)
        });
    }

    const canvas = useRef();
  let ctx = null;

  useEffect(() => {
    const canvasEle = canvas.current;
    console.log(canvasEle.clientWidth);
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = 1000;

    ctx = canvasEle.getContext("2d");
    console.log(ctx);
    var background = new Image();
    background.src = image;

    // Make sure the image is loaded first otherwise nothing will draw.
    background.onload = function () {
      ctx.drawImage(background, 0, 0);
      writeText({ text: "Clue Mediator!", x: 180, y: 70 });
    };

    console.log(canvasEle.toDataURL());
  }, []);

  const writeText = (info, style = {}) => {
    const { text, x, y } = info;
    const {
      fontSize = 40,
      fontFamily = "Arial",
      color = "black",
      textAlign = "center",
      textBaseline = "top",
    } = style;

    ctx.beginPath();
    ctx.font = fontSize + "px " + fontFamily;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    ctx.stroke();
  };

  return (
    <div>
      <input className="form-control"></input>
      <div className="container">
        <canvas ref={canvas} style={{ width: "100%" }}></canvas>
      </div>
    </div>
  );
};
    

    return(
        <Container>
            <Card>
                <CardContent>
                    <TextField className="w-100" value={topText} onChange={e => setTopText(e.target.value)} />
                    <TextField className="w-100" value={bottomText} onChange={e => setBottomText(e.target.value)} />
                    <TextField className="w-100" value={image} onChange={e => setImage(e.target.value)} />

                </CardContent>
            </Card>
            <Card className="mt-5">
                <CardContent id="meme" style={{background : `url(${image}) no-repeat center`}} className="meme-back">
                    {/* <img className="meme-image" src={image} /> */}
                    <h1 className="top-text">{topText}</h1>
                    <h1 className="bottom-text">{bottomText}</h1>
                </CardContent>
            </Card>
        </Container>
    )
}
export default Memegenerator ;