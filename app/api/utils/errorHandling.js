export default function (req, res, next) {
  res.error = function (error) {
    res.status(500);
    res.json({error});
  };

  next();
}
