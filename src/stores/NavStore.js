import alt from '../alt';
import NavActions from '../actions/NavActions';

class NavStore {
  constructor() {
    this.bindListeners({
      handleUpdatePage: NavActions.UPDATE_PAGE
    });
    this.activePage = 'template';
  }

  handleUpdatePage(page) {
    this.activePage = page;
  }
}

export default alt.createStore(NavStore, 'NavStore');