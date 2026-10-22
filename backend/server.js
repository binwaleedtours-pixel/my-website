require("dns").setServers(["8.8.8.8", "1.1.1.1"]);
require("dotenv").config();
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ---------- MongoDB Connection ----------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err.message));

// ---------- Review Model ----------
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 60 },
    tour: { type: String, trim: true }, // optional: tour slug ya title
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true, trim: true, maxlength: 600 },
  },
  { timestamps: true },
);

const Review = mongoose.model("Review", reviewSchema);

// ---------- Routes ----------
// GET all reviews (optional filter: /api/reviews?tour=naran-valley)
app.get("/api/reviews", async (req, res) => {
  try {
    const filter = req.query.tour ? { tour: req.query.tour } : {};
    const reviews = await Review.find(filter).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST a new review
app.post("/api/reviews", async (req, res) => {
  try {
    const { name, tour, rating, comment } = req.body;
    const review = await Review.create({ name, tour, rating, comment });
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
