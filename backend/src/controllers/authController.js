import { db } from '../models/mockDb.js';

export class AuthController {
  static getCurrentUser(req, res) {
    try {
      const user = db.getCurrentUser();
      res.json({ success: true, data: user });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static switchRole(req, res) {
    try {
      const { role } = req.body;
      if (!['donor', 'ngo', 'volunteer', 'admin'].includes(role)) {
        return res.status(400).json({ success: false, error: 'Invalid role' });
      }

      const user = db.setCurrentUserRole(role);
      res.json({ success: true, message: `Switched role to ${role}`, data: user });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static getAllUsers(req, res) {
    try {
      res.json({ success: true, data: db.users });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}
