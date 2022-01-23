import { Box, Container, Toolbar, IconButton, ButtonGroup, Tooltip, Popover } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'

import './style.css'
import * as ToolBoxIcon from './Icons'


// Move to helpers later
Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'bgcol',
})(({ bgcol}) => ({
  '&:hover': { color: 'black' },
  backgroundColor: bgcol,
}))

const ToolBox = () => {
  const [penAnchorEl, setPenAnchorEl] = useState(null)
  const [shapeAnchorEl, setShapeAnchorEl] = useState(null)
  const [color, setColor] = useState('#333')
  const [bgColor, setBgColor] = useState('none')
  const [size, setSize] = useState(32)
  const [currentTool, setCurrentTool] = useState('pen')
  const [currentShape, setCurrentShape] = useState('circle')
  const [select, setSelect] = useState(2)

  const onToolSelect = (e) => {
    console.log(e.currentTarget.attributes['tool'].value)
    // setCurrentShape(null)
    setCurrentTool(e.currentTarget.attributes['tool'].value)
  }

  const onShapeSelect = (e) => {
    console.log(e.currentTarget.attributes['tool'].value)
    // setCurrentTool(null)
    setCurrentShape(e.currentTarget.attributes['tool'].value)
  }

  const handleSelect = (key) => {
    setSelect(key)
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
    let hexRgb = e.target.value.replace('#', '')
    let r = parseInt(hexRgb.slice(0, 2), 16),
      g = parseInt(hexRgb.slice(2, 4), 16),
      b = parseInt(hexRgb.slice(4, 6), 16)

    // console.log(r, g, b)
    if (r > 200 && g > 200 && b > 200) {
      if (r > 230 && g > 230 && b > 230) {
        setColor('#111111')
        setBgColor(e.target.value)
      } else {
        setColor('#eeeeee')
        setBgColor(e.target.value)
      }
    } else {
      setColor(e.target.value)
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

            <Tooltip title={currentTool.capitalize()} placement='right'>
              <StyledIconButton bgcol={select === 20 ? color : bgColor} aria-describedby={penPopoverId} variant="contained" 
                key={20} onClick={(e) => {handlePenClick(e); handleSelect(20)}} style={{ outline: select === 20 ? `2px solid ${color}` : '' }}
              >
              {currentTool === 'pen' && <ToolBoxIcon.PenIcon width={size} height={size} inner={select === 20 ? '#eeeeee' : color}/>}
              {currentTool === 'marker' && <ToolBoxIcon.MarkerIcon width={size} height={size} inner={select === 20 ? '#eeeeee' : color} />}
              {currentTool === 'highlighter' && <ToolBoxIcon.HighlighterIcon width={size} height={size} inner={select === 20 ? '#eeeeee' : color} />}
              {currentTool === 'brush' && <ToolBoxIcon.BrushIcon width={size} height={size} inner={select === 20 ? '#eeeeee' : color} />}
            </StyledIconButton>
            </Tooltip>

            <Tooltip title="Erase" placement="right">
              <StyledIconButton className="earser" key={1} onClick={() => handleSelect(1)} style={{ backgroundColor: select === 1 ? '#333' : 'transparent' }}>
                <ToolBoxIcon.EraserIcon width={size} height={size} inner={select === 1 ? '#eeeeee' : '#333'} />
              </StyledIconButton>
            </Tooltip>

            <Tooltip title="Select" placement="right">
              <StyledIconButton className="selectorButton" key={2} onClick={() => handleSelect(2)} style={{ backgroundColor: select === 2 ? '#333' : 'transparent' }}>
                <ToolBoxIcon.SelectorIcon width={size} height={size} inner={select === 2 ? '#eeeeee' : '#333'} />
              </StyledIconButton>
            </Tooltip>
            <Tooltip title="Sticky Note (Ctrl+Shift+P)" placement="right">
              <StyledIconButton className="stickyNoteButton" key={3} onClick={() => handleSelect(3)} style={{ backgroundColor: select === 3 ? '#333' : 'transparent' }}>
               <ToolBoxIcon.StickyNoteIcon width={size} height={size} inner={select === 3 ? '#eeeeee' : '#333'} />
              </StyledIconButton>
            </Tooltip>
            <Tooltip title={currentShape.capitalize()} placement="right">
              <StyledIconButton bgcol={bgColor} aria-describedby={shapesPopoverId} variant="contained"
                key={12} onClick={(e) => {handleShapeClick(e); handleSelect(12)}} style={{ outline: select === 12 ? `2px solid ${color}` : '' }}
              >
              {currentShape === 'circle' &&  <ToolBoxIcon.CircleIcon width={size} height={size} inner={'#333'} />}
              {currentShape === 'square' && <ToolBoxIcon.SquareIcon width={size} height={size} inner={'#333'} />}
              {currentShape === 'triangle' && <ToolBoxIcon.TriangleIcon width={size} height={size} inner={'#333'} />}
              {currentShape === 'diamond' && <ToolBoxIcon.RhombusIcon width={size} height={size} inner={'#333'} />}
              {currentShape === 'rounded rectangle' && <ToolBoxIcon.RoundedRectangleIcon width={size} height={size} inner={'#333'} />}
              {currentShape === 'half circle' && <ToolBoxIcon.HalfCircleIcon width={size} height={size} inner={'#333'} />}
              {currentShape === 'bar' && <ToolBoxIcon.BarIcon width={size} height={size} inner={'#333'} />}
              {currentShape === 'arrow' && <ToolBoxIcon.ArrowIcon width={size} height={size} inner={'#333'} />}
            </StyledIconButton>
            </Tooltip>

            <Tooltip title="Add image" placement="right">
              <StyledIconButton className="imageButton" key={4} onClick={() => handleSelect(4)} style={{ backgroundColor: select === 4 ? '#333' : 'transparent' }}>
                <ToolBoxIcon.ImageIcon width={size} height={size} inner={select === 4 ? '#eeeeee' : '#333'} />
              </StyledIconButton>
            </Tooltip>
            <Tooltip title="Text Box" placement="right">
              <StyledIconButton className="textBoxButton" key={5} onClick={() => handleSelect(5)} style={{ backgroundColor: select === 5 ? '#333' : 'transparent' }}>
                <ToolBoxIcon.TextBoxIcon width={size} height={size} inner={select === 5 ? '#eeeeee' : '#333'} />
              </StyledIconButton>
            </Tooltip>
            <Tooltip title="Laser" placement="right">
              <StyledIconButton className="laserButton" key={6} onClick={() => handleSelect(6)} style={{ backgroundColor: select === 6 ? 'rgb(219,68,55)' : '#eeeeee' }}>
                <ToolBoxIcon.LaserIcon width={size} height={size} inner={select === 6 ? 'white' : '#333'} />
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
                    <StyledIconButton bgcol={bgColor} onClick={onToolSelect} tool="pen">
                      <ToolBoxIcon.PenIcon width={size} height={size} inner={color} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Marker" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onToolSelect} tool="marker">
                      <ToolBoxIcon.MarkerIcon width={size} height={size} inner={color} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Highligter" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onToolSelect} tool="highlighter">
                      <ToolBoxIcon.HighlighterIcon width={size} height={size} inner={color} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Brush" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onToolSelect} tool="brush">
                      <ToolBoxIcon.BrushIcon width={size} height={size} inner={color} />
                    </StyledIconButton>
                  </Tooltip>
                </Box>
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
                  <Tooltip title="Color Picker" placement="bottom">
                    <div style={{width:'30px', height:'30px', borderRadius:'20px', overflow:'hidden', display:'inline-block', verticalAlign:'bottom'}}>
                      <input
                        type="color" value={color} onChange={(e) => { onColorChange(e) }}
                        style={{border:0, padding:0, width: '150%', height:'150%', cursor: 'pointer', transform: 'translate(-25%, -25%)'}}
                        />
                    </div>
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
                    <StyledIconButton bgcol={bgColor} onClick={onShapeSelect} tool="circle">
                      <ToolBoxIcon.CircleIcon width={size} height={size} inner={'#333'} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Square" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onShapeSelect} tool="square">
                      <ToolBoxIcon.SquareIcon width={size} height={size} inner={'#333'} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Triangle" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onShapeSelect} tool="triangle">
                      <ToolBoxIcon.TriangleIcon width={size} height={size} inner={'#333'} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Diamond" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onShapeSelect} tool="diamond">
                      <ToolBoxIcon.RhombusIcon width={size} height={size} inner={'#333'} />
                    </StyledIconButton>
                  </Tooltip>
                </Box>
                <Box sx={{ flexGrow: 1, py: '4px' }} id="shapes-table">
                  <Tooltip title="Rounded Rectangle" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onShapeSelect} tool="rounded rectangle">
                      <ToolBoxIcon.RoundedRectangleIcon width={size} height={size} inner={'#333'} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Half circle" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onShapeSelect} tool="half circle">
                      <ToolBoxIcon.HalfCircleIcon width={size} height={size} inner={'#333'} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Bar" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onShapeSelect} tool="bar">
                      <ToolBoxIcon.BarIcon width={size} height={size} inner={'#333'} />
                    </StyledIconButton>
                  </Tooltip>
                  <Tooltip title="Arrow" placement="bottom">
                    <StyledIconButton bgcol={bgColor} onClick={onShapeSelect} tool="arrow">
                      <ToolBoxIcon.ArrowIcon width={size} height={size} inner={'#333'} />
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
