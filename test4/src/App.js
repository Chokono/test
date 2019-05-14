import React, { Component } from 'react';

import Add from './Add';

let arrayOfElements = [];
for (let i = 1; i < 301; i++) {
  arrayOfElements.push(`Элемент ${i}`);
}
console.log(arrayOfElements);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElements: ['Элемент 5', 'Элемент 125'],
      isPopupOpen: false,
    };
    this.removeElement = this.removeElement.bind(this);
    this.addElenemt = this.addElenemt.bind(this);
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  removeElement(val) {
    return () => {
      this.setState(state => ({
        selectedElements: state.selectedElements.filter(elem => elem !== val),
      }));
    };
  }

  addElenemt(val) {
    return () => {
      this.setState(state => ({
        selectedElements: state.selectedElements.push(val),
      }));
    };
  }

  openPopup() {
    this.setState(() => ({
      isPopupOpen: true,
    }));
  }

  closePopup() {
    this.setState(() => ({
      isPopupOpen: false,
    }));
  }

  render() {
    console.log(this.state.isPopupOpen);
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
              onClick={this.removeElement(el)}
            />
          </div>
        ))}
        <br />
        <button className="main__changeChoice" onClick={this.openPopup}>
          Изменить мой выбор
        </button>
        {this.state.isPopupOpen && <Add />}
      </div>
    );
  }
}

export default App;
