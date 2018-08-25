import React, {Component} from 'react';

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activate: false,
      list: [
        {name: 'Asalto', icon: 'fa-heart-o', activate: true},
        {name: 'Robo', icon: 'fa-heartbeat'},
        {name: 'Herido', icon: 'fa-medkit'},
        {name: 'Otros', icon: 'fa-plus-square'}
      ]
    };
  }
  
  activated = (index) => {
    const list = this.state.list.map((item) => {
      item.activate = false;
      return item;
    });
    
    list[index].activate = true;
    
    this.setState({list});
  }

  render() {
    return (
      <div className="eventsList">
        <ul>
          {this.state.list.map((item, index) => 
            <li key={index}>
              <a 
                className={item.activate ? 'activate' : ''} 
                onClick={() => this.activated(index)}>
                <i className={`fa ${item.icon}`}></i>{item.name}
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default EventsList;
