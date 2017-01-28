require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import SearchForm from './SearchForm';
import Results from './Results';

class AppComponent extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Plant Search Tool</h1>
        <div className='row'>
          <div className='col-md-3'>
            <SearchForm />
          </div>
          <div className='col-md-9'>
            <Results />
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
