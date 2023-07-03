import mongoose from "mongoose";

const ChatLogSchema = mongoose.Schema({
  chatLog: {
    type: Array,
  },
});

const ChatLog = mongoose.model("ChatLog", ChatLogSchema);
export default {
  ChatLog,
};
