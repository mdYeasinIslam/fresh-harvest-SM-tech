import React from 'react';
import './OfferSection.css'; // Add styles here or use inline styles

const OfferSection = () => {
    return (
        <div className="offer-section">
            {/* Left Side: Offer Information */}
            <div className="offer-info">
                <p className="offer-tag">Special Offer</p>
                <h1 className="offer-title">Seasonal Fruit Bundle</h1>
                <p className="offer-discount">Discount up to <span>80% OFF</span></p>
                <div className="offer-timer">
                    <div className="timer-box">
                        <p>03</p>
                        <span>Days</span>
                    </div>
                    <div className="timer-box">
                        <p>18</p>
                        <span>Hour</span>
                    </div>
                    <div className="timer-box">
                        <p>54</p>
                        <span>Min</span>
                    </div>
                    <div className="timer-box">
                        <p>21</p>
                        <span>Second</span>
                    </div>
                </div>
                <div className="offer-code">
                    <p>CODE: <span>FRESH28</span></p>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="offer-image">
                <img
                    src="/home/m-yeasin/Downloads/Footer Section (1).png"
                    alt="Seasonal Fruit Bundle"
                />
            </div>
        </div>
    );
};

export default OfferSection;