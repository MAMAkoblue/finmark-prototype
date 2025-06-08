const validateUser = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Basic email validation
  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  next();
};

module.exports = { validateUser };
