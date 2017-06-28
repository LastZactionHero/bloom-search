require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Navbar from './Navbar';
import PlantSearch from './PlantSearch';
import TemplateBuilder from './TemplateBuilder';
import HeatmapBuilder from './heatmaps/HeatmapBuilder';
import NavStore from '../stores/NavStore'

class AppComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = NavStore.getState();
  }

  componentDidMount = () => {
    NavStore.listen(this.onChange);
  }

  componentWillUnmount = () => {
    NavStore.unlisten(this.onChange);
  }

  onChange = (state) => {
    this.setState(state)
  }

  render() {
    let activePageEl = <div></div>;
    switch(this.state.activePage) {
      case 'search':
        activePageEl = <PlantSearch />;
        break;
      case 'template':
        activePageEl = <TemplateBuilder />;
        break;
      case 'heatmap_builder':
        activePageEl = <HeatmapBuilder />;
        break;
    }

    return (
      <div className='main'>
        <Navbar />
          <div className='container'>
            { activePageEl }
          </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
