import React from 'react';
import NavStore from '../stores/NavStore';
import NavActions from '../actions/NavActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavStore.getState();
  }

  componentDidMount = () => {
    NavStore.listen(this.onChange);
  }

  componentWillUnmount = () => {
    NavStore.unlisten(this.onChange);
  }

  onChange = (state) => {
    this.setState(state)
  }

  updatePage = (page) => {
    NavActions.updatePage(page);
  }

  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Bloom Debug</a>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className={this.state.activePage == 'search' ? 'active' : ''}>
                <a href="javascript:void(0)" onClick={() => {this.updatePage('search')}}>
                  Plant Search
                </a>
              </li>
              <li className={this.state.activePage == 'template' ? 'active' : ''}>
                <a href="javascript:void(0)"  onClick={() => {this.updatePage('template')}}>
                  Template Builder
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>)
  }
}

export default Navbar;