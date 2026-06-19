import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './models/User.js';
import Content from './models/Content.js';

dotenv.config();

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/the_epoch_nova';

const content = [
  { type: 'tutorials', title: 'Java Foundations Masterclass', category: 'java', description: 'Start Java with syntax, OOP and clean coding habits.', duration: '42 min', level: 'Beginner' },
  { type: 'tutorials', title: 'React Components From Scratch', category: 'development', description: 'Build reusable components and stateful UI patterns.', duration: '55 min', level: 'Intermediate' },
  { type: 'notes', title: 'Java OOP Notes', category: 'java', description: 'Compact guide for classes, interfaces and inheritance.', resourceType: 'PDF', pages: 28 },
  { type: 'notes', title: 'SQL Joins Cheat Sheet', category: 'sql', description: 'Inner, outer, self and cross joins with examples.', resourceType: 'Cheat Sheet', pages: 12 },
  { type: 'blogs', title: 'How to Learn Backend Development', category: 'career', excerpt: 'A practical path for API, database and deployment skills.', readTime: '6 min read' },
  { type: 'resources', title: 'Developer Setup Checklist', category: 'development', description: 'Essential tools and configs for a productive coding setup.', resourceType: 'Guide' }
];

await mongoose.connect(mongoUri);
const admin = await User.findOne({ email: 'admin@theepochnova.com' });
if (!admin) {
  await User.create({ name: 'Admin', email: 'admin@theepochnova.com', password: 'admin123', role: 'admin' });
}
await Content.deleteMany({});
await Content.insertMany(content);
await mongoose.disconnect();

console.log('Seed complete. Admin login: admin@theepochnova.com / admin123');
