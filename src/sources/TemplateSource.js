import $ from 'jquery';

export default {
  fetchTemplates() {
    return new Promise( (resolve) => {
      $.ajax({
        method: 'GET',
        url: API_HOST + '/bed_templates',
        contentType: 'application/json'
      }).done((response) => {
        resolve(response);
      });
    });
  },

  fetchPlacements(template, width, height) {
    return new Promise( (resolve, reject) => {
      $.ajax({
        method: 'GET',
        url: `${API_HOST}/bed_templates/${template.id}/placements`,
        contentType: 'application/json',
        data: {
          width: width,
          height: height
        }
      }).done((response) => {
        resolve(response);
      }).fail((xhr, textStatus, errorThrown) => {
        reject(xhr, textStatus, errorThrown);
      });
    });
  },
  
  saveConfig(template) {
    return new Promise( (resolve, reject) => {
      $.ajax({
        method: 'PATCH',
        url: `${API_HOST}/bed_templates/${template.id}`,
        contentType: 'application/json',
        data: JSON.stringify({
          config: template.config
        })
      }).done((response) => {
        resolve(response);
      }).fail((xhr, textStatus, errorThrown) => {
        reject(xhr, textStatus, errorThrown);
      });
    });
  }
}