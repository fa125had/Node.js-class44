export const postCity = (req, res) => {
  const cityName = req.body.cityName;
  res.send(cityName);
};
