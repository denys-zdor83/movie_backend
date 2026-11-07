import express from "express";
import { addToWatchlist } from "../controllers/watchlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// This middleware will be triggered before any request of this route
// It applies to each route
router.use(authMiddleware);

// And we would do like this, if we wanted to apply the middlwarae
// only to this route
// router.post("/", authMiddleware, addToWatchlist);

router.post("/", addToWatchlist);
// router.post("/login", login);
// router.post("/logout", logout);

export default router;