import React from 'react'
import './style.css'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import { Paper } from '@mui/material'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit'
import DownloadIcon from '@mui/icons-material/Download'
import ImageIcon from '@mui/icons-material/Image'
import DeleteIcon from '@mui/icons-material/Delete'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import HelpIcon from '@mui/icons-material/Help'
import BugReportIcon from '@mui/icons-material/BugReport'
import HistoryIcon from '@mui/icons-material/History'
import UndoIcon from '@mui/icons-material/Undo'
import RedoIcon from '@mui/icons-material/Redo'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import CheckIcon from '@mui/icons-material/Check'

const pages = ['Products', 'Pricing', 'Blog']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const Ribbon = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [anchorElMore, setAnchorElMore] = React.useState(null)
  const [anchorElZoom, setAnchorElZoom] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleOpenMoreMenu = (event) => {
    setAnchorElMore(event.currentTarget)
  }
  const handleOpenZoomMenu = (event) => {
    setAnchorElZoom(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const handleCloseMoreMenu = () => {
    setAnchorElMore(null)
  }
  const handleCloseZoomMenu = () => {
    setAnchorElZoom(null)
  }

  return (
    <>
      <Box position="relative" className="ribbon" sx={{ flexGrow: 1, width: '100%' }}>
        <AppBar position="static" className="header-bar" sx={{ bgcolor: '#888888' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Logo Button */}
              <Box sx={{ flexGrow: 0 }}>
                <div className="jam-bar-button" style={{ 'user-select': 'none' }} role="button" href="#">
                  <div className="jam-icon jam-bar-logo"></div>
                </div>
              </Box>

              {/* Rename Button */}
              <Box sx={{ flexGrow: 0, marginRight: 3 }}>
                <div className="jam-bar-rename-button" role="button" style={{ 'user-select': 'none' }} tabIndex="0" aria-label="이름 변경">
                  제목 없는 Jam
                </div>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 1 }}></Box>

              <Box sx={{ flexGrow: 1 }}>
                <div id="jam-bar-center-menu" className="jam-bar-menu jam-bar-center-menu">
                  <div id="jam-collapsed-presence-bar" className="jam-collapsed-presence-bar" data-total-frames="1" data-active-frame-index="0" tabIndex="0" style={{ 'user-select': 'none' }}>
                    <div
                      className="prev-button jam-flatbutton-icon jam-flatbutton-disabled jam-flatbutton"
                      data-jamtooltip="이전 프레임"
                      data-tooltip="이전 프레임"
                      aria-label="이전 프레임"
                      data-tooltip-className="jam-tooltip"
                      role="button"
                      aria-disabled="true"
                      style={{ 'user-select': 'none' }}
                      id=":8"
                    >
                      <div className="jam-flatbutton-overlay" style={{ 'border-radius': '50%', 'user-select': 'none' }}></div>
                      <div className="jam-flatbutton-content" style={{ 'user-select': 'none' }}>
                        <div className="jam-icon jam-icon-arrow-left-black" style={{ 'user-select': 'none' }}></div>
                      </div>
                    </div>
                    <div
                      className="expand-button jam-flatbutton"
                      data-jamtooltip="프레임 바 펼치기"
                      data-tooltip="프레임 바 펼치기"
                      aria-label="프레임 바 펼치기"
                      data-tooltip-className="jam-tooltip"
                      role="button"
                      style={{ 'user-select': 'none' }}
                      id=":9"
                    >
                      <div className="jam-flatbutton-overlay" style={{ 'border-radius': '4px', 'user-select': 'none' }}></div>
                      <div className="jam-flatbutton-content" style={{ 'user-select': 'none' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="36" viewBox="0 0 46 36" style={{ 'user-select': 'none' }}>
                          <g fill="none" style={{ 'user-select': 'none' }}>
                            <rect width="38" height="22" x="1" y="7" stroke="#3C4043" strokeWidth="2" style={{ 'user-select': 'none' }}></rect>
                            <path fill="#5F6368" d="M8,4 L6,4 L6,0 L46,0 L46,24 L42,24 L42,22 L44,22 L44,2 L8,2 L8,4 Z" style={{ 'user-select': 'none' }}></path>
                            <polygon fill="#80868B" points="26 33 23 36 20 33" style={{ 'user-select': 'none' }}></polygon>
                          </g>
                        </svg>
                        {/* TODO: text useState */}
                        {/* <div className="text" style={{'user-select': 'none'}}>1 / 1</div> */}
                      </div>
                    </div>
                    <div
                      className="next-button jam-flatbutton-icon jam-flatbutton"
                      data-jamtooltip="다음 프레임"
                      data-tooltip="다음 프레임"
                      aria-label="다음 프레임"
                      data-tooltip-className="jam-tooltip"
                      role="button"
                      style={{ 'user-select': 'none' }}
                      id=":a"
                      aria-disabled="false"
                    >
                      <div className="jam-flatbutton-overlay" style={{ 'border-radius': '50%', 'user-select': 'none' }}></div>
                      <div className="jam-flatbutton-content" style={{ 'user-select': 'none' }}>
                        <div className="jam-icon jam-icon-arrow-right-black" style={{ 'user-select': 'none' }}></div>
                      </div>
                    </div>
                    <div
                      className="create-button jam-flatbutton-icon jam-flatbutton"
                      data-jamtooltip="프레임 만들기"
                      data-tooltip="프레임 만들기"
                      aria-label="프레임 만들기"
                      data-tooltip-className="jam-tooltip"
                      role="button"
                      style={{ 'user-select': 'none', display: 'none' }}
                      id=":b"
                      aria-disabled="false"
                      aria-hidden="true"
                    >
                      <div className="jam-flatbutton-overlay" style={{ 'border-radius': '50%', 'user-select': 'none' }}></div>
                      <div className="jam-flatbutton-content" style={{ 'user-select': 'none' }}>
                        <div className="jam-icon jam-icon-arrow-right-black" style={{ 'user-select': 'none' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>

              <Box sx={{ flexGrow: 1 }}></Box>

              <Box sx={{ flexGrow: 0 }}>
                <Button variant="info"> Presentation</Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="hello">
                  <IconButton onClick={handleOpenMoreMenu} sx={{ p: 0, width: 45, height: 45 }}>
                    <MoreVertIcon sx={{ fontSize: '2.5rem' }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="more-menu"
                  anchorEl={anchorElMore}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElMore)}
                  onClose={handleCloseMoreMenu}
                >
                  <Paper sx={{ width: 320, maxWidth: '100%' }}>
                    <MenuList>
                      <MenuItem>
                        <ListItemIcon>
                          <EditIcon fontSize="medium" />
                        </ListItemIcon>
                        <ListItemText>Rename</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                          ⌘ ER
                        </Typography>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <DownloadIcon fontSize="medium" />
                        </ListItemIcon>
                        <ListItemText>Donwload as PDF</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                          ⌘ PDF
                        </Typography>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <ImageIcon fontSize="medium" />
                        </ListItemIcon>
                        <ListItemText>Save Frame as Image</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                          ⌘ IM
                        </Typography>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <DeleteIcon fontSize="medium" />
                        </ListItemIcon>
                        <ListItemText>Delete</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                          ⌘ Del
                        </Typography>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <ContentCopyIcon fontSize="medium" />
                        </ListItemIcon>
                        <ListItemText>Make a Copy</ListItemText>
                      </MenuItem>
                      <Divider />
                      <MenuItem>
                        <ListItemIcon>
                          <HelpIcon fontSize="medium" />
                        </ListItemIcon>
                        <ListItemText>Show Help</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                          ⌘ F1
                        </Typography>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <BugReportIcon fontSize="medium" />
                        </ListItemIcon>
                        <ListItemText>Send Report</ListItemText>
                      </MenuItem>
                      <Divider />
                      <MenuItem>
                        <ListItemIcon>
                          <HistoryIcon fontSize="medium" />
                        </ListItemIcon>
                        <ListItemText>Show Version History</ListItemText>
                      </MenuItem>
                    </MenuList>
                  </Paper>
                </Menu>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Button variant="primary">Share With</Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {/* Toolbar */}
        <AppBar position="static" sx={{ bgcolor: '#AAAAAA' }}>
          <Toolbar sx={{ minHeight: 20 }} variant="dense">
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton>
                <UndoIcon fontSize="large" />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton>
                <RedoIcon fontSize="large" />
              </IconButton>
            </Box>

            <Divider orientation="vertical" flexItem sx={{ mx: 1, border: '1px solid' }} />

            <Box sx={{ flexGrow: 0 }}>
              <IconButton>
                <ZoomInIcon fontSize="large" />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="+ / -">
                <IconButton onClick={handleOpenZoomMenu} sx={{ p: 0, width: 45, height: 45 }}>
                  <ArrowDropDownIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Menu sx={{ mt: '10px' }} id="more-menu" anchorEl={anchorElZoom} keepMounted open={Boolean(anchorElZoom)} onClose={handleCloseZoomMenu}>
                <Paper sx={{ width: 240, maxWidth: '100%' }}>
                  <MenuList>
                    <MenuItem>
                      <ListItemIcon>
                        <CheckIcon fontSize="medium" />
                      </ListItemIcon>
                      <ListItemText>Fit (variable %)</ListItemText>
                      <Typography variant="body2" color="text.secondary">
                        Ctrl+Alt+ [
                      </Typography>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>{}</ListItemIcon>
                      <ListItemText>25%</ListItemText>
                      <Typography variant="body2" color="text.secondary">
                        Ctrl+Alt+1
                      </Typography>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>{}</ListItemIcon>
                      <ListItemText>50%</ListItemText>
                      <Typography variant="body2" color="text.secondary">
                        Ctrl+Alt+2
                      </Typography>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>{}</ListItemIcon>
                      <ListItemText>100%</ListItemText>
                      <Typography variant="body2" color="text.secondary">
                        Ctrl+Alt+3
                      </Typography>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>{}</ListItemIcon>
                      <ListItemText>200%</ListItemText>
                      <Typography variant="body2" color="text.secondary">
                        Ctrl+Alt+4
                      </Typography>
                    </MenuItem>
                    <Divider> zz</Divider>
                    <MenuItem>
                      <ListItemIcon>{}</ListItemIcon>
                      <ListItemText>Zoom In</ListItemText>
                      <Typography variant="body2" color="text.secondary">
                        Ctrl+Alt + +
                      </Typography>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>{}</ListItemIcon>
                      <ListItemText>Zoom Out</ListItemText>
                      <Typography variant="body2" color="text.secondary">
                        Ctrl+Alt + -
                      </Typography>
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Menu>
            </Box>

            <Divider orientation="vertical" flexItem sx={{ mx: 1, border: '1px solid' }} />

            <Box sx={{ flexGrow: 0 }}>
              <Button variant="primary">
                {' '}
                <Typography>Set Background</Typography>{' '}
              </Button>
            </Box>

            <Divider orientation="vertical" flexItem sx={{ mx: 1, border: '1px solid' }} />

            <Box sx={{ flexGrow: 0 }}>
              <Button variant="primary">
                {' '}
                <Typography>Remove Frame</Typography>{' '}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Ribbon
