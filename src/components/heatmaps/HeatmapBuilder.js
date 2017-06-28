import React from 'react';
import Heatmap from './Heatmap';

class HeatmapBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heatmap: {
        name: '',
        width: 30,
        depth: 6,
        units_ft: 1,
        region_count: 0,
        regions: [{permalink: 'x', color: '#ffffff'}],
        regionMap: []
      }
    }
  }

  handleNameChanged = (event) => {
    let heatmap = this.state.heatmap;
    heatmap.name = event.target.value;
    this.setState({heatmap: heatmap});
  }

  handleWidthChanged = (event) => {
    let heatmap = this.state.heatmap;
    heatmap.width = parseInt(event.target.value);
    this.setState({heatmap: heatmap});
  }

  handleDepthChanged = (event) => {
    let heatmap = this.state.heatmap;
    heatmap.depth = parseInt(event.target.value);
    this.setState({heatmap: heatmap});
  }

  handleUnitsFtChanged = (event) => {
    let heatmap = this.state.heatmap;
    heatmap.units_ft = parseInt(event.target.value);
    this.setState({heatmap: heatmap});
  }

  handleRegionCountChanged = (event) => {
    let heatmap = this.state.heatmap;
    heatmap.region_count = parseInt(event.target.value);
    this.setState({heatmap: heatmap});
  }

  handleInitClicked = (event) => {
    event.preventDefault();

    let heatmap = this.state.heatmap;

    // Init permalink regions
    heatmap.regions = [];
    for(let i = 0; i < this.state.heatmap.region_count; i++) {
      heatmap.regions.push( { permalink: '', color: '#1abc9c' })
    }

    // Init regions map
    heatmap.regionMap = [];
    for(let y = 0; y < this.state.heatmap.depth * this.state.heatmap.units_ft; y++) {
      let row = [];
      for(let x = 0; x < this.state.heatmap.width * this.state.heatmap.units_ft; x++) {
        row.push(-1);
      }
      heatmap.regionMap.push(row);
    }

    this.setState({heatmap: heatmap});
  }

  render = () => {
    return(
      <div>
        <h1>Heatmap Builder</h1>
        <form>
          <div className='form-group'>
            <label>Name</label>
            <input type='text' className='form-control' value={this.state.heatmap.name} onChange={this.handleNameChanged} />
          </div>
          <div className='form-group'>
            <label>Width (ft)</label>
            <input type='text' className='form-control' value={this.state.heatmap.width} onChange={this.handleWidthChanged} />
          </div>
          <div className='form-group'>
            <label>Depth (ft)</label>
            <input type='text' className='form-control' value={this.state.heatmap.depth} onChange={this.handleDepthChanged} />
          </div>
          <div className='form-group'>
            <label>Units/Ft</label>
            <input type='text' className='form-control' value={this.state.heatmap.units_ft} onChange={this.handleUnitsFtChanged} />
          </div>
          <div className='form-group'>
            <label>Plant Regions</label>
            <input type='text' className='form-control' value={this.state.heatmap.region_count} onChange={this.handleRegionCountChanged} />
          </div>
          <div><button className='btn btn-primary' onClick={this.handleInitClicked}>Initialize</button></div>
          <hr/>

          <div>
            {this.state.heatmap.regions.map( (region, regionIdx) => {
              return(
                <div key={`region_${regionIdx}`}>
                  <h3>Region {regionIdx}</h3>
                  <div className='form-group'>
                    <label>Permalink</label>
                    <input type='text' className='form-control' />
                  </div>
                  <div className='form-group'>
                    <label>Color</label>
                    <input type='text' className='form-control' />
                  </div>
                </div>
              )
            })}
          </div>

        </form>

        <hr/>

        {this.state.heatmap.regionMap.length > 0 ? <Heatmap heatmap={this.state.heatmap} /> : null}
      </div>
    )
  }
}

export default HeatmapBuilder;