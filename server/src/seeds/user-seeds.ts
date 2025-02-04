import { User } from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'nolangrossi', password: 'password' },
    { username: 'mrguy', password: 'password' },
    { username: 'burger', password: 'password' },
  ], { individualHooks: true });
};
