import { Box, Container, Toolbar, IconButton, ButtonGroup, Tooltip, Popover } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'

import { useSelector, useDispatch } from 'react-redux'
// import { setCanvas } from '../../features/canvas/canvasSlice'
import { setColorPicked } from '../../features/colorPicked/colorPickedSlice'
import { setBrushSize } from '../../features/brushSize/brushSizeSlice'
import { setEraserSize } from '../../features/eraserSize/eraserSizeSlice'
import { setCurrentTool } from '../../features/currentTool/currentToolSlice'
import { setPenMode } from '../../features/penMode/penModeSlice'
import { setShapeKind } from '../../features/shapeKind/shapeKindSlice'

import { TOOLS } from '../../helpers/toolsEnum'

import './style.css'
import * as ToolBoxIcon from './Icons'

// Move to helpers later
Object.defineProperty(String.prototype, 'capitalize', {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
  },
  enumerable: false,
})

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'bgcol',
})(({ bgcol }) => ({
  '&:hover': { color: 'black' },
  backgroundColor: bgcol,
}))

const ToolBox = () => {
  // const canvas = useSelector((state) => state.canvas.value)
  const colorPicked = useSelector((state) => state.colorPicked.value)
  const brushSize = useSelector((state) => state.brushSize.value)
  const eraserSize = useSelector((state) => state.eraserSize.value)
  const currentTool = useSelector((state) => state.currentTool.value)
  const penMode = useSelector((state) => state.penMode.value)
  const shapeKind = useSelector((state) => state.shapeKind.value)

  const dispatch = useDispatch()

  const [penAnchorEl, setPenAnchorEl] = useState(null)
  const [shapeAnchorEl, setShapeAnchorEl] = useState(null)
  const [fgColor, setFgColor] = useState(colorPicked)
  const [bgColor, setBgColor] = useState('none')

  const ICONSIZE = 30

  const onPenModeSelect = (e) => {
    console.log(e.currentTarget.attributes['tool'].value)
    // setCurrentShape(null)
    dispatch(setPenMode(e.currentTarget.attributes['tool'].value))
  }

  const onShapeKindSelect = (e) => {
    console.log(e.currentTarget.attributes['tool'].value)
    // setCurrentTool(null)
    dispatch(setShapeKind(e.currentTarget.attributes['tool'].value))
  }

  const handleToolSelect = (key) => {
    dispatch(setCurrentTool(key))
  }

  const handlePenClick = (event) => {
    setPenAnchorEl(event.currentTarget)
  }

  const handlePenClose = () => {
    setPenAnchorEl(null)
  }

  const handleShapeClick = (e) => {
    setShapeAnchorEl(e.currentTarget)
  }

  const handleShapeClose = () => {
    setShapeAnchorEl(null)
  }

  const penOpen = Boolean(penAnchorEl)
  const shapeOpen = Boolean(shapeAnchorEl)
  const penPopoverId = penOpen ? 'simple-popover' : undefined
  const shapesPopoverId = shapeOpen ? 'shapes-popover' : undefined

  const onColorChange = (e) => {
    // console.log(e.target.value)
    if (e.target.value.indexOf('#') !== 0 && e.target.value.length !== 7) {
      throw Error('Not an Hex rgb. Must be "#0099FF" pattern')
    }
    dispatch(setColorPicked(e.target.value)) // set picked color
    let hexRgb = e.target.value.replace('#', '')
    let r = parseInt(hexRgb.slice(0, 2), 16),
      g = parseInt(hexRgb.slice(2, 4), 16),
      b = parseInt(hexRgb.slice(4, 6), 16)

    // console.log(r, g, b)
    if (r > 200 && g > 200 && b > 200) {
      if (r > 230 && g > 230 && b > 230) {
        setFgColor('#111111')
        setBgColor(e.target.value)
      } else {
        setFgColor('#eeeeee')
        setBgColor(e.target.value)
      }
    } else {
      setFgColor(e.target.value)
      setBgColor('#eeeeee')
    }
  }

  return (
    <Box
      sx={{
        display: 'block',
        position: 'fixed',
        left: '12px',
        top: '50%',
        WebkitTransform: 'translateY(-50%) translateY(54px)',
        MozTransform: 'translateY(-50%) translateY(54px)',
        MsTransform: 'translateY(-50%) translateY(54px)',
        OTransform: 'translateY(-50%) translateY(54px)',
        transform: 'translateY(-50%) translateY(54px)',
        backgroundColor: '#eeeeee',
        width: '54px',
        borderRadius: '24px',
        padding: '0px',
        border: '1px solid #dadce0',
        minHeight: '400px',
        zIndex: '10',
      }}
    >
      <Container fixed disableGutters>
        <Toolbar disableGutters>
          <ButtonGroup orientation="vertical">
            <Tooltip title={penMode && penMode.capitalize()} placement="right">
              <StyledIconButton
                bgcol={currentTool === TOOLS.FREE_DRAWING ? fgColor : bgColor}
                aria-describedby={penPopoverId}
                variant="contained"
                key={TOOLS.FREE_DRAWING}
                onClick={(e) => {
                  handlePenClick(e)
                  handleToolSelect(TOOLS.FREE_DRAWING)
                }}
                style={{ outline: currentTool === TOOLS.FREE_DRAWING ? `2px solid ${fgColor}` : '' }}
              >
                {/*FIXME: Hover 상태일 때 inner == fgColor  */}
                {penMode === 'pen' && <ToolBoxIcon.PenIcon width={ICONSIZE} height={ICONSIZE} inner={currentTool === TOOLS.FREE_DRAWING ? '#eeeeee' : fgColor} />}
                {penMode === 'marker' && <ToolBoxIcon.MarkerIcon width={ICONSIZE} height={ICONSIZE} inner={currentTool === TOOLS.FREE_DRAWING ? '#eeeeee' : fgColor} />}
                {penMode === 'highlighter' && <ToolBoxIcon.HighlighterIcon width={ICONSIZE} height={ICONSIZE} inner={currentTool === TOOLS.FREE_DRAWING ? '#eeeeee' : fgColor} />}
                {penMode === 'brush' && <ToolBoxIcon.BrushIcon width={ICONSIZE} height={ICONSIZE} inner={currentTool === TOOLS.FREE_DRAWING ? '#eeeeee' : fgColor} />}
              </StyledIconButton>
            </Tooltip>

            <Tooltip title="Erase" placement="right">
              <StyledIconButton className="earser" key={TOOLS.ERASER} onClick={() => handleToolSelect(TOOLS.ERASER)} style={{ backgroundColor: currentTool === TOOLS.ERASER ? '#333' : 'transparent' }}>
                <ToolBoxIcon.EraserIcon width={ICONSIZE} height={ICONSIZE} inner={currentTool === TOOLS.ERASER ? '#eeeeee' : '#333'} />
              </StyledIconButton>
            </Tooltip>
            <Tooltip title="Select" placement="right">
              <StyledIconButton
                className="selectorButton"
                key={TOOLS.SELECT}
                onClick={() => handleToolSelect(TOOLS.SELECT)}
                style={{ backgroundColor: currentTool === TOOLS.SELECT ? '#333' : 'transparent' }}
              >
                <ToolBoxIcon.SelectorIcon width={ICONSIZE} height={ICONSIZE} inner={currentTool === TOOLS.SELECT ? '#eeeeee' : '#333'} />
              </StyledIconButton>
            </Tooltip>
            <Tooltip title="Sticky Note (Ctrl+Shift+P)" placement="right">
              <StyledIconButton
                className="stickyNoteButton"
                key={TOOLS.STICKY_NOTE}
                onClick={() => handleToolSelect(TOOLS.STICKY_NOTE)}
                style={{ backgroundColor: currentTool === TOOLS.STICKY_NOTE ? '#333' : 'transparent' }}
              >
                <ToolBoxIcon.StickyNoteIcon width={ICONSIZE} height={ICONSIZE} inner={currentTool === TOOLS.STICKY_NOTE ? '#eeeeee' : '#333'} />
              </StyledIconButton>
            </Tooltip>
            <Tooltip title={shapeKind && shapeKind.capitalize()} placement="right">
              <StyledIconButton
                bgcol={bgColor}
                aria-describedby={shapesPopoverId}
                variant="contained"
                key={TOOLS.SHAPES_DRAWING}
                onClick={(e) => {
                  handleShapeClick(e)
                  handleToolSelect(TOOLS.SHAPES_DRAWING)
                }}
                style={{ outline: currentTool === TOOLS.SHAPES_DRAWING ? `2px solid ${fgColor}` : '' }}
              >
                {shapeKind === 'circle' && <ToolBoxIcon.CircleIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />}
                {shapeKind === 'square' && <ToolBoxIcon.SquareIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />}
                {shapeKind === 'triangle' && <ToolBoxIcon.TriangleIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />}
                {shapeKind === 'diamond' && <ToolBoxIcon.RhombusIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />}
                {shapeKind === 'rounded rectangle' && <ToolBoxIcon.RoundedRectangleIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />}
                {shapeKind === 'half circle' && <ToolBoxIcon.HalfCircleIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />}
                {shapeKind === 'bar' && <ToolBoxIcon.BarIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />}
                {shapeKind === 'arrow' && <ToolBoxIcon.ArrowIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />}
              </StyledIconButton>
            </Tooltip>

            <Tooltip title="Add image" placement="right">
              <StyledIconButton
                className="imageButton"
                key={TOOLS.IMAGE}
                onClick={() => handleToolSelect(TOOLS.IMAGE)}
                style={{ backgroundColor: currentTool === TOOLS.IMAGE ? '#333' : 'transparent' }}
              >
                <ToolBoxIcon.ImageIcon width={ICONSIZE} height={ICONSIZE} inner={currentTool === TOOLS.IMAGE ? '#eeeeee' : '#333'} />
              </StyledIconButton>
            </Tooltip>
            <Tooltip title="Text Box" placement="right">
              <StyledIconButton
                className="textBoxButton"
                key={TOOLS.TEXTBOX}
                onClick={() => handleToolSelect(TOOLS.TEXTBOX)}
                style={{ backgroundColor: currentTool === TOOLS.TEXTBOX ? '#333' : 'transparent' }}
              >
                <ToolBoxIcon.TextBoxIcon width={ICONSIZE} height={ICONSIZE} inner={currentTool === TOOLS.TEXTBOX ? '#eeeeee' : '#333'} />
              </StyledIconButton>
            </Tooltip>
            <Tooltip title="Laser" placement="right">
              <StyledIconButton
                className="laserButton"
                key={TOOLS.LASER}
                onClick={() => handleToolSelect(TOOLS.LASER)}
                style={{ backgroundColor: currentTool === TOOLS.LASER ? 'rgb(219,68,55)' : '#eeeeee' }}
              >
                <ToolBoxIcon.LaserIcon width={ICONSIZE} height={ICONSIZE} inner={currentTool === TOOLS.LASER ? 'white' : '#333'} />
              </StyledIconButton>
            </Tooltip>

            <Popover
              id={penPopoverId}
              open={penOpen}
              anchorEl={penAnchorEl}
              onClose={handlePenClose}
              className="toolbar-palette-table"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <Box
                className="toolbar-palette-table-body"
                sx={{
                  backgroundColor: '#eeeeee',
                  boxShadow: 8,
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  padding: '5px',
                  // borderRadius: 3,
                  // border: '1px solid #dadce0',
                }}
              >
                <Box sx={{ flexGrow: 1, py: '4px' }} id="palette-table">
                  <Tooltip title="Pen" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onPenModeSelect} tool="pen">
                      <ToolBoxIcon.PenIcon width={ICONSIZE} height={ICONSIZE} inner={fgColor} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Marker" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onPenModeSelect} tool="marker">
                      <ToolBoxIcon.MarkerIcon width={ICONSIZE} height={ICONSIZE} inner={fgColor} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Highligter" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onPenModeSelect} tool="highlighter">
                      <ToolBoxIcon.HighlighterIcon width={ICONSIZE} height={ICONSIZE} inner={fgColor} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Brush" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onPenModeSelect} tool="brush">
                      <ToolBoxIcon.BrushIcon width={ICONSIZE} height={ICONSIZE} inner={fgColor} />
                    </StyledIconButton>
                  </Tooltip>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                  }}
                >
                  <Box>
                    {
                      //#region COLOR SWATCHES
                    }
                    <Box sx={{ flexGrow: 1 }}>
                      <Tooltip title="Black" placement="bottom">
                        <IconButton component="div" sx={{ padding: '6px' }}>
                          <div className="color-picker-button color-swatch-black" style={{ backgroundColor: '#3c4043' }}></div>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Blue" placement="bottom">
                        <IconButton component="div" sx={{ padding: '6px' }}>
                          <div className="color-picker-button color-swatch-blue" style={{ backgroundColor: '#19acc0' }}></div>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Green" placement="bottom">
                        <IconButton component="div" sx={{ padding: '6px' }}>
                          <div className="color-picker-button color-swatch-green" style={{ backgroundColor: '#699e3e' }}></div>
                        </IconButton>
                      </Tooltip>
                    </Box>

                    <Box sx={{ flexGrow: 1 }}>
                      <Tooltip title="White" placement="bottom">
                        <IconButton component="div" sx={{ padding: '6px' }}>
                          <div className="color-picker-button color-swatch-white" style={{ backgroundColor: 'white', border: '1px solid #dadce0' }}></div>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Yellow" placement="bottom">
                        <IconButton component="div" sx={{ padding: '6px' }}>
                          <div className="color-picker-button color-swatch-yellow" style={{ backgroundColor: '#f3b32a' }}></div>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Red" placement="bottom">
                        <IconButton component="div" sx={{ padding: '6px' }}>
                          <div className="color-picker-button color-swatch-red" style={{ backgroundColor: '#d9453c' }}></div>
                        </IconButton>
                      </Tooltip>
                    </Box>
                    {
                      //#endregion
                    }
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Tooltip title="Color Picker" placement="bottom">
                      <div style={{ width: '30px', height: '30px', borderRadius: '20px', overflow: 'hidden', display: 'inline-block', verticalAlign: 'bottom' }}>
                        <input
                          type="color"
                          value={colorPicked}
                          onChange={(e) => {
                            onColorChange(e)
                          }}
                          style={{ border: 0, padding: 0, width: '150%', height: '150%', cursor: 'pointer', transform: 'translate(-25%, -25%)' }}
                        />
                      </div>
                    </Tooltip>
                    <Tooltip title="Size Slider" placement="bottom">
                      <input
                        type="range"
                        min="1"
                        max="100"
                        id="myRange"
                        value={brushSize}
                        onChange={(e) => {
                          dispatch(setBrushSize(e.target.value))
                          // console.log(e.target)
                        }}
                      />
                    </Tooltip>
                    <span>{brushSize} px</span>
                  </Box>
                </Box>
              </Box>
            </Popover>
            {/* Shapes Tool Palette */}
            <Popover
              id={shapesPopoverId}
              open={shapeOpen}
              anchorEl={shapeAnchorEl}
              onClose={handleShapeClose}
              className="toolbar-shapes-table"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <Box
                className="toolbar-shapes-table-body"
                sx={{
                  backgroundColor: '#eeeeee',
                  boxShadow: 8,
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  padding: '5px',
                  // borderRadius: 3,
                  // border: '1px solid #dadce0',
                }}
              >
                <Box sx={{ flexGrow: 1, py: '4px' }} id="shapes-table">
                  <Tooltip title="Circle" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onShapeKindSelect} tool="circle">
                      <ToolBoxIcon.CircleIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Square" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onShapeKindSelect} tool="square">
                      <ToolBoxIcon.SquareIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Triangle" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onShapeKindSelect} tool="triangle">
                      <ToolBoxIcon.TriangleIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Diamond" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onShapeKindSelect} tool="diamond">
                      <ToolBoxIcon.RhombusIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />
                    </StyledIconButton>
                  </Tooltip>
                </Box>
                <Box sx={{ flexGrow: 1, py: '4px' }} id="shapes-table">
                  <Tooltip title="Rounded Rectangle" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onShapeKindSelect} tool="rounded rectangle">
                      <ToolBoxIcon.RoundedRectangleIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Half circle" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onShapeKindSelect} tool="half circle">
                      <ToolBoxIcon.HalfCircleIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Bar" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onShapeKindSelect} tool="bar">
                      <ToolBoxIcon.BarIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Arrow" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onShapeKindSelect} tool="arrow">
                      <ToolBoxIcon.ArrowIcon width={ICONSIZE} height={ICONSIZE} inner={'#333'} />
                    </StyledIconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Popover>
          </ButtonGroup>
        </Toolbar>
      </Container>
    </Box>
  )
}

export default ToolBox
