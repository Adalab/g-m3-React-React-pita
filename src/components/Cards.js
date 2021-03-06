import React from 'react';
import Header from './Header';
import CardPreview from './CardPreview';
import CardForm from './CardForm';
import Footer from './Footer';
import PropTypes from 'prop-types'; 

const linkAdalab = 'https://adalab.es/';

const colorPallete1 = ['#104E43', '#438792', '#a2deaf'];
const colorPallete2 = ['#420101', '#bd1010', '#e95626'];
const colorPallete3 = ['#3e5b65', '#eab052', '#a0c0cf'];

class Cards extends React.Component {
  render() {
	  const {defaultInput, formObject, onChangeListener, onClickPalette, updateAvatar, handleCollasible, cid, isAvatarDefault, sendRequest, cardURL,twitterText, hashtags, successLink,resetData} = this.props
    return (
      <React.Fragment>
        <div className="page__cards">
          <Header />
          <main className="card__main">
            <CardPreview
              defaultInput = {defaultInput}
              formObject={formObject}
              resetData={resetData}
               />
            <CardForm 
              color={colorPallete1} color2={colorPallete2} color3={colorPallete3} 
              onChangeListener={onChangeListener}
              onClickPalette={onClickPalette}
              formObject={formObject}
              cid={cid}
              isAvatarDefault={isAvatarDefault}
              handleCollasible={handleCollasible}
			        updateAvatar={updateAvatar}
              sendRequest={sendRequest}
              cardURL={cardURL}
              twitterText={twitterText}
              hashtags={hashtags}
              successLink={successLink}
            />
          </main>
          <Footer linkAdalab={linkAdalab}/>
        </div>
      </React.Fragment>
    );
  }
}

Cards.propTypes = {
  defaultInput: PropTypes.object.isRequired,
  formObject: PropTypes.object.isRequired,
  onChangeListener: PropTypes.func.isRequired,
  onClickPalette: PropTypes.func.isRequired,
  isAvatarDefault: PropTypes.bool.isRequired,
  cid: PropTypes.string.isRequired,
  handleCollasible: PropTypes.func.isRequired,
  updateAvatar: PropTypes.func.isRequired,
  resetData: PropTypes.func.isRequired
};

export default Cards;