import MultiSelector from './MultiSelector';

class ZonesSelector extends MultiSelector {
  constructor(props) {
    super(props);
    this.fieldLabel = 'Zones';
    this.optionsKey = 'zones'
  }
}

export default ZonesSelector;