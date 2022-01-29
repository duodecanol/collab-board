import React, { useState, useLayoutEffect, useEffect, useContext } from 'react'
import { fabric } from 'fabric'
import { useSelector, useDispatch } from 'react-redux'
import { setCanvas } from '../../features/canvas/canvasSlice'
import { pushUndo, popUndo } from '../../features/undo/undoSlice'
import { pushRedo, popRedo } from '../../features/redo/redoSlice'
import { TOOLS } from '../../helpers/toolsEnum'

const FabricTest = () => {
  // const canvas = useSelector((state) => state.canvas.value)
  const [canvas, setCanvas] = useState(null)
  const undo = useSelector((state) => state.undo.value)
  const redo = useSelector((state) => state.redo.value)
  const colorPicked = useSelector((state) => state.colorPicked.value)
  const brushSize = useSelector((state) => state.brushSize.value)
  const eraserSize = useSelector((state) => state.eraserSize.value)
  const currentTool = useSelector((state) => state.currentTool.value)
  const penMode = useSelector((state) => state.penMode.value)
  const shapeKind = useSelector((state) => state.shapeKind.value)
  // const { imgURL, setImgURL } = useContext(MainContext)
  const [imgURL, setImgURL] = useState('')

  const dispatch = useDispatch()

  const [zoom, setZoom] = useState() // object{zoom double, fixed boolean}
  const [operation, setOperation] = useState(null) // object{zoom double, fixed boolean}
  const winSize = useWindowSize()
  const brushColor = 'hotpink'

  useLayoutEffect(() => {
    console.log('load canvas')
    setCanvas(initCanvas())
  }, [])

  useEffect(() => {
    console.log('winsize', JSON.stringify(winSize))
    //FIXME: Browser dimension y가 더 클때 x margin 제대로 반영되어야함
    if (canvas) {
      console.log('canvasSize', `width: ${canvas.getWidth()}, height: ${canvas.getHeight()}`)
      let scaleRatio = Math.min(winSize.width / canvas.getWidth(), (winSize.height - 200) / canvas.getHeight())
      canvas.setDimensions({ width: canvas.getWidth() * scaleRatio, height: canvas.getHeight() * scaleRatio })
      canvas.setZoom(canvas.getZoom() * scaleRatio)
      setZoom(canvas.getZoom())
    }
    // setCanvas(icanvas)
  }, [canvas, winSize])

  const initCanvas = () => {
    console.log('init')
    let canvas = new fabric.Canvas('canvas', {
      // width: window.innerWidth - 100,
      // height: window.innerHeight - 250,
      width: 1920,
      height: 1080,
      zoom: 100,
      backgroundColor: 'pink',
      defaultCursor: 'pointer',
    })

    canvas.on('path:created', (event) => {
      console.log(event)
    })
    canvas.on('object:modified', (event) => {
      console.log(event)
    })
    return canvas
  }

  useEffect(() => {
    if (currentTool && canvas) {
      switch (currentTool) {
        case TOOLS.FREE_DRAWING:
          if (!canvas) return
          canvas.isDrawingMode = true
          canvas.freeDrawingBrush.color = colorPicked
          canvas.freeDrawingBrush.width = brushSize
          canvas.freeDrawingCursor = `url(${getDrawCursor(brushSize, colorPicked, 1)}) ${brushSize / 2} ${brushSize / 2}, crosshair`
          canvas.on('mouse:down', (event) => {
            canvas.freeDrawingCursor = `url(${getDrawCursor(brushSize, colorPicked, 0.2)}) ${brushSize / 2} ${brushSize / 2}, crosshair`
          })
          canvas.on('mouse:up', (event) => {
            // set cursor up mode with high opacity
            canvas.freeDrawingCursor = `url(${getDrawCursor(brushSize, colorPicked, 0.8)}) ${brushSize / 2} ${brushSize / 2}, crosshair`
            // console.log(event)
            // console.log(event.e)
            event.currentTarget.selectable = false // static으로 만든다
          })

          break
        case TOOLS.ERASER:
          break
        case TOOLS.SELECT:
          canvas.isDrawingMode = false
          break
        case TOOLS.STICKY_NOTE:
          break
        case TOOLS.SHAPES_DRAWING:
          break
        case TOOLS.IMAGE:
          break
        case TOOLS.TEXTBOX:
          break
        case TOOLS.LASER:
          break
        default:
          canvas.isDrawingMode = false
      }
    }
    return () => {
      setCanvas(canvas)
    }
  }, [currentTool, colorPicked, brushSize])

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
      setImgURL('') // reset img URL
    })
  }

  function getDrawCursor(brushSize, brushColor, opacity) {
    const circle = `
      <svg
        height="${brushSize}"
        viewBox="0 0 ${brushSize * 2} ${brushSize * 2}"
        width="${brushSize}"
        xmlns="http://www.w3.org/2000/svg" version="1.1"
      >
        <circle
          onmouse="mouse_move(e)"
          opacity="${opacity}"
          fill="${brushColor}"
          stroke="rgba(134, 136, 134, 0.8)"
          stroke-width="2"
          cx="50%"
          cy="50%"
          r="${brushSize}"
        />
      </svg>
    `

    return `data:image/svg+xml;base64,${window.btoa(circle)}`
  }

  function toggleDrawingMode() {
    if (canvas.isDrawingMode) {
      canvas.isDrawingMode = false // drawing mode off
      canvas.freeDrawingCursor = 'default' // may be useless
      // revoke event listener
      // https://stackoverflow.com/questions/18737058/how-to-remove-event-listener-from-fabricjs-canvas
      canvas.off('mouse:down')
      canvas.off('mouse:up')
    } else {
      canvas.isDrawingMode = true
      // console.log(canvas.freeDrawingBrush.color)
      // console.log(canvas.freeDrawingBrush.width)
      // set initial brush size
      canvas.freeDrawingBrush.color = brushColor
      canvas.freeDrawingBrush.width = brushSize
      // canvas.freeDrawingCursor = 'none' // invisible cursor
      canvas.freeDrawingCursor = `url(${getDrawCursor(brushSize, brushColor, 1)}) ${brushSize / 2} ${brushSize / 2}, crosshair`
      canvas.on('mouse:down', (event) => {
        // set cursor down mode with high transparency
        canvas.freeDrawingCursor = `url(${getDrawCursor(brushSize, brushColor, 0.2)}) ${brushSize / 2} ${brushSize / 2}, crosshair`
      })
      canvas.on('mouse:up', (event) => {
        // set cursor up mode with high opacity
        canvas.freeDrawingCursor = `url(${getDrawCursor(brushSize, brushColor, 0.8)}) ${brushSize / 2} ${brushSize / 2}, crosshair`
        console.log(event)
        console.log(event.e)
        event.currentTarget.selectable = false // static으로 만든다
        // append operation to undo array
        dispatch(pushUndo(event.currentTarget))
      })
    }
  }

  return (
    <>
      <div className="button-set">
        <button
          id="undo"
          onClick={() => {
            // UNDO operation
            console.log('undo', undo)
            let object = undo[undo.length - 1]
            dispatch(popUndo())
            dispatch(pushRedo(object))
            canvas.remove(object)
          }}
          disabled={undo.length === 0}
        >
          Undo
        </button>
        <button
          id="redo"
          onClick={() => {
            // REDO operation
            console.log('redo', redo)
            let object = redo[redo.length - 1]
            dispatch(popRedo())
            dispatch(pushUndo(object))
            canvas.add(object)
          }}
          disabled={redo.length === 0}
        >
          Redo
        </button>
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
        <button
          onClick={() => {
            canvas.setZoom(canvas.getZoom() / 1.1)
            canvas.setDimensions({ width: canvas.getWidth() / 1.1, height: canvas.getHeight() / 1.1 })
            setZoom(canvas.getZoom())
          }}
        >
          [ - ]
        </button>
        <button
          onClick={() => {
            canvas.setZoom(canvas.getZoom() * 1.1)
            canvas.setDimensions({ width: canvas.getWidth() * 1.1, height: canvas.getHeight() * 1.1 })
            setZoom(canvas.getZoom())
          }}
        >
          [+]
        </button>
        <span>zoom: {(zoom * 100).toFixed(3)}</span>
        <form onSubmit={(e) => addImg(e, imgURL, canvas)}>
          <div>
            <input type="text" value={imgURL} onChange={(e) => setImgURL(e.target.value)} />
            <button type="submit">Add Image</button>
          </div>
        </form>
      </div>
      <div className="background">
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
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

export default FabricTest
