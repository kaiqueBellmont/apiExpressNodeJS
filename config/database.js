require('dotenv')

module.exports = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_DATABASE || 'ApiNode',
  host: process.env.DB_HOST || '127.0.0.1',
  logging: false,
  dialect: 'postgres',
  timezone: '-03:00'
}
