import express from "express";
import { 
  addToWatchlist, 
  removeFromWatchlist, 
  updateWatchlistItem 
} from "../controllers/watchlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { addToWatchlistSchema } from "../validators/watchlistValidators.js";

const router = express.Router();

// This middleware will be triggered before any request of this route
// It applies to each route
router.use(authMiddleware);

// And we would do like this, if we wanted to apply the middlwarae
// only to this route
// router.post("/", authMiddleware, addToWatchlist);

router.post("/", validateRequest(addToWatchlistSchema), addToWatchlist);
router.delete("/:id", removeFromWatchlist);
router.put("/:id", updateWatchlistItem);

export default router;