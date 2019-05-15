import React, { Component } from 'react';
import './App.css';
import Popup from './Popup';

let arrayOfElements = [];
for (let i = 1; i < 301; i++) {
  arrayOfElements.push(`Элемент ${i}`);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElements: ['Элемент 5', 'Элемент 125'],
      isPopupOpen: false,
    };
    this.removeElements = this.removeElements.bind(this);
    this.onOpenPopup = this.onOpenPopup.bind(this);
    this.onClosePopup = this.onClosePopup.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  removeElements(val) {
    return () => {
      this.setState(state => ({
        selectedElements: state.selectedElements.filter(elem => elem !== val),
      }));
    };
  }

  onOpenPopup() {
    this.setState(() => ({
      isPopupOpen: true,
    }));
  }

  onClosePopup() {
    this.setState(() => ({
      isPopupOpen: false,
    }));
  }

  saveChanges(arr) {
    return () => {
      this.setState(() => ({
        selectedElements: arr,
        isPopupOpen: false,
      }));
    };
  }

  render() {
    return (
      <div className="main">
        <h1 className="main__title">Выбор элементов</h1>
        {this.state.selectedElements.length ? (
          <p className="main__text">
            На данный момент у вас выбрано {this.state.selectedElements.length}{' '}
            {this.state.selectedElements.length > 1 ? 'элемента:' : 'элемент:'}
          </p>
        ) : (
          <p className="main__text">На данный момент у вас нет выбранных элементов.</p>
        )}
        {this.state.selectedElements.map(el => (
          <div className="selectedElementContainer" key={el}>
            {el}
            <div
              className="selectedElementContainer__close"
              onClick={this.removeElements(el)}
            />
          </div>
        ))}
        <br />
        <button className="main__changeChoice" onClick={this.onOpenPopup}>
          Изменить мой выбор
        </button>
        {this.state.isPopupOpen && (
          <Popup
            onClosePopup={this.onClosePopup}
            arrayOfElements={arrayOfElements}
            selectedElements={this.state.selectedElements}
            removeElements={this.removeElements}
            saveChanges={this.saveChanges}
          />
        )}
      </div>
    );
  }
}

export default App;
