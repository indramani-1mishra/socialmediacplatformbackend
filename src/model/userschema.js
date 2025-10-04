const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    emailorphone: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    firstName: { type: String, default: null },     // optional
    lastName: { type: String, default: null },      // optional
    dateOfBirth: { type: Date, default: null },     // optional
    gender: { type: String, enum: ["Male", "Female", "Custom"], default: null }, // optional
    profilePicture: { type: String, default: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png' }, // optional
    bio: { type: String, default: null },           // optional
    interests: { type: [String], default: [] },     // optional, empty array initially
    role: { type: String, default: "user" },        // default role
  },
  { timestamps: true } // adds createdAt and updatedAt
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  }});
const User = mongoose.model("User", userSchema);

module.exports = User;
