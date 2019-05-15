import React, { Component } from 'react';
import cx from 'classnames';
import './Popup.css';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ['Без фильтра', 'Номер > 10', 'Номер > 100', 'Номер > 200'],
      selectedFilter: 'Без фильтра',
      selectedElements: this.props.selectedElements,
      isFilterOpen: false,
    };
    this.setElements = this.setElements.bind(this);
    this.setFilterOpenState = this.setFilterOpenState.bind(this);
  }
  setFilterOpenState (val){
  	return ()=>{
  		this.setState(() => ({
          isFilterOpen: val,
        }));
  	}
  }
  setElements(val) {
    if (this.state.selectedElements.indexOf(val) > -1) {
      return () => {
        this.setState(state => ({
          selectedElements: state.selectedElements.filter(elem => elem !== val),
        }));
      };
    }
    if (this.state.selectedElements.length === 3) {
      return e => {
        e.preventDefault();
      };
    }
    return () => {
      this.setState(state => ({
        selectedElements: [...state.selectedElements, val],
      }));
    };
  }
  render({ onClosePopup, arrayOfElements, setElements, saveChanges } = this.props) {
    return (
      <div className="popup__overflow">
        <div className="popup__container">
          <div className="popup__close" onClick={onClosePopup} />
          <h3 className="popup__title">Диалог выбора элементов</h3>
          <div class="popup__fieldWrapper">
            <div className="popup__fieldContainer">
              <label htmlFor="find" className="popup__label">
                Поиск
              </label>
              <input id="find" className="popup__inpit" />
            </div>
            <div className="popup__fieldContainer">
              <label htmlFor="filter" className="popup__label">
                Фильтр
              </label>
              <ul className="popup__filter" tabindex="0" onBlur={this.setFilterOpenState(false)}>
                <li className={cx("popup__option", {"dropped": this.state.isFilterOpen})}
                onClick={this.setFilterOpenState(true)}>Без фильтра</li>
                {this.state.isFilterOpen && (<ul className="popup__dropdown">
	                <li className="popup__option current">Без фильтра</li>
	                <li className="popup__option">Номер > 10</li>
	                <li className="popup__option">Номер > 100</li>
	                <li className="popup__option">Номер > 200</li>
	            </ul>)}
              </ul>
            </div>
          </div>
          <div className="popup__innerContainer">
            {arrayOfElements.map(el => {
              return (
                <div key={el} className="popup__elements">
                  <div
                    className={cx('popup_checkbox', {
                      selected: this.state.selectedElements.indexOf(el) !== -1,
                      disable: this.state.selectedElements.length === 3,
                    })}
                    onClick={this.setElements(el)}
                  />
                  <span
                    className={cx('popup_checkboxLabel', {
                      selected: this.state.selectedElements.indexOf(el) !== -1,
                      disable: this.state.selectedElements.length === 3,
                    })}
                    onClick={this.setElements(el)}
                  >
                    {el}
                  </span>
                </div>
              );
            })}
          </div>
          {this.state.selectedElements.length ? (
            <p className="popup__text">
              {this.state.selectedElements.length > 1
                ? 'Выбранные элементы'
                : 'Выбранный элемент'}{' '}
              на данный момент:
            </p>
          ) : (
            <p className="popup__text">На данный момент у вас нет выбранных элементов.</p>
          )}
          {this.state.selectedElements.map(el => (
            <div className="selectedElementContainer" key={el}>
              {el}
              <div
                className="selectedElementContainer__close"
                onClick={this.setElements(el)}
              />
            </div>
          ))}
          <div>
            <button
              className="popup__button"
              onClick={saveChanges(this.state.selectedElements)}
            >
              Сохранить
            </button>
            <button className="popup__button" onClick={onClosePopup}>
              Отмена
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
