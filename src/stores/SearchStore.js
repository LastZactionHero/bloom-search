import alt from '../alt';
import SearchActions from '../actions/SearchActions';

class SeachStore {
  constructor() {
    this.bindListeners({
      handleUpdateOptions: SearchActions.UPDATE_OPTIONS,
      handleUpdateQuery: SearchActions.UPDATE_QUERY,
      handleUpdateResults: SearchActions.UPDATE_RESULTS
    });

    this.options = {};
    this.query = {
      common_name: '',
      leave_types: [],
      growth_rates: [],
      flower_colors: [],
      foliage_colors: [],
      light_needs: [],
      key_features: [],
      special_features: [],
      zones: [],
      usages: [],
      garden_styles: [],
      flower_attributes: []
    };
    this.results = {
      meta: {page_idx: 0, total: 0},
      plants: []
    };
  }

  handleUpdateOptions(options) {
    this.options = options;
  }

  handleUpdateQuery(update) {
    if(['flower_attributes', 'garden_styles', 'usages', 'zones', 'special_features', 'key_features', 'light_needs', 'leave_types', 'growth_rates', 'flower_colors', 'foliage_colors'].indexOf(update.key) != -1 ) {
      let arrIndex = this.query[update.key].indexOf(update.values.id)
      if(arrIndex == -1) {
        this.query[update.key].push(update.values.id);
      } else {
        this.query[update.key].splice(arrIndex, 1);
      }
    } else if(update.key == 'common_name') {
      this.query.common_name = update.values;
    }

    setTimeout(() => {SearchActions.fetchResults(this.query)});
  }

  handleUpdateResults(results) {
    this.results = results;
  }
}

export default alt.createStore(SeachStore, 'SearchStore');