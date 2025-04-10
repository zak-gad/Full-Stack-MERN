const User = require('../../modules/user/user.schema');
const { verifyToken } = require('../utils/token');

const checkRole = (rolesAllowed) => {
    return async (req, res, next) => {
        try {
            const token = req.headers.token;

            if (!token) {
                return res.status(401).json({ msg: "No token provided, authorization denied." });
            }

            const { id } = verifyToken(token);
            const user = await User.findById(id);
            
            if (!user) {
                return res.status(404).json({ msg: "User not found." });
            }

            const role = user.role.trim();
            req.user = { id };

            if (rolesAllowed.includes(role)) {
                return next();
            } else {
                return res.status(403).json({ msg: "You do not have permission to perform this action." });
            }
        } catch (error) {
            return res.status(500).json({ msg: "Invalid token." });
        }
    };
};

module.exports = checkRole;
