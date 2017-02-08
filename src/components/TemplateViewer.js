import React from 'react'
import TemplateStore from '../stores/TemplateStore';
import TemplateActions from '../actions/TemplateActions';
import TemplateRenderCanvas from './TemplateRenderCanvas';

class TemplateViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = TemplateStore.getState();
  }

  componentDidMount = () => {
    TemplateStore.listen(this.onChange);
  }

  componentWillUnmount = () => {
    TemplateStore.unlisten(this.onChange);
  }

  onChange = (state) => {
    this.setState(state);
  }

  handleWidthChange = (element) => {
    let value = parseInt(element.target.value);
    if(isNaN(value)){
      value = 0;
    }
    TemplateActions.setPlacementWidth(value);
  }

  handleHeightChange = (element) => {
    let value = parseInt(element.target.value);
    if(isNaN(value)){
      value = 0;
    }
    TemplateActions.setPlacementHeight(value);
  }

  handleConfigChange = (element) => {
    TemplateActions.setConfig(element.target.value);
  }

  saveConfig = () => {
    TemplateActions.saveConfig(this.state.activeTemplate);
  }

  startDraw = () => {
    TemplateActions.fetchPlacements(
      this.state.activeTemplate,
      this.state.placementWidth,
      this.state.placementHeight
    )
  }

  deleteTemplate = () => {
    if(confirm('Delete this template? This cannot be undone')){
      TemplateActions.deleteTemplate(this.state.activeTemplate);
    }
  }

  render() {
    return(
      <div>
        <h3>{this.state.activeTemplate.name}</h3>
        <div className='btn btn-danger' onClick={this.deleteTemplate}>Delete</div>
        <hr />
        <h4>Draw Preferences</h4>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group'>
              <label>Display Width (in)</label>
              <input type='text'
                className='form-control'
                value={this.state.placementWidth}
                onChange={this.handleWidthChange.bind(this)} />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='form-group'>
              <label>Display Height (in)</label>
              <input type='text'
                className='form-control'
                value={this.state.placementHeight}
                onChange={this.handleHeightChange.bind(this)} />
            </div>
          </div>
        </div>
        <a className='btn btn-success' href='javascript:void(0)' onClick={this.startDraw}>Draw It</a>
        <hr/>
        <h4>Bed Config</h4>
        <div><textarea onChange={this.handleConfigChange.bind(this)} value={this.state.activeTemplate.config}></textarea></div>
        <a className='btn btn-success' href='javascript:void(0)' onClick={this.saveConfig}>Update Config</a>
        <hr/>
        <div>
          {this.state.activePlacements ? <TemplateRenderCanvas placements={this.state.activePlacements} placementWidth={this.state.placementWidth} placementHeight={this.state.placementHeight}/> : null}
        </div>
      </div>
    )
  }
}

export default TemplateViewer;