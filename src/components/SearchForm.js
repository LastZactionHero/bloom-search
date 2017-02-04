import React from 'react';
import SearchStore from '../stores/SearchStore';
import SearchActions from '../actions/SearchActions';

import LeaveTypeSelector  from './search_form/LeaveTypeSelector';
import GrowthRateSelector from './search_form/GrowthRateSelector';
import FlowerColorsSelector from './search_form/FlowerColorsSelector';
import FoliageColorsSelector from './search_form/FoliageColorsSelector';
import LightNeedsSelector from './search_form/LightNeedsSelector';
import WateringNeedsSelector from './search_form/WateringNeedsSelector';
import KeyFeaturesSelector from './search_form/KeyFeaturesSelector';
import SpecialFeaturesSelector from './search_form/SpecialFeaturesSelector';
import ZonesSelector from './search_form/ZonesSelector';
import UsagesSelector from './search_form/UsagesSelector';
import GardenStylesSelector from './search_form/GardenStylesSelector';
import FlowerAttributesSelector from './search_form/FlowerAttributesSelector';
import PlantTypeSelector from './search_form/PlantTypeSelector';
import HeightRangeSelector from './search_form/HeightRangeSelector';
import WidthRangeSelector from './search_form/WidthRangeSelector';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = SearchStore.getState();
    SearchActions.fetchOptions();
  }

  handleCommonNameChange(event) {
    let commonName = event.target.value;
    SearchActions.updateQuery('common_name', commonName);
  }

  render() {
    return(
      <div>
        <div className='form-group'>
          <label>Common Name</label>
          <input
            type='text'
            className='form-control'
            onChange={this.handleCommonNameChange.bind(this)}/>
        </div>
        <HeightRangeSelector />
        <WidthRangeSelector />
        <PlantTypeSelector />
        <FoliageColorsSelector />
        <FlowerAttributesSelector />
        <FlowerColorsSelector />
        <GardenStylesSelector />
        <GrowthRateSelector />
        <KeyFeaturesSelector />
        <LeaveTypeSelector />
        <WateringNeedsSelector />
        <LightNeedsSelector />
        <SpecialFeaturesSelector />
        <UsagesSelector />
        <ZonesSelector />
      </div>
    )
  }
}

export default SearchForm;