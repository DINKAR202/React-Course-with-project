const adminMiddleware = async (req, res, next) => {
  try {
    console.log(req.data);
    // res.status(200).json({ msg: req.user.isAdmin });
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      return res
        .status(403)
        .json({ error: "Access denied. User is not an admin." });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
