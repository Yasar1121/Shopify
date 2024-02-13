const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2IzOTAwOThkMjgwNGZhNzE2MDMxZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA3ODE3MjE2fQ.fThbukhwi9ow6iPvP1nPmIyR1x0L5GjG_uLVRuOyKW8";
  return token;
};
