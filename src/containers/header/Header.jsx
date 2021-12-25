import React from 'react';
import './header.css'; 
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    Lets Build something amazing with GPT-3 Open AI
                </h1>
                <p>loecldsjknvjndsvnkdsl  jsdnvcmols jdsnolcvn onvcsdo cvokmsdpicn osxsc dcdc ldsn c </p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email" />
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={ people } />
                    <p>1600+ peoples are using..</p>
                </div>
                </div>
                <div className="gpt3__header-image">
                    <img src={ai}/>
                </div>
            
      </div>
    )
}

export default Header
