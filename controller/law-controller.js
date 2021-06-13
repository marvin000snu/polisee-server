const Pool = require("../utils/mysql");

const search = async function (req, res, next) {
  const connection = await Pool.getConnection();
  try {
    const keyWord = req.params.key;
    const [result] = await connection.query(
      "SELECT * FROM LAWDATA.law WHERE billName LIKE '%" + keyWord + "%' "
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};

const lead = async function (req, res, next) {
  const connection = await Pool.getConnection();
  try {
    const name = req.params.name;
    const [result] = await connection.query(
      "SELECT * FROM LAWDATA.law WHERE law.lead LIKE '%" + name + "%'"
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};

const team = async function (req, res, next) {
  const connection = await Pool.getConnection();
  try {
    const name = req.params.name;
    const [result] = await connection.query(
      "SELECT * FROM LAWDATA.law WHERE team LIKE '%" + name + "%'"
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};


module.exports = {
  search,
  lead,
  team
};
