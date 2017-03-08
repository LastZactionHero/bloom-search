import $ from 'jquery';

export default {
  favorite(plant) {
    $.ajax({
      method: 'POST',
      url: `${API_HOST}/plants/${plant.id}/favorite`,
      contentType: 'application/json'
    });
  },

  unfavorite(plant) {
    $.ajax({
      method: 'POST',
      url: `${API_HOST}/plants/${plant.id}/unfavorite`,
      contentType: 'application/json'
    });
  }
}
