const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const SALT = process.env.JWT_SECRET_KEY;

if (!SALT) {
    throw new Error('JWT_SECRET_KEY is not defined in the environment variables');
}

/**
 * Function to generate a JWT token.
 * @param {any} id - The user ID to be included in the token payload.
 * @returns {string} A signed JWT token.
 */
function generateToken(id) {
    const expirationTime = '367d'; // Token valid for 367 days
    return jwt.sign({ id }, SALT, { expiresIn: expirationTime });
}

/**
 * Function to verify a JWT token and extract the ID from the payload.
 * @param {string} token - The JWT token to verify.
 * @returns {object} The user ID extracted from the token payload.
 * @throws Will throw an error if the token is invalid or expired.
 */
function verifyToken(token) {
    return jwt.verify(token, SALT);
}

module.exports = { generateToken, verifyToken };
