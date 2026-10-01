/**
 * NourishLoop Role-Based Access Control Middleware
 */

export function requireRole(allowedRoles = []) {
  return (req, res, next) => {
    const roleHeader = req.headers['x-user-role'] || 'donor';

    if (!allowedRoles.includes(roleHeader)) {
      return res.status(403).json({
        success: false,
        error: `Access denied. Requires one of roles: [${allowedRoles.join(', ')}]`
      });
    }

    next();
  };
}
