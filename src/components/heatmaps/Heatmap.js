import React from 'react';

class Heatmap extends React.Component {
  REGION_WIDTH = 20

  constructor(props) {
    super(props);
  }

  renderGrid = () => {
    let ctx = this.refs.canvas.getContext('2d');
    this.props.heatmap.regionMap.forEach( (row, rowIdx) => {
      row.forEach( (cell, colIdx) => {
        ctx.rect(colIdx * this.REGION_WIDTH, rowIdx * this.REGION_WIDTH, this.REGION_WIDTH, this.REGION_WIDTH);
        ctx.stroke();
      });
    });
  }

  render = () => {
    setTimeout(() => {this.renderGrid() });

    return(
      <div>
        <canvas ref='canvas'
                width={this.props.heatmap.regionMap[0].length * this.REGION_WIDTH}
                height={this.props.heatmap.regionMap.length * this.REGION_WIDTH}
                style={{border: '1px solid #000000'}}/>
      </div>
    )
  }

}

export default Heatmap;

// WHERE YOU LEFT OFF:
// Select the active coloring region
// Clicking canvas position sets the region
// 