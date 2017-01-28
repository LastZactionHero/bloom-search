import React from 'react';
import SearchStore from '../../stores/SearchStore';
import SearchActions from '../../actions/SearchActions';

class MultiSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = SearchStore.getState();
    this.state.expanded = false;
  }

  componentDidMount = () => {
    SearchStore.listen(this.onChange);
  }

  componentWillUnmount = () => {
    SearchStore.unlisten(this.onChange);
  }

  onChange = (state) => {
    this.setState(state);
  }

  handleSelect = (option) => {
    SearchActions.updateQuery(this.optionsKey, option)
  }

  toggleExpand = () => {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    return(
      <div className='form-group'>
        <div>
          <a href='javascript:void(0)' onClick={this.toggleExpand}>
            {this.state.expanded ? '-' : '+'}
          </a>
          &nbsp;
          <label>{this.fieldLabel}</label>
        </div>
        {this.state.expanded ?
          <div className='btn-group-vertical clearfix' role='group'>
            {this.state.options[this.optionsKey] ? this.state.options[this.optionsKey].map(
              (option) => {
                return <button
                    type="button"
                    key={this.optionsKey + '_' + option.id}
                    className={(this.state.query[this.optionsKey].indexOf(option.id) == -1) ? 'btn btn-default' : 'btn btn-success'}
                    onClick={() => {this.handleSelect(option)}}>
                  {option.name}
                </button>
              }) : <div></div>
            }
          </div> : null
        }
      </div>
    )
  }
}

export default MultiSelector;