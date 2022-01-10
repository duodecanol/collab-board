
class Failed extends React.Component
{

  constructor(props) {
    super(props);
  }

  render() {
    return (
<>
<Navbar bg="light" expand="lg" className='ribbon' id='ribbon' >
  <Container fluid>
    {/* Logo Button */}
    <div className='jam-bar-button' style={{'user-select': 'none'}} role="button" href="#">
      <div className='jam-icon jam-bar-logo'></div>
    </div>
    {/* Rename Button */}
    <div class="jam-bar-rename-button" role="button" style={{'user-select': 'none'}} tabindex="0" aria-label="이름 변경">
      제목 없는 Jam
    </div>
    
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
          <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
<div id="jam-bar-center-menu" class="jam-bar-menu jam-bar-center-menu">
	<div id="jam-collapsed-presence-bar" class="jam-collapsed-presence-bar" data-total-frames="1" data-active-frame-index="0" tabindex="0" style={{'user-select': 'none'}}>
		<div class="prev-button jam-flatbutton-icon jam-flatbutton-disabled jam-flatbutton" data-jamtooltip="이전 프레임" data-tooltip="이전 프레임" aria-label="이전 프레임" data-tooltip-class="jam-tooltip" role="button" aria-disabled="true" style={{'user-select': 'none'}} id=":8">
			<div class="jam-flatbutton-overlay" style={{'border-radius': '50%', 'user-select': 'none'}}></div>
			<div class="jam-flatbutton-content" style={{'user-select': 'none'}}>
				<div class="jam-icon jam-icon-arrow-left-black" style={{'user-select': 'none'}}></div>
			</div>
		</div>
		<div class="expand-button jam-flatbutton" data-jamtooltip="프레임 바 펼치기" data-tooltip="프레임 바 펼치기" aria-label="프레임 바 펼치기" data-tooltip-class="jam-tooltip" role="button" style={{'user-select': 'none'}} id=":9">
			<div class="jam-flatbutton-overlay" style={{'border-radius': '4px', 'user-select': 'none'}}></div>
			<div class="jam-flatbutton-content" style={{'user-select': 'none'}}>
				<svg xmlns="http://www.w3.org/2000/svg" width="46" height="36" viewBox="0 0 46 36" style={{'user-select': 'none'}}>
					<g fill="none" style={{'user-select': 'none'}}>
						<rect width="38" height="22" x="1" y="7" stroke="#3C4043" stroke-width="2" style={{'user-select': 'none'}}></rect>
						<path fill="#5F6368" d="M8,4 L6,4 L6,0 L46,0 L46,24 L42,24 L42,22 L44,22 L44,2 L8,2 L8,4 Z" style={{'user-select': 'none'}}></path>
						<polygon fill="#80868B" points="26 33 23 36 20 33" style={{'user-select': 'none'}}></polygon>
					</g>
				</svg>
        {/* TODO: text useState */}
				<div class="text" style={{'user-select': 'none'}}>1 / 1</div>
			</div>
		</div>
		<div class="next-button jam-flatbutton-icon jam-flatbutton" data-jamtooltip="다음 프레임" data-tooltip="다음 프레임" aria-label="다음 프레임" data-tooltip-class="jam-tooltip" role="button" style={{'user-select': 'none'}} id=":a" aria-disabled="false">
			<div class="jam-flatbutton-overlay" style={{'border-radius': '50%', 'user-select': 'none'}}></div>
			<div class="jam-flatbutton-content" style={{'user-select': 'none'}}>
				<div class="jam-icon jam-icon-arrow-right-black" style={{'user-select': 'none'}}></div>
			</div>
		</div>
		<div class="create-button jam-flatbutton-icon jam-flatbutton" data-jamtooltip="프레임 만들기" data-tooltip="프레임 만들기" aria-label="프레임 만들기" data-tooltip-class="jam-tooltip" role="button" style={{'user-select': 'none', 'display': 'none'}} id=":b" aria-disabled="false" aria-hidden="true">
			<div class="jam-flatbutton-overlay" style={{'border-radius': '50%', 'user-select': 'none'}}></div>
			<div class="jam-flatbutton-content" style={{'user-select': 'none'}}>
				<div class="jam-icon jam-icon-arrow-right-black" style={{'user-select': 'none'}}></div>
			</div>
		</div>
	</div>
</div>

      <Nav className='d-flex threedot-dropdown-menu'>
        <NavDropdown alignRight className='threedot-dropdown-menu'>
          <NavDropdown.Item href="">Rename</NavDropdown.Item>
          <NavDropdown.Item href="">Donwload as PDF</NavDropdown.Item>
          <NavDropdown.Item href="">Save Frame as Image</NavDropdown.Item>
          <NavDropdown.Item href="">Delete</NavDropdown.Item>
          <NavDropdown.Item href="">Make a Copy</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Show Help</NavDropdown.Item>
          <NavDropdown.Item href="">Send Report</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Show Version History</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Button variant='primary'>{' '}
        Share With
      </Button>

      <Button variant='info'>{' '}
        My Account
      </Button>
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
    </Navbar.Collapse>
  </Container>
</Navbar>

</>
    )
  }
}