import React from 'react';
import SearchStore from '../stores/SearchStore';

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

  render() {
    return(
      <div>
        <strong>Active Query</strong>
        <pre>
          {JSON.stringify(this.state.query)}
        </pre>
      </div>
    );
  }
}

export default ActiveQuery;
