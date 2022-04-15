const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    password: 'password123'
  },
  {
    username: 'goat90',
    password: 'mark1990'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;