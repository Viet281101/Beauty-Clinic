import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
	name: string;
	username: string;
	email: string;
	password: string;
	role: string;
	createdAt: Date;
	resetPasswordToken?: string;
	resetPasswordExpires?: Date;
};

const userSchema: Schema = new Schema<IUser>({
	name: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role: { type: String, default: "user" },
	createdAt: { type: Date, default: Date.now },
	resetPasswordToken: { type: String, required: false },
	resetPasswordExpires: { type: Date, required: false },
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
