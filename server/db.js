const Pool = require("pg").Pool;

//  set environment variables here
const pool = new Pool();

module.exports = pool;