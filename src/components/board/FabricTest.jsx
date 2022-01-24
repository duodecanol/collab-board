import React, { useState, useLayoutEffect, useEffect } from 'react'
import { fabric } from 'fabric'


const FabricTest = () => {
  const [canvas, setCanvas] = useState(null)
  const [imgURL, setImgURL] = useState('')
  const winSize = useWindowSize()
  const brushColor = 'hotpink';
  const brushSize = 30;

  useLayoutEffect(() => {
    console.log('load canvas')
    setCanvas(initCanvas())
  }, [])

  useEffect(() => {
    console.log(winSize)
    if (canvas) {
      let scaleRatio = Math.min(winSize.width / canvas.getWidth(), (winSize.height - 250) / canvas.getHeight())
      canvas.setDimensions({ width: canvas.getWidth() * scaleRatio, height: canvas.getHeight() * scaleRatio })
      canvas.setZoom(canvas.getZoom() * scaleRatio)
    }    
    // setCanvas(icanvas)
  }, [canvas, winSize])

  const initCanvas = () => {
    console.log('init')
    return new fabric.Canvas('canvas', {
      // width: window.innerWidth - 100,
      // height: window.innerHeight - 250,
      width: 1920,
      height: 1080,
      zoom: 100,
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

  function toggleDrawingMode() {
    if (canvas.isDrawingMode) {
        canvas.isDrawingMode = false // drawing mode off
        canvas.freeDrawingCursor = 'default' // may be useless
    } else {
      canvas.isDrawingMode = true
      // console.log(canvas.freeDrawingBrush.color)
      // console.log(canvas.freeDrawingBrush.width)
      // set initial brush size
      canvas.freeDrawingBrush.color = brushColor
      canvas.freeDrawingBrush.width = brushSize
      // canvas.freeDrawingCursor = 'none' // invisible cursor
      canvas.freeDrawingCursor = `url(${ getDrawCursor(brushSize, brushColor, 1) }) ${ brushSize / 2 } ${ brushSize / 2 }, crosshair`
      canvas.on('mouse:down', event => {
        // set cursor down mode with high transparency
        canvas.freeDrawingCursor = `url(${ getDrawCursor(brushSize, brushColor, 0.2) }) ${ brushSize / 2 } ${ brushSize / 2 }, crosshair`
      })
      canvas.on('mouse:up', event => {
        // set cursor up mode with high opacity
        canvas.freeDrawingCursor = `url(${ getDrawCursor(brushSize, brushColor, 0.8) }) ${ brushSize / 2 } ${ brushSize / 2 }, crosshair`
      })
    }
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
            toggleDrawingMode()
          }}
        >
          Drawing Mode
        </button>
        <span>
          {winSize.width}px / {winSize.height}px
        </span>
        <button onClick={()=>{
          console.log(canvas.getZoom())
          canvas.setZoom(canvas.getZoom() / 1.1)
          canvas.setDimensions({ width: canvas.getWidth() / 1.1, height: canvas.getHeight() / 1.1 })
        }}> -</button>
        <button onClick={()=>{
          console.log(canvas.getZoom())
          canvas.setZoom(canvas.getZoom() * 1.1)
          canvas.setDimensions({ width: canvas.getWidth() * 1.1, height: canvas.getHeight() * 1.1 })
        }}>+</button>
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

      </div>
      <div className="canvas-container" style={{display: 'flex', alignItems: "center", justifyContent: 'center',
        marginLeft: '50px', marginRight: '50px', marginBottom: '10px', marginTop: 0}}>
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