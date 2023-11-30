const Funding = require("../../../models/Funding")

const getAllFundings = async (req, res) => {
  try {
    const fundings = await Funding.find()
    res.status(200).json({ fundings })
  } catch (error) {
    res.status(400).json({ error })
  }
}

module.exports = getAllFundings