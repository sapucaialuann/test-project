import React from 'react';
import './SecondSection.css';
import lineChartImage from '../../assets/images/lineChartImage.png';
import chatBotImage from '../../assets/images/chatBotImage.png';

function SecondSection() {

    const FeatureAndImage = () => {
        return(
            <>
                <TitleAndDescription title='Features' description= { descriptionText } />
            </>
        );
    };

    const TitleAndDescription = (props) => {
        return(
            <>
                <div className='title-and-description'>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
                <div>
                    <img src={ chatBotImage }/>
                    <img src={ lineChartImage }/>
                </div>
            </>
        )
    }
    const descriptionText = 'Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.'
    return (
        <div className='main-seccond-section'>
            <div className='content-section'>
                <FeatureAndImage />
            </div>
        </div>
    )
}

export default SecondSection
