import React from 'react'
import SearchStore from '../stores/SearchStore';
import SearchActions from '../actions/SearchActions';

class Results extends React.Component {
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

  selectPlant = (plant) => {
    SearchActions.selectPlant(plant)
  }

  render = () => {
    return(
      <div>
        <table className='table table-condensed table-striped results-table'>
          <thead>
          <tr>
            <th>Common Name</th>
            <th>Avg Height, IN</th>
            <th>Avg Width, IN</th>
            <th>Leaf Type</th>
            <th>Growth Rate</th>
            <th>Flower Color</th>
            <th>Foliage Color</th>
            <th>Light Need</th>
            <th>Zones</th>
            <th>Usages</th>
            <th>Garden Styles</th>
            <th>Flower Attributes</th>
          </tr>
          </thead>
          <tbody>
          {this.state.results.plants.map( (plant) => {
              return <tr className='plant' key={'plant_result_' + plant.id} onClick={() => {this.selectPlant(plant)}}>
                <td>{plant.common_name}</td>
                <td>{plant.size.avg_height}&quot;</td>
                <td>{plant.size.avg_width}&quot;</td>
                <td>{plant.leave_type ? plant.leave_type.name : null}</td>
                <td>{plant.growth_rate ? plant.growth_rate.name : null}</td>
                <td>{plant.flower_color ? plant.flower_color.name : null}</td>
                <td>{plant.foliage_color ? plant.foliage_color.name : null}</td>
                <td>{plant.light_need ? plant.light_need.name : null}</td>
                <td>{plant.zones.map((z) => { return z.name}).join(', ')}</td>
                <td>{plant.usages.map((u) => { return u.name}).join(', ')}</td>
                <td>{plant.garden_styles.map((s) => { return s.name}).join(', ')}</td>
                <td>{plant.flower_attributes.map((f) => { return f.name}).join(', ')}</td>
              </tr>
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Results;