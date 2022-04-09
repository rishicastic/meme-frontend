import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { Button, Container } from "@mui/material";

const Generator = () => {
  const [canvas, setCanvas] = useState("");
  const [text, setText] = useState("");
  const [w, h] = [window.screen.width - 100, window.screen.height - 100];
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      x: 50,
      y: 50,
      height: 800,
      width: w,
      backgroundColor: "pink",
    });

  const addText = (canvi) => {
    const txt = new fabric.Text(text, {
      fontFamily: "Impact",
      stroke: "#fff",
      strokeWidth: 0.5,
      left: 100,
      top: 100,
    });
    canvi.add(txt);
    canvi.renderAll();
  };

  const saveImg = () => {
    var image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream"); // here is the most important part because if you dont replace you will get a DOM 18 exception.

    window.location.href = image + ".png"; // it will save locally
  };

  const setImage = (e) => {
    let selImg = null;
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (f) {
      var data = f.target.result;
      fabric.Image.fromURL(data, function (img) {
        canvas.setWidth(w);
        canvas.setHeight(h);
        canvas.renderAll();

        // let r = img.width / w;
        // console.log(r);

        // img.width = w;
        // img.height = img.height / r;

        // add background image
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
          scaleX: canvas.width / img.width,
          scaleY: canvas.height / img.height,
        });
      });
    };
    reader.readAsDataURL(file);
  };

  const addRect = (canvi) => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: "yellow",
    });
    canvi.add(rect);
    canvi.renderAll();
  };

  return (
    <Container maxWidth="xxl">
      <div className="input-group">
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="form-control"
          placeholder="Enter Text to Insert..."
        ></textarea>

        <button className="btn btn-primary" onClick={() => addText(canvas)}>
          Text
        </button>
      </div>
      {/* <button onClick={() => addRect(canvas)}>Rectangle</button> */}
      <input type="file" className="form-control" onChange={setImage} />
      <br />
      <br />
      <Button variant="contained" onClick={saveImg}>
        Save Image
      </Button>
      <canvas id="canvas" />
    </Container>
  );
};

export default Generator;
