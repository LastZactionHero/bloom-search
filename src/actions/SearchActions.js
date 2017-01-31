import alt from '../alt';
import SearchSource from '../sources/SearchSource';

class SearchActions {
  fetchOptions() {
    SearchSource.fetchOptions().then( (options) => {
      this.updateOptions(options);
    });
    return null;
  }

  fetchResults(query, pageIdx) {
    SearchSource.fetchResults(query, pageIdx).then( (results) => {
      this.updateResults(results);
    });
    return null;
  }

  clearQuery(key) {
    return key;
  }

  updateOptions(options) {
    return options;
  }

  updatePage(pageIdx) {
    return pageIdx;
  }

  updateQuery(key, values) {
    return {key: key, values: values}
  }

  updateResults(results) {
    return results;
  }

  selectPlant(plant) {
    return plant;
  }
}

export default alt.createActions(SearchActions);