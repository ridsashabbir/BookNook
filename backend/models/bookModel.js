import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// we use export keyword so that we can use this model in another file
// export const Book = mongoose.model("Book", { name: String });
export const Book = mongoose.model("Book", bookSchema);
