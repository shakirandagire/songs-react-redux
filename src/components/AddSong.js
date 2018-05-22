import React, { Component } from 'react';
import { AddSongAction } from '../Actions/SongsAction';
import { connect } from 'react-redux';

class AddSong extends Component {
    state={
        'title': '',
        'artist': ''
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }
    handleAddSong = () => {
        this.props.AddSongAction(this.state);
    } 

  render() {
    return (
<div className="container">
<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
  Add Songs
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Songs</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
        <div class="form-group">
            <label for="exampleFormControlInput1">Title</label>
            <input type="text" name ="title" class="form-control" id="exampleFormControlInput1" 
            placeholder="Gyendi" value={this.state.title} onChange={this.handleInputChange}/>
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">Artist</label>
            <input type="text" name = "artist" class="form-control" id="exampleFormControlInput1" 
            placeholder="Bobi Wine"value={this.state.artist} onChange={this.handleInputChange}/>
        </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={this.handleAddSong}>Save</button>
      </div>
    </div>
  </div>
</div>
    </div>

    );
  }
}

export default connect(null, { AddSongAction } )(AddSong);