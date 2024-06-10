const User = require('../models/userModel');

exports.login = (req, res) => {
  const { User_ID, UserPassword } = req.body;
  User.findByUserID(User_ID, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      const user = results[0];
      if (UserPassword === user.UserPassword) {
        res.json({ success: true, UserType: user.UserType, UserName: user.UserName});
      } else {
        res.status(401).json({ success: false, message: 'Invalid password' });
      }
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  });
};

exports.register = (req, res) => {
  const { UserName, UserPassword } = req.body;

  const newUser = {
    UserName: UserName,
    UserPassword: UserPassword,
    UserType: "passenger"
  };

  User.create(newUser, (err, userID) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Error registering user' });
      throw err;
    }
    res.json({ success: true, message: 'User registered successfully', User_ID: userID });
  });
};
