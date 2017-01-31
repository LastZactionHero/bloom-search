import React from 'react';
import SearchStore from '../stores/SearchStore';
import SearchActions from '../actions/SearchActions';

class ResultPages extends React.Component {
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

  pageIndices = () => {
    let incides = [];
    let currentPage = this.state.results.meta.page_idx;

    if(currentPage >= 0){
      let startIdx = Math.max(0, currentPage - 4);
      for(let i = startIdx; i < currentPage; i++) {
        incides.push(i);
      }
    }

    incides.push(currentPage);

    if(currentPage <= (this.state.results.meta.total_pages - 1)){
      let endIdx = Math.min(this.state.results.meta.total_pages, currentPage + 4);
      for(let i = currentPage + 1; i < endIdx; i++) {
        incides.push(i);
      }
    }

    return incides;
  }

  prevPage = () => {
    if(!this.atFirstPage()){
      SearchActions.updatePage(this.state.results.meta.page_idx - 1);
    }
  }

  nextPage = () => {
    if(!this.atLastPage()){
      SearchActions.updatePage(this.state.results.meta.page_idx + 1);
    }
  }

  selectPage = (pageIdx) => {
    SearchActions.updatePage(pageIdx);
  }

  atLastPage = () => {
    return this.state.results.meta.page_idx >= this.state.results.meta.total_pages;
  }

  atFirstPage = () => {
    return this.state.results.meta.page_idx == 0;
  }

  render() {
    return(
      <div>
        {this.state.results.meta.total > 0 ?
          <div>
            {this.state.results.meta.total_pages > 1 ?
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li className={this.atFirstPage() ? 'disabled' : ''}>
                    <a href="#" aria-label="Previous" onClick={this.prevPage}>
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  {this.pageIndices().map( (pageIdx) => {
                    return <li className={pageIdx == this.state.results.meta.page_idx ? 'active' : ''} key={"page_li_" + pageIdx}>
                      <a href="#" onClick={() => {this.selectPage(pageIdx)}}>{pageIdx + 1}</a>
                    </li>
                  })}
                  <li className={this.atLastPage() ? 'disabled' : ''}>
                    <a href="#" aria-label="Next" onClick={this.nextPage}>
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav> : <span></span>}
            <small>
              {this.state.results.meta.total} results -
              Page {this.state.results.meta.page_idx + 1} of {this.state.results.meta.total_pages}
            </small>
          </div> : <small>No results</small>}
      </div>
    )
  }
}

export default ResultPages;