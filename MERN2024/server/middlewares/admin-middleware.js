const adminMiddleware = async (req, res, next) => {
  try {
    console.log(req.data);
    // res.status(200).json({ msg: req.user.isAdmin });
    const adminRole = req.user.isAdmin;
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
