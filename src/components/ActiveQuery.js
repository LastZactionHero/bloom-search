import React from 'react';
import SearchStore from '../stores/SearchStore';
import SearchActions from '../actions/SearchActions';

class ActiveQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = SearchStore.getState();
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

  handleQueryStringChange = (event) => {
    SearchActions.queryStringChange(event.target.value);
  }

  render() {
    return(
      <div>
        <strong>Active Query</strong>
        <input type='text'
               className='form-control'
               value={JSON.stringify(this.state.query)}
               onChange={this.handleQueryStringChange}/>
      </div>
    );
  }
}

export default ActiveQuery;
