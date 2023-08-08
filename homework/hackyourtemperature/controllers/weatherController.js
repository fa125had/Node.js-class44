export const postCity = (req, res) => {
  const cityName = req.body.cityName;

  if (!cityName) {
    return res.status(400).send('Missing mandatory property. "cityName"');
  }
  res.json(cityName);
};
