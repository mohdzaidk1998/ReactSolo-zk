import React from 'react';
import "./Card.css";
import image1 from "../../images/image1.svg";
import image2 from "../../images/image2.svg";
import image3 from "../../images/logo.svg";
import image4 from "../../images/logo.svg";
import image5 from "../../images/logo.svg";
import image6 from "../../images/logo.svg";
import Custombtn from "../button/button.js";
import { Container, } from "react-bootstrap";
const Card = () => {
    return (
        <div className='cards'>
            <Container>
                <div className="full-screen">
                    <div className='rectangle1'>
                    <img src={image3} alt="image3" className="img3" />
                    <img src={image4} alt="image4" className="img4" />
                    <img src={image5} alt="image5" className="img5" />
                    <img src={image6} alt="image6" className="img6" />
                        <div className="rectangle2">
                            <div className="profile-dp">
                                <img src={image1} alt="image1" className="img1" />
                                <img src={image2} alt="image2" className="img2" />
                            </div>
                            <div className="heading">Dhanashree</div>
                            <Custombtn />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Card;
