import React from 'react';
import TemplateActions from '../actions/TemplateActions';
import TemplateStore from '../stores/TemplateStore';
import TemplateViewer from './TemplateViewer';

class TemplateBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = TemplateStore.getState();
    TemplateActions.fetchTemplates();

    this.state.newTemplateName = '';
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

  handleSelect = (template) => {
    TemplateActions.setActiveTemplate(template);
  }

  updateNewTemplateName = (element) => {
    this.setState({newTemplateName: element.target.value});
  }

  createNewTemplate = () => {
    if(this.state.newTemplateName.length > 0){
      TemplateActions.createNewTemplate(this.state.newTemplateName);
    }
  }

  render = () => {
    return(
      <div>
        <h1>Template Builder</h1>
        <div className='row'>
          <div className='col-md-3'>

            <div className='row'>
              <div className='col-xs-12'>
                <h5>New Template</h5>
                <div className='form-group'>
                  <input type='text' className='form-control' placeholder='Title' value={this.state.newTemplateName} onChange={this.updateNewTemplateName} />
                </div>
                <button className='btn btn-success' onClick={this.createNewTemplate}>Create</button>
              </div>
            </div>

            <hr/>
            <h5>Select a Template</h5>
            <div className='btn-group-vertical' role='group'>
              {this.state.templates.map( (template) => {
                return <button
                  type='button'
                  key={'template_select_' + template.id}
                  className='btn btn-default'
                  onClick={() => {this.handleSelect(template)}}>
                  {template.name}
                </button>
              })}
            </div>
          </div>
          <div className='col-md-9'>
            {this.state.activeTemplate ? <TemplateViewer /> : <div>Select a Template</div>}
          </div>
        </div>
      </div>
    )
  }
}

export default TemplateBuilder;