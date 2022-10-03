import mongoose from 'mongoose';
import moment from 'moment';

const MessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    sentTime: {
      type: String,
      default: moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', MessageSchema);
