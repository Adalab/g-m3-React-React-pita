import React from 'react';
import Collapsables from './Collapsables';
import GetAvatar from './GetAvatar';
import PropTypes from 'prop-types'; 


class CardForm extends React.Component {
    render() {
        const {
            formObject, onClickPalette, color, color2, color3,
            onChangeListener, handleCollasible, cid, updateAvatar,
		    isAvatarDefault, sendRequest, cardURL, twitterText, hashtags, successLink
        } = this.props
		return (
            //*collapsable--rotate
			<form className="form__container" action="POST">
				<Collapsables >
				<fieldset className="collapsable user_colors">
            <div onClick={handleCollasible} className="collapsable__header collapsable__colors" data-id="c01" > <i className="far fa-object-ungroup txt__color--orange"></i>
              <h2 className="collapsable__title title__colors">Diseña</h2>
              <i className={`fas fa-chevron-down txt__color--grey-dark ${cid === 'c01' ? 'collapsable--rotate' : ''}`}></i>
            </div>
            <div id="c01" className={`palette collapsable__item collapsable--visible  ${cid === 'c01' ? '' : 'hidden'}`} >
              <div className="palettes__container-colors">
                <span className="palettes__title">colores</span>
                <div>
                <label className="palette__label input-box" htmlFor="p1">
                    <div className="input-box">
                    <input className="palette__radio js__radio1" id="p1" type="radio" value="1" name="palette" onChange={onClickPalette} checked={formObject.palette === 1} />
                    <ul className="colors">
                      <li className="square-color" style={{ backgroundColor: color[0] }}>dark green blue</li>
                      <li className="square-color" style={{ backgroundColor: color[1] }}>dirty blue</li>
                      <li className="square-color" style={{ backgroundColor: color[2] }}>hospital green</li>
                    </ul>
                  </div>
                </label>
                <label className="palette__label input-box" htmlFor="p2">
                  <div className="input-box">
                    <input className="palette__radio js__radio2" id="p2" type="radio" value="2"
                      name="palette" onChange={onClickPalette} checked={formObject.palette === 2} />
                    <ul className="colors">
                      <li className="square-color" style={{ backgroundColor: color2[0] }}>dried blood</li>
                      <li className="square-color" style={{ backgroundColor: color2[1] }}>rusty red</li>
                      <li className="square-color" style={{ backgroundColor: color2[2] }}>tomato</li>
                    </ul>
                  </div>
                </label>
                <label className="palette__label input-box" htmlFor="p3">
                  <div className="input-box">
                    <input className="palette__radio js__radio3" id="p3" type="radio" value="3"
                      name="palette" onChange={onClickPalette} checked={formObject.palette === 3} />
                    <ul className="colors">
                      <li className="square-color" style={{ backgroundColor: color3[0] }}>slate</li>
                      <li className="square-color" style={{ backgroundColor: color3[1] }}>faded orange</li>
                      <li className="square-color" style={{ backgroundColor: color3[2] }}>light grey blue</li>
                    </ul>
                  </div>
                </label>
                </div>
              </div>
            </div>
          </fieldset>
				</Collapsables>
				<Collapsables>
				<fieldset className="collapsable form__fill">
                <div className="collapsable__header collapsable__fill" onClick={handleCollasible} data-id="c02"> <i className="far fa-keyboard txt__color--orange"></i>
                    <h3 className="collapsable__title title__fill">rellena</h3>
                    <i className={`fas fa-chevron-down txt__color--grey-dark ${cid === 'c02' ? 'collapsable--rotate' : ''}`}></i>
                </div>
                <div id="c02" className={`fill__container collapsable__item  ${cid === 'c02' ? '' : 'hidden'}`}>
                    <div className="fill__items items-name">
                        <label className="field__tag tag-name" htmlFor="name">nombre completo</label>
                        <input className="form__field form__field-name" type="text" value={formObject.name} id="name" name="name" placeholder="Ej: Sally Jill"  onChange={onChangeListener}/>
                    </div>
                    <div className="fill__items items-job">
                        <label className="field__tag tag-job" htmlFor="job">puesto</label>
                        <input className="form__field form__field-job" type="text" value={formObject.job} id="job"
                            name="job" placeholder="Ej: Front-end unicorn" onChange={onChangeListener}  />
                    </div>
                    <GetAvatar photo={formObject.photo} isAvatarDefault={isAvatarDefault} updateAvatar={updateAvatar}/>
                    <div className="fill__items items-phone">
                        <label className="field__tag tag-phone" htmlFor="phone">teléfono</label>
                        <input className="form__field form__field-phone" type="tel" value={formObject.phone}
                            id="phone" name="phone" placeholder="Ej:555-55-55-55" onChange={onChangeListener}/>
                        <div className="fill__items items-email">
                            <label className="field__tag tag-mail" htmlFor="email">email</label>
                            <input className="form__field form__field-mail" type="email" value={formObject.email}
                                id="email" name="email" placeholder="Ej:sally-hill@gmail.com" onChange={onChangeListener}  />
                        </div>
                    </div>
                    <div className="fill__items items-linkedin">
                        <label className="field__tag tag-linkedin" htmlFor="linkedin">linkedin</label>
                        <input className="form__field form__field-linkedin" type="text" value={formObject.linkedin}
                            id="linkedin" name="linkedin" placeholder="Ej:sally.hill" onChange={onChangeListener}  />
                    </div>
                    <div className="fill__items items-github">
                        <label className="field__tag tag-github" htmlFor="github">github</label>
                        <input className="form__field form__field-github" type="text" value={formObject.github}
                            id="github" name="github" placeholder="Ej:@sally-hill" onChange={onChangeListener}  />
                    </div>
                </div>
            </fieldset>
				</Collapsables>
				<Collapsables>
				<div className="collapsable">
                <div className="collapsable__header" onClick={handleCollasible} data-id="c03"> <i className="fas fa-share-alt txt__color--orange"></i>
                    <h2 className="collapsable__title">Comparte</h2>
                    <i className={`fas fa-chevron-down txt__color--grey-dark ${cid === 'c03' ? 'collapsable--rotate' : ''}`}></i>
                </div>
                <div className={`form__submit collapsable__container collapsable__item ${cid === 'c03' ? '' : 'hidden'}`}>
                    <div className="form__success-button collapsable__container">
						<button type="submit" className="form__button button-card" onClick={sendRequest}> <i className="far fa-address-card"></i>
                            <span className="form__button-text">Crear tarjeta</span>
                        </button>
                    </div>
                    <div className={`form__success-twitter collapsable__container ${successLink === true ? '' : 'hidden'}`}>
                        <h2 className="succes__title txt__color--grey-dark">La tarjeta ha sido creada con éxito</h2>
                        <a href={cardURL} className="success__link" >{cardURL}</a> 
                        <a href={`https://twitter.com/intent/tweet?text=${twitterText}&url=${cardURL}&hashtags=${hashtags}`} className="success__button-twitter button-twitter twitter-share-button" >
                     <i className="fab fa-twitter "></i>
                    <span className="success__button-text">Compartir en twitter</span>
    				</a>
                    </div>
                    <div className={`error-message ${successLink === false ? '' : 'hidden'}`}>Te ha faltado un campo: todos son requeridos menos el telefono</div>
                </div>
            </div>
			</Collapsables>
			</form>
		)
	}
}

CardForm.propTypes = {
    color: PropTypes.arrayOf(PropTypes.string).isRequired,
    color2: PropTypes.arrayOf(PropTypes.string).isRequired,
    color3: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChangeListener : PropTypes.func.isRequired,
    formObject: PropTypes.object.isRequired,
    onClickPalette: PropTypes.func.isRequired,
    cid: PropTypes.string.isRequired,
    isAvatarDefault: PropTypes.bool.isRequired,
    handleCollasible: PropTypes.func.isRequired,
    updateAvatar: PropTypes.func.isRequired,
    // linkAdalab: PropTypes.string, 
}; 

export default CardForm; 