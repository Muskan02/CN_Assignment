import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkbox = props => (
    <input type='checkbox' {...props}/>
)

export default class Form extends Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePhoto = this.onChangePhoto.bind(this);
    this.onChangeFee = this.onChangeFee.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeVenue = this.onChangeVenue.bind(this);
    this.onChangeFav = this.onChangeFav.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name : '',
      description : '',
      photo : '',
      fee : 0,
      startdate : '',
      venue : '',
      tags : [],
      category : 'Coding Events',
      fav : '',
      categoryOptions : ["Coding Events", "Webinars", "Bootcamp Events", "Workshops"],
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangePhoto(e) {
    this.setState({
      photo: URL.createObjectURL(e.target.files[0])
    });
  }

  onChangeFee(e) {
    this.setState({
      fee: e.target.value
    });
  }

  onChangeStartDate(e) {
    this.setState({
      startdate: e.target.value
    });
  }

  onChangeVenue(e) {
    this.setState({
      venue: e.target.value
    });
  }

  onChangeFav(e) {
    this.setState({
      fav: e.target.checked
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }

  onChangeTags(e) {
    const tag = e.target.value;
    const tagArray = tag.split(',');
    this.setState({
      tags: tagArray
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const event = {
      name : this.state.name,
      description : this.state.description,
      photo : this.state.photo,
      fee : this.state.fee,
      startdate : this.state.startdate,
      venue : this.state.venue,
      tags : this.state.tags,
      category : this.state.category,
      fav : this.state.fav,
    }
    console.log(event);

    // window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create Event</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">

            <label>Name</label>
            <input className="form-control" type='text' 
              required
              value={this.state.name}
              onChange={this.onChangeName} />   

            <label>Description</label>
            <input className="form-control" type='text' 
              required
              value={this.state.description}
              onChange={this.onChangeDescription} />  

            <label>Photo</label>
            <input className="form-control" type='file' 
              required
              onChange={this.onChangePhoto} />   

            <label>Fee</label>
            <input className="form-control" type='number' 
              required
              value={this.state.fee}
              onChange={this.onChangeFee} />   

            <label>StartDate</label>
            <input className="form-control" type='date' 
              required
              value={this.state.startdate}
              onChange={this.onChangeStartDate} /> 

            <label>Venue</label>
            <input className="form-control" type='text' 
              required
              value={this.state.venue}
              onChange={this.onChangeVenue} />  

            <label>Category</label> 
            <select required
              className="form-control"
              value={this.state.category}
              onChange={this.onChangeCategory}>
              {
                this.state.categoryOptions.map(function(cat) {
                  return <option 
                  key={cat}
                  value={cat}>
                    {cat}
                  </option>
                })
                }
              
            </select>

            <label>Fav</label>
            <Checkbox fav={this.state.fav?1:0} onChange={this.onChangeFav}/>

            <label>Tags</label>
            <input className="form-control" type='text' 
              value={this.state.tags}
              onChange={this.onChangeTags} />  

            <input className="btn btn-primary" type='submit' />
          </div>
        </form>
      </div>
      )
  }
}