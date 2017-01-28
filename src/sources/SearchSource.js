import $ from 'jquery';

export default {
  fetchOptions: () => {
    return new Promise( (resolve) => {
      $.ajax({
        method: 'GET',
        url: API_HOST + '/search/options',
        contentType: 'application/json'
      }).done((response) => {
        resolve(response);
      });
    });
  },

  fetchResults: (query) => {
    console.log(query)
    return new Promise( (resolve) => {
      $.ajax({
        method: 'POST',
        url: API_HOST + '/search/query',
        contentType: 'application/json',
        data: JSON.stringify({query: query})
      }).done((response) => {
        resolve(response);
      });
    });
  }
}