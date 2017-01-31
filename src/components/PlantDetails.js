import React from 'react';

class PlantDetails extends React.Component {
  render() {
    return(
      <div>
        <h2>{this.props.plant.common_name}</h2>
        <div className='row'>
          <div className='col-md-6'>
            <p>Average Size:&nbsp;
              {this.props.plant.size.avg_height}&quot; Tall, {this.props.plant.size.avg_width || '?'}&quot; Wide
            </p>
            <p>{this.props.plant.description}</p>
            <div><strong>Zones:</strong> {this.props.plant.zones.map((f) => {return f.name}).join(', ')}</div>
            <div><strong>Plant Type:</strong> {this.props.plant.plant_type ? this.props.plant.plant_type.name : null}</div>
            <div><strong>Leaf Type:</strong> {this.props.plant.leave_type ? this.props.plant.leave_type.name : null}</div>
            <div><strong>Growth Rate:</strong> {this.props.plant.growth_rate ? this.props.plant.growth_rate.name : null}</div>
            <div><strong>Flower Color:</strong> {this.props.plant.flower_color ? this.props.plant.flower_color.name : null}</div>
            <div><strong>Foliage Color:</strong> {this.props.plant.foliage_color ? this.props.plant.foliage_color.name : null}</div>
            <div><strong>Light Need:</strong> {this.props.plant.light_need ? this.props.plant.light_need.name : null}</div>
            <div><strong>Key Features:</strong> {this.props.plant.key_features.map((f) => {return f.name}).join(', ')}</div>
            <div><strong>Special Features:</strong> {this.props.plant.special_features.map((f) => {return f.name}).join(', ')}</div>
            <div><strong>Usages:</strong> {this.props.plant.usages.map((f) => {return f.name}).join(', ')}</div>
            <div><strong>Garden Styles:</strong> {this.props.plant.garden_styles.map((f) => {return f.name}).join(', ')}</div>
            <div><strong>Flower Attributes:</strong> {this.props.plant.flower_attributes.map((f) => {return f.name}).join(', ')}</div>
            <div><strong>Watering Needs:</strong> {this.props.plant.watering_needs_raw}</div>

            <div><strong>Store Availability:</strong> {
              this.props.plant.store_available.available ? <span>
                <a href={this.props.plant.store_available.store_url} target='_blank'>${this.props.plant.store_available.cost}</a>
              </span> : <span>Unavailable</span>
            }
            </div>
          </div>
          <div className='col-md-6'>
            {this.props.plant.image_url.length > 0 ? <img src={this.props.plant.image_url} /> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default PlantDetails;