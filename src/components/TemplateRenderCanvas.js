import React from 'react';

class TemplateRenderCanvas extends React.Component {
  constructor(props) {
    super(props)
    this.canvasWidth = 900;
    this.canvasHeight = 900;
  }

  componentDidMount = () => {
    setTimeout( () => {
      this.renderPlacements();
    })
  }

  renderPlacements = () => {
    let canvas = document.getElementById('placementsCanvas');
    let ctx = canvas.getContext('2d');

    let xImageScale = this.canvasWidth / this.props.placementWidth;
    let yImageScale = this.canvasHeight / this.props.placementHeight;
    let imageScale = Math.min(xImageScale, yImageScale);

    this.props.placements.forEach( (placement) => {
      let xPos = placement.x_pos * imageScale + 50;
      let yPos = placement.y_pos * imageScale + 50;
      let plantRadius = placement.plant.width / 2 * imageScale;

      ctx.beginPath();
      ctx.arc(xPos, yPos, plantRadius, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.font="12px Helvetica";
      ctx.fillText(placement.plant.label,xPos-4, yPos + 2);
    });
  }

  render() {
    return(
      <div>
        <canvas id='placementsCanvas' width={this.canvasWidth} height={this.canvasHeight} />
      </div>
    )
  }
}

export default TemplateRenderCanvas;