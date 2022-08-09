import './Navbar.css';
import { Container, NavDropdown, Dropdown, NavItem, NavLink } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import soloimage from "../../images/solo.svg";
import searchimage from "../../images/search.svg";
import plusimage from "../../images/plus.svg";
import girlimage from "../../images/girl.svg";
import bellimage from "../../images/bell.svg";
import downimage from "../../images/drop-down.svg";
function Navigation() {
    return (
        <div id="navigation">
            <Navbar expand="lg">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Container className=" justify-content-between">
                        <div className="">
                            <a className="Nav.Bar" href="#">
                                <img
                                    src={soloimage}
                                    className="solo-icon"
                                />
                            </a>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <form className="d-flex align-items-center" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    aria-label="Search"
                                />
                                <div className="search-icon position-relative">
                                    <img src={searchimage} alt="image1" className="img1"/>
                                </div>
                            </form>
                            <div>
                                <ul className="navbar-nav ms-md-auto mt-2 flex-row align-items-center">
                                    <li className="Nav.Item rounded">
                                        <a className="Nav.Link active" aria-current="page" href="https://sparkplustech.com/#services"
                                        > <img src={plusimage} alt="image1" className="image1" /></a>
                                    </li>
                                    <li className="Nav.Item rounded">
                                        <a className="Nav.Link" href="https://sparkplustech.com/#clients1"
                                        ><img src={girlimage} alt="image1" className="image2" /></a>
                                    </li>
                                    <li className="Nav.Item rounded">
                                        <a className="Nav.Link" href="https://sparkplustech.com/#products1"
                                        ><img src={bellimage} alt="image1" className="image3" /></a>
                                    </li>
                                    <li className="Nav.Item rounded">
                                        <Dropdown as={NavItem} className='dropdown'>
                                            <Dropdown.Toggle as={NavLink}>
                                            <img src={downimage} alt="image1" className="image4" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                            <div className='dropdown-content'>
                                                <a href='#'>
                                                <NavDropdown.Item href="https://sparkplustech.com/" className='sparkhome'>
                                                   Spark Home</NavDropdown.Item>
                                                <hr/>
                                                <NavDropdown.Item href="https://sparkplustech.com/blockchain.html" className='abouthome'>
                                                   About Blockchain
                                                </NavDropdown.Item>
                                                <hr/>
                                                <NavDropdown.Item href="https://sparkplustech.com/career/career.html" className='careerhome'>
                                                   Career</NavDropdown.Item>
                                                <hr/>
                                                <NavDropdown.Item href="https://www.linkedin.com/company/sparkplustech/mycompany/" className='LinkedInhome'>
                                                    LinkedIn Profile
                                                </NavDropdown.Item>
                                                <hr/>
                                                <NavDropdown.Item href="https://twitter.com/sparkplustech" className='twitterhome'>
                                                    Twitter Profile
                                                </NavDropdown.Item></a>
                                            </div>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </nav>
            </Navbar>

        </div >
    );
};
export default Navigation;