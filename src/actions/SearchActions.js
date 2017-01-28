import alt from '../alt';
import SearchSource from '../sources/SearchSource';

class SearchActions {
  fetchOptions() {
    SearchSource.fetchOptions().then( (options) => {
      this.updateOptions(options);
    });
    return null;
  }

  fetchResults(query) {
    SearchSource.fetchResults(query).then( (results) => {
      this.updateResults(results);
    });
    return null;
  }

  updateOptions(options) {
    return options;
  }

  updateQuery(key, values) {
    return {key: key, values: values}
  }

  updateResults(results) {
    return results;
  }
}

export default alt.createActions(SearchActions);