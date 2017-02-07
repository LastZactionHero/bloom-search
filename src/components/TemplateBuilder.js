import React from 'react';
import TemplateActions from '../actions/TemplateActions';
import TemplateStore from '../stores/TemplateStore';
import TemplateViewer from './TemplateViewer';

class TemplateBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = TemplateStore.getState();
    TemplateActions.fetchTemplates();
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

  render = () => {
    return(
      <div>
        <h1>Template Builder</h1>
        <div className='row'>
          <div className='col-md-3'>
            <div className='btn-group-vertical clearfix' role='group'>
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