const getImage = (req, res) => {
  res.status(200).json({ message: 'ok' });
};

const uploadImage = (req, res) => {
  res.status(201).json({ message: 'image uploaded' });
};

module.exports = {
  getImage,
  uploadImage,
};
