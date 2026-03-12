const axios = require('axios');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const { url } = req.query;
  if (!url) {
    return res.json({ data: {} });
  }

  try {
    const { data } = await axios.get('https://api.17api.com/api/douyin/parse', {
      params: { url }
    });

    if (data.code === 200 && data.data?.wm_url) {
      return res.json({
        data: { url: data.data.wm_url }
      });
    }
  } catch (e) {}

  res.json({ data: {} });
};
