import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
	name: string;
	email: string;
	password: string;
	createdAt: Date;
};

const userSchema: Schema = new Schema<IUser>({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
