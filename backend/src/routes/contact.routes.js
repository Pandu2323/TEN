import express from 'express';
import Contact from '../models/Contact.js';
import Newsletter from '../models/Newsletter.js';
import { requireAuth, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.post('/contacts', async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ contact });
  } catch (error) {
    next(error);
  }
});

router.get('/contacts', requireAuth, requireAdmin, async (_req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ contacts });
  } catch (error) {
    next(error);
  }
});

router.post('/newsletter', async (req, res, next) => {
  try {
    const subscriber = await Newsletter.findOneAndUpdate(
      { email: req.body.email },
      { email: req.body.email },
      { new: true, upsert: true, runValidators: true }
    );
    res.status(201).json({ subscriber });
  } catch (error) {
    next(error);
  }
});

export default router;
