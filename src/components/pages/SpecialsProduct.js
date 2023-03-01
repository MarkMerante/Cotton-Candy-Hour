import React, { useState } from "react"
import '../../App.css'
import './ClassicProduct.css'
import {useNavigate, useParams} from 'react-router-dom'
import specials from '../Specials'

const SpecialsProduct = ({ addToCart }) => {
    const navigate = useNavigate()
    const { specialsID } = useParams()
    const specialsProduct = specials.find(special => special.id === parseInt(specialsID))
    const {id, title, coverImg, description, preview1, preview2, price} = specialsProduct
    const [selectedOption, setSelectedOption] = useState(null);

    const [selectedPreview, setSelectedPreview] = useState(preview1);

    const handlePreviewClick = (preview) => {
        setSelectedPreview(preview);
    };

    const options = specials.map((special) => (
        <option key={special.id} value={special.id}>
          {special.title}
        </option>
    ));

    const handleSelectChange = (event) => {
        const selectedId = event.target.value;
        setSelectedOption(selectedId);
        if (selectedId !== "") {
            const selectedSpecial = specials.find((special) => special.id === parseInt(selectedId));
            navigate(`/special/${selectedSpecial.id}`);
            setSelectedPreview(selectedSpecial.preview1);
        }
    };

    const handleAddToCart = () => {
        addToCart({
            ...specialsProduct,
            coverImg: `../${coverImg}`,
        })
    }

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {setToggleState(index);}

    return (
        <div className="mainContainer">
            <div className="title">
                <h1>Shop now</h1>
            </div>
            <div className="Classic-Product-Container">
                <div className="images-container">
                    <div className="images">
                        <img src={`../${selectedPreview}`} className="classicsImg" />
                        <div className="preview-images">
                            <img src={`../${preview1}`} className="preview-img" onClick={() => handlePreviewClick(preview1)} />
                            <img src={`../${preview2}`} className="preview-img" onClick={() => handlePreviewClick(preview2)} />
                        </div>
                    </div>
                </div>
                
                <div className="classicsDetails">
                    <div className="bloc-tabs">
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                        Description
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                        Care Instructions
                        </button>
                    </div>

                    {/* <div className="information">
                        <h3>{title}</h3>
                        <strong>{price}</strong>
                    </div>
                    <button>Add to Cart</button> */}
                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            <div className="content-details">
                                <h3>{title}</h3>
                                <strong>{price}</strong>
                                <select value={selectedOption} onChange={handleSelectChange}>
                                    <option value="">Other Special flavours</option>
                                    {options}
                                </select>
                                <br/>
                                <p>{description}</p>
                                <br/>
                                <br/>
                                
                            </div>
                            <button onClick={handleAddToCart} className="content-button">Add to Cart</button>
                        </div>
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <h2>Care Instructions</h2>
                            <hr />
                            <p>
                              Pre-packaged cotton candy is typically best eaten within 2 weeks if unopened.
                            </p>
                            <p>
                              If a cotton candy tub has been opened, ensure container is properly sealed to prevent air from entering to delay hardening of the sugar.
                              This is best eaten within 3 days
                            </p>
                            <p>
                              Keep at room temperature or slightly cool, but do not keep in heat or extreme cold for long periods
                              of time. Minimizing exposure will maintain top quality and increase the longevity of freshness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <TabView /> */}
        </div>
    )
}
export default SpecialsProduct