import mongoose, { Schema, type Document } from "mongoose";

export interface IReview extends Document {
  name: string;
  role: string;
  company: string;
  message: string;
  rating: number;
  avatar?: string;
  createdAt: Date;
}

const ReviewSchema = new Schema<IReview>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    message: { type: String, required: true, maxlength: 500 },
    rating: { type: Number, required: true, min: 1, max: 5 },
    avatar: { type: String },
  },
  { timestamps: true }
);

export const Review =
  mongoose.models.Review || mongoose.model<IReview>("Review", ReviewSchema);
