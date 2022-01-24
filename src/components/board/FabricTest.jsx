import React, { useState, useEffect } from 'react'
import { fabric } from 'fabric'

import DeleteIcon from '@mui/icons-material/Delete'


const FabricTest = () => {
  const [canvas, setCanvas] = useState(null)
  const [imgURL, setImgURL] = useState('')
  const winSize = useWindowSize()
  const brushColor = 'hotpink';
  const brushSize = 30;

  useEffect(() => {
    setCanvas(initCanvas())
  }, [])

  const initCanvas = () => {
    return new fabric.Canvas('canvas', {
      width: window.innerWidth - 100,
      height: window.innerHeight - 250,
      backgroundColor: 'pink',
      defaultCursor: 'pointer',
    })
  }

  const addRect = (canvi) => {
    // console.log('button works!')
    // console.log(canvi)
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: 'yellow',
    })
    canvi.add(rect)
    canvi.renderAll()
  }

  const addImg = (e, url, canvi) => {
    e.preventDefault()
    new fabric.Image.fromURL(url, (img) => {
      img.scale(0.75)
      canvi.add(img)
      canvi.renderAll()
      setImgURL('')
    })
  }

  function getDrawCursor(brushSize, brushColor, opacity) {
    const circle = `
      <svg
        height="${ brushSize }"			
        viewBox="0 0 ${ brushSize * 2 } ${ brushSize * 2 }"
        width="${ brushSize }"
        xmlns="http://www.w3.org/2000/svg" version="1.1"
      >
        <circle
          onmouse="mouse_move(e)"
          opacity="${ opacity }"
          fill="${ brushColor }"
          stroke="rgba(134, 136, 134, 0.8)"
          stroke-width="2"
          cx="50%"
          cy="50%"
          r="${ brushSize }" 
        />
      </svg>
    `
    
    return `data:image/svg+xml;base64,${ window.btoa(circle) }`
  }

  return (
    <>
      <div className="button-set">
        <button onClick={() => addRect(canvas)}>Rectangle</button>
        <button
          onClick={(e) => {
            e.preventDefault()
            console.log(canvas.toJSON())
          }}
        >
          To JSON
        </button>
        <button
          onClick={() => {
            if (canvas.isDrawingMode) {
              canvas.isDrawingMode = false
              canvas.freeDrawingCursor = 'default'
            } else {
              canvas.isDrawingMode = true
              console.log(canvas.freeDrawingBrush.color)
              console.log(canvas.freeDrawingBrush.width)
              canvas.freeDrawingBrush.color = brushColor
              canvas.freeDrawingBrush.width = brushSize
              canvas.freeDrawingCursor = 'none'
              const mousecursor = new fabric.Circle({
                left: 0,
                top: 0,
                radius: canvas.freeDrawingBrush.width / 2,
                fill: canvas.freeDrawingBrush.color,
                originX: 'right',
                originY: 'bottom',
              });
              canvas.freeDrawingCursor = `url(${ getDrawCursor(brushSize, brushColor, 1) }) ${ brushSize / 2 } ${ brushSize / 2 }, crosshair`
              canvas.on('mouse:down', event => {
                canvas.freeDrawingCursor = `url(${ getDrawCursor(brushSize, brushColor, 0.2) }) ${ brushSize / 2 } ${ brushSize / 2 }, crosshair`
              });
              canvas.on('mouse:up', event => {
                canvas.freeDrawingCursor = `url(${ getDrawCursor(brushSize, brushColor, 0.8) }) ${ brushSize / 2 } ${ brushSize / 2 }, crosshair`
              });
            }
          }}
        >
          Drawing Mode
        </button>
        <form onSubmit={(e) => addImg(e, imgURL, canvas)}>
          <div>
            <input
              type="text"
              value={imgURL}
              onChange={(e) => setImgURL(e.target.value)}
            />
            <button type="submit">Add Image</button>
          </div>
        </form>
        <div>
          {winSize.width}px / {winSize.height}px
        </div>
      </div>
      <div className="canvas-container" style={{display: 'flex', alignItems: "center", justifyContent: 'center'}}>
        <canvas id="canvas" />
      </div>
    </>
  )
}

// Hook
const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


export default FabricTest
