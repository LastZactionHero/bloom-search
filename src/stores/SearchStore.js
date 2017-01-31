import alt from '../alt';
import SearchActions from '../actions/SearchActions';

class SeachStore {
  constructor() {
    this.bindListeners({
      handleUpdateOptions: SearchActions.UPDATE_OPTIONS,
      handleUpdateQuery: SearchActions.UPDATE_QUERY,
      handleUpdateResults: SearchActions.UPDATE_RESULTS,
      handleUpdatePage: SearchActions.UPDATE_PAGE,
      handleClearQuery: SearchActions.CLEAR_QUERY
    });

    this.options = {};
    this.pageIdx = 0;
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
      flower_attributes: [],
      plant_types: []
    };
    this.results = {
      meta: {page_idx: 0, total: 0, total_pages: 0},
      plants: []
    };
  }

  handleUpdateOptions(options) {
    this.options = options;
  }

  handleClearQuery(key) {
    this.query[key] = [];
    this.pageIdx = 0;

    setTimeout(() => {SearchActions.fetchResults(this.query, this.pageIdx)});
  }

  handleUpdateQuery(update) {
    if(['plant_types', 'flower_attributes', 'garden_styles', 'usages', 'zones', 'special_features', 'key_features', 'light_needs', 'leave_types', 'growth_rates', 'flower_colors', 'foliage_colors'].indexOf(update.key) != -1 ) {
      let arrIndex = this.query[update.key].indexOf(update.values.id)
      if(arrIndex == -1) {
        this.query[update.key].push(update.values.id);
      } else {
        this.query[update.key].splice(arrIndex, 1);
      }
    } else if(update.key == 'common_name') {
      this.query.common_name = update.values;
    }
    this.pageIdx = 0;

    setTimeout(() => {SearchActions.fetchResults(this.query, this.pageIdx)});
  }

  handleUpdateResults(results) {
    this.results = results;
  }

  handleUpdatePage(pageIdx) {
    this.pageIdx = pageIdx;

    setTimeout(() => {SearchActions.fetchResults(this.query, this.pageIdx)});
  }
}

export default alt.createStore(SeachStore, 'SearchStore');