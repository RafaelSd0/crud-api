import { Document  } from "mongoose";

export interface ItemInterface extends Document {
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}