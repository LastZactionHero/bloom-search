import alt from '../alt';
import TemplateSource from '../sources/TemplateSource';

class TemplateActions {
  fetchTemplates() {
    TemplateSource.fetchTemplates().then( (templates) => {
      this.updateTemplates(templates);
    });
  }

  updateTemplates(templates) {
    return templates;
  }

  setActiveTemplate(template) {
    return template;
  }

  fetchPlacements(template, width, height) {
    TemplateSource.fetchPlacements(template, width, height).then( (response) => {
      this.updatePlacements(response.placements);
    });
    return null;
  }

  updatePlacements(placements) {
    return placements
  }

  setPlacementWidth(width) {
    return width;
  }

  setPlacementHeight(height) {
    return height;
  }

  setConfig(config) {
    return config;
  }

  saveConfig(template) {
    TemplateSource.saveConfig(template).then( (template) => {
      this.updateActiveTemplate(template);
    });
    return null;
  }

  updateActiveTemplate(template) {
    return template;
  }
}

export default alt.createActions(TemplateActions);