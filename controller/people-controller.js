const Pool = require("../utils/mysql");
const fetch = require("node-fetch");

const getAllPeople = async function (req, res, next) {
  const connection = await Pool.getConnection();
  try {
    const [result] = await connection.query("SELECT * FROM LAWDATA.people;");
    res.json({ result: result });
  } catch (err) {
  } finally {
    connection.release();
  }
};

module.exports = {
  getAllPeople
};
