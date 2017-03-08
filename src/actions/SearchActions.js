import alt from '../alt';
import SearchSource from '../sources/SearchSource';
import PlantSource from '../sources/PlantSource';

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

  toggleFavorite(plant, favorite){
    if(favorite){
      PlantSource.favorite(plant);
    } else {
      PlantSource.unfavorite(plant);
    }
    return {plant: plant, favorite: favorite}
  }

  queryStringChange(queryString) {
    return queryString;
  }
}

export default alt.createActions(SearchActions);
