import mongoose from 'mongoose';
import abstractModel from 'api/utils/abstractModel';

const schema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  position: {
    lat: {type: Number, required: true},
    lng: {type: Number, required: true}
  }
}, {collection: 'events'});

let Model = mongoose.model('events', schema);

export default abstractModel(Model);
