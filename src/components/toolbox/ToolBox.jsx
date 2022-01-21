import {
  Box,
  Container,
  Toolbar,
  IconButton,
  ButtonGroup,
  Tooltip,
  Popper,
  Popover,
  Button,
} from '@mui/material';
import React from 'react';

import UndoIcon from '@mui/icons-material/Undo';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import './style.css';

const ToolBox = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
        minHeight: '500px',
        zIndex: '10',
      }}>
      <Container fixed disableGutters>
        <Toolbar disableGutters>
          <ButtonGroup orientation="vertical">
            <Button type="text" sx={{ height: 24 }}>
              <label htmlFor=""></label>
            </Button>

            <IconButton
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              aria-activedescendant="palette-table">
              <UndoIcon fontSize="large" sx={{ color: '#777777' }} />
              <ArrowRightIcon disableGutters sx={{ position: 'absolute', right: '3px' }} />
            </IconButton>

            <Tooltip title="Erase" placement="right">
              <IconButton className="earser">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  style={{ 'user-select': 'none' }}>
                  <path fill="none" d="M24 0v24H0V0h24z" style={{ 'user-select': 'none' }}></path>
                  <path
                    d="M17.26 18l-2 2h6.7v-2h-4.7zm4.15-6.67L13.04 20H4.73l-2.15-2.14c-.78-.78-.78-2.03 0-2.82L13.62 3.58c.78-.77 2.06-.77 2.84 0l4.95 4.93c.79.78.79 2.04 0 2.82z"
                    style={{ 'user-select': 'none' }}></path>
                </svg>
              </IconButton>
            </Tooltip>

            <Tooltip title="Select" placement="right">
              <IconButton className="selectorButton" component="div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ 'user-select': 'none' }}>
                  <path fill="none" d="M24 0v24H0V0h24z" style={{ 'user-select': 'none' }}></path>
                  <polygon
                    points="12.926 12 17.5 20 15 21.5 10.405 13.595 6 18 6 2 19 12"
                    style={{ 'user-select': 'none' }}></polygon>
                </svg>
              </IconButton>
            </Tooltip>
            <Tooltip title="Sticky Note (Ctrl+Shift+P)" placement="right">
              <IconButton className="stickyNoteButton" component="div">
                <div class="jam-icon-base" style={{ 'user-select': 'none' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ 'user-select': 'none' }}>
                    <path
                      d="M20,16V4H4v16h12v-2c0-1.1,0.9-2,2-2H20z M4,2h16c1.1,0,2,0.9,2,2v13l-5,5H4c-1.1,0-2-0.9-2-2V4 C2,2.9,2.9,2,4,2z M7,8h10v2H7V8z M7,12h6v2H7V12z"
                      style={{ 'user-select': 'none' }}></path>
                  </svg>
                </div>
              </IconButton>
            </Tooltip>
            <Tooltip title="Circle" placement="right">
              <IconButton className="shapeButton" component="div">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" d="M24 0v24H0V0h24z"></path>
                  <path
                    stroke-width="1"
                    d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 Z"></path>
                </svg>
              </IconButton>
            </Tooltip>

            <Tooltip title="Add image" placement="right">
              <IconButton className="imageButton" component="div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  style={{ 'user-select': 'none' }}>
                  <path
                    d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
                    style={{ 'user-select': 'none' }}></path>
                  <path d="M0 0h24v24H0z" fill="none" style={{ 'user-select': 'none' }}></path>
                </svg>
              </IconButton>
            </Tooltip>
            <Tooltip title="Text Box" placement="right">
              <IconButton className="textBoxButton" component="div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  style={{ 'user-select': 'none' }}>
                  <path
                    style={{ 'stroke-width': '1', 'user-select': 'none' }}
                    d="M21,17 L23,17 L23,23 L17,23 L17,21 L7,21 L7,23 L1,23 L1,17 L3,17 L3,7 L1,7 L1,1 L7,1 L7,3 L17,3 L17,1 L23,1 L23,7 L21,7 L21,17 Z M21,19 L19,19 L19,21 L21,21 L21,19 Z M17,19 L17,17 L19,17 L19,7 L17,7 L17,5 L7,5 L7,7 L5,7 L5,17 L7,17 L7,19 L17,19 Z M21,5 L21,3 L19,3 L19,5 L21,5 Z M5,21 L5,19 L3,19 L3,21 L5,21 Z M3,5 L5,5 L5,3 L3,3 L3,5 Z M13,10 L13,16 L11,16 L11,10 L8,10 L8,8 L16,8 L16,10 L13,10 Z"
                    fill-rule="nonzero"></path>
                </svg>
              </IconButton>
            </Tooltip>
            <Tooltip title="Laser" placement="right">
              <IconButton className="laserButton" component="div">
                <div class="jam-icon-base" style={{ 'user-select': 'none' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ 'user-select': 'none' }}>
                    <path fill="none" d="M24 0v24H0V0h24z" style={{ 'user-select': 'none' }}></path>
                    <path
                      d="M8.98,13l-3.99,3c-1,0.88-1.13,2.12-1,3c0.14,0.99,0.92,2.22,2.01,2.68c1.57,0.67,3.09,0.22,4.04-0.76L18.98,13 c1.88-1.38,1-4-1-4h-5.96l7.44-4.39c0.44-0.32,0.62-0.79,0.6-1.24C20.01,2.67,19.46,2,18.6,2c-0.02,0-0.04,0-0.06,0 c-0.35,0.01-0.68,0.11-0.98,0.29L4.99,9c-0.8,0.46-1.05,1.24-1,2c0.06,1.03,0.75,2,2.01,2 M4.99,18.5c0-1.38,1.13-2.5,2.51-2.5 s2.51,1.12,2.51,2.5S8.88,21,7.5,21S4.99,19.88,4.99,18.5z"
                      style={{ 'user-select': 'none' }}></path>
                  </svg>
                </div>
              </IconButton>
            </Tooltip>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              className="toolbar-palette-table"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
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
                }}>
                <Box sx={{ flexGrow: 1, py: '4px' }} id="palette-table">
                  <Tooltip title="Pen" placement="bottom">
                    <IconButton className="pen" component="div">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24">
                        <path fill="none" d="M24 0v24H0V0h24z"></path>
                        <path d="M3 17.25V21h3.74l7.54-7.53-3.75-3.75L3 17.25zM18.37 3.3l2.34 2.33c.39.39.4 1.03.01 1.42l-5.37 5.36-3.76-3.76 2.53-2.53-.73-.73-5.66 5.66-1.4-1.4 6.37-6.36c.39-.39 1.04-.38 1.42.01l1.42 1.41 1.42-1.41c.38-.39 1.02-.39 1.41 0z"></path>
                      </svg>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Marker" placement="bottom">
                    <IconButton className="marker" component="div">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.7 9.49l4.29 4.3-6.54 6.54-.72-.72-1.43 1.43c-.79.79-2.07.79-2.86 0s-.79-2.08 0-2.86l1.43-1.43-.72-.72L9.7 9.49zm11.56-5.8L19.8 2.22c-.78-.78-2.05-.78-2.83 0l-6.21 6.21 4.29 4.3 6.21-6.21c.79-.78.79-2.05 0-2.83z"></path>
                      </svg>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Highligter" placement="bottom">
                    <IconButton className="highlighter" component="div">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.22 9.49l-5.91 6c-.77.8-.7 2.05.08 2.85L.77 22h5.68l.74-.75c.78.81 1.95.86 2.73.05l5.96-6.05-5.66-5.76zm12.46-4l-2.82-2.87c-.78-.8-2.07-.84-2.84-.04l-5.75 5.85 5.66 5.75 5.69-5.78c.77-.81.83-2.11.06-2.91z"></path>
                      </svg>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Brush" placement="bottom">
                    <IconButton className="brush" component="div">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path>
                      </svg>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Tooltip title="Black" placement="bottom">
                    <IconButton component="div" sx={{ padding: '6px' }}>
                      <div
                        className="color-picker-button color-swatch-black"
                        style={{ backgroundColor: '#3c4043' }}></div>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Blue" placement="bottom">
                    <IconButton component="div" sx={{ padding: '6px' }}>
                      <div
                        className="color-picker-button color-swatch-blue"
                        style={{ backgroundColor: '#19acc0' }}></div>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Green" placement="bottom">
                    <IconButton component="div" sx={{ padding: '6px' }}>
                      <div
                        className="color-picker-button color-swatch-green"
                        style={{ backgroundColor: '#699e3e' }}></div>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Tooltip title="White" placement="bottom">
                    <IconButton component="div" sx={{ padding: '6px' }}>
                      <div
                        className="color-picker-button color-swatch-white"
                        style={{ backgroundColor: 'white', border: '1px solid #dadce0' }}></div>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Yellow" placement="bottom">
                    <IconButton component="div" sx={{ padding: '6px' }}>
                      <div
                        className="color-picker-button color-swatch-yellow"
                        style={{ backgroundColor: '#f3b32a' }}></div>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Red" placement="bottom">
                    <IconButton component="div" sx={{ padding: '6px' }}>
                      <div
                        className="color-picker-button color-swatch-red"
                        style={{ backgroundColor: '#d9453c' }}></div>
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Popover>
          </ButtonGroup>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default ToolBox;
