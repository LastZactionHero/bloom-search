import React from 'react';
import SearchForm from './SearchForm';
import Results from './Results';
import ResultPages from './ResultPages';
import PlantDetails from './PlantDetails';
import SearchStore from '../stores/SearchStore';
import SearchActions from '../actions/SearchActions';

class PlantSearch extends React.Component {
  constructor(props){
    super(props)
    this.state = SearchStore.getState();
  }

  componentDidMount = () => {
    SearchStore.listen(this.onChange);
  }

  componentWillUnmount = () => {
    SearchStore.unlisten(this.onChange);
  }

  onChange = (state) => {
    this.setState(state)
  }

  clearSelectedPlant = () => {
    SearchActions.selectPlant(null);
  }

  render() {
    return(
      <div>
        <h1>Plant Search Tool</h1>
        <div className='row'>
          <div className='col-md-3'>
            <SearchForm />
          </div>
          <div className='col-md-9'>
            {this.state.selectedPlant ?
              <div>
                <a href='javascript:void(0)' onClick={this.clearSelectedPlant}>Back</a>
                <PlantDetails plant={this.state.selectedPlant} />
              </div>:
              <div>
                <Results />
                <ResultPages />
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default PlantSearch;