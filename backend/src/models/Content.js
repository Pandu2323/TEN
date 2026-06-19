import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['tutorials', 'notes', 'blogs', 'resources'], required: true, index: true },
    title: { type: String, required: true, trim: true },
    slug: { type: String, trim: true, index: true },
    category: { type: String, default: 'development', trim: true },
    description: { type: String, default: '' },
    excerpt: { type: String, default: '' },
    body: { type: String, default: '' },
    status: { type: String, enum: ['draft', 'published', 'archived'], default: 'published' },
    level: { type: String, default: 'Beginner' },
    duration: { type: String, default: '' },
    pages: { type: Number, default: 0 },
    resourceType: { type: String, default: '' },
    author: { type: String, default: 'The Epoch Nova' },
    readTime: { type: String, default: '' },
    fileUrl: { type: String, default: '' },
    videoUrl: { type: String, default: '' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

contentSchema.index({ title: 'text', description: 'text', excerpt: 'text', body: 'text' });

contentSchema.pre('save', function createSlug(next) {
  if (!this.slug && this.title) {
    this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
  next();
});

export default mongoose.model('Content', contentSchema);
