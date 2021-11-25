import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import "./style.css";

const Memegenerator = () => {
  const [topText, setTopText] = useState("Top Text");
  const [bottomText, setBottomText] = useState("Bottom Text");
  const [image, setImage] = useState(
    "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/05/spongebob.jpg?w=1000&h=600&crop=1"
  );

  const [download_url, setDownload_url] = useState("");

  const takeScreenshot = () => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      document.body.appendChild(canvas);
    });
  };

  const canvas = useRef();
  let ctx = null;

  useEffect(() => {
    // refreshCanvas();
  }, []);

  const refreshCanvas = () => {
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
      writeText({ text: topText, x: 500, y: 70 });
      writeText({ text: bottomText, x: 500, y: 470 });
    };
    console.log(canvasEle.toDataURL());
  };

  const writeText = (info, style = {}) => {
    const { text, x, y } = info;
    const {
      fontSize = 60,
      fontFamily = "Calibri",
      textAlign = "center",
      textBaseline = "top",
    } = style;

    ctx.beginPath();
    ctx.font = fontSize + "px " + fontFamily;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 8;
    ctx.strokeText(text, x, y);
    ctx.fillStyle = "white";
    ctx.fillText(text, x, y);
    ctx.stroke();
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <TextField
            className="w-100"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
          />
          <TextField
            className="w-100"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
          />
          <TextField
            className="w-100"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Button className="mt-5" variant="contained" onClick={refreshCanvas}>
            Generate
          </Button>
        </CardContent>
      </Card>
      <Card className="mt-5">
        <CardContent
          id="meme"
          // style={{ background: `url(${image}) no-repeat center` }}
          className="meme-back"
        >
          {/* <img className="meme-image" src={image} /> */}
          {/* <h1 className="top-text">{topText}</h1>
          <h1 className="bottom-text">{bottomText}</h1> */}

          <Container maxWidth="md">
            <canvas ref={canvas} style={{ width: "100%" }}></canvas>
          </Container>
        </CardContent>
      </Card>
    </Container>
  );
};
export default Memegenerator;
