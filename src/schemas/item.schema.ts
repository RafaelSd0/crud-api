import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, { timestamps: true }); 