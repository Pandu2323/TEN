import express from 'express';
import Content from '../models/Content.js';
import { requireAuth, requireAdmin } from '../middleware/auth.js';

const router = express.Router();
const collections = ['tutorials', 'notes', 'blogs', 'resources'];

function ensureCollection(req, res, next) {
  if (!collections.includes(req.params.collection)) {
    return res.status(404).json({ message: 'Unknown collection' });
  }
  next();
}

router.get('/:collection', ensureCollection, async (req, res, next) => {
  try {
    const { q, category, status = 'published' } = req.query;
    const filter = { type: req.params.collection };
    if (category && category !== 'all') filter.category = category;
    if (status !== 'all') filter.status = status;
    if (q) filter.$text = { $search: q };
    const items = await Content.find(filter).sort({ createdAt: -1 });
    res.json({ items });
  } catch (error) {
    next(error);
  }
});

router.get('/:collection/:id', ensureCollection, async (req, res, next) => {
  try {
    const item = await Content.findOne({ _id: req.params.id, type: req.params.collection });
    if (!item) return res.status(404).json({ message: 'Content not found' });
    res.json({ item });
  } catch (error) {
    next(error);
  }
});

router.post('/:collection', requireAuth, requireAdmin, ensureCollection, async (req, res, next) => {
  try {
    const item = await Content.create({ ...req.body, type: req.params.collection, createdBy: req.user?._id });
    res.status(201).json({ item });
  } catch (error) {
    next(error);
  }
});

router.put('/:collection/:id', requireAuth, requireAdmin, ensureCollection, async (req, res, next) => {
  try {
    const item = await Content.findOneAndUpdate(
      { _id: req.params.id, type: req.params.collection },
      req.body,
      { new: true, runValidators: true }
    );
    if (!item) return res.status(404).json({ message: 'Content not found' });
    res.json({ item });
  } catch (error) {
    next(error);
  }
});

router.delete('/:collection/:id', requireAuth, requireAdmin, ensureCollection, async (req, res, next) => {
  try {
    const item = await Content.findOneAndDelete({ _id: req.params.id, type: req.params.collection });
    if (!item) return res.status(404).json({ message: 'Content not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export default router;
