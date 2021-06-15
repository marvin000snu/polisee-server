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

const vote = async function (req, res, next) {
  const connection = await Pool.getConnection();
  try {
    const id = req.params.id;
    const [
      [result]
    ] = await connection.query(
      "SELECT `agree`, `disagree`, `notattend`, `drop` FROM LAWDATA.law WHERE billNo  =  ?",
      [id]
    );
    res.status(200).json({
      agree: JSON.parse(result.agree),
      disagree: JSON.parse(result.disagree),
      notAttend: JSON.parse(result.notattend),
      drop: JSON.parse(result.drop)
    });
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};

const preview = async function (req, res, next) {
  const connection = await Pool.getConnection();
  try {
    const [result] = await connection.query(
      "SELECT * FROM LAWDATA.law order by rand() limit 12;"
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};

const today = async function (req, res, next) {
  const connection = await Pool.getConnection();
  try {
    const [result] = await connection.query(
      "SELECT law.group, COUNT(billNo) AS cnt FROM LAWDATA.law GROUP BY law.group;"
    );
    const [response] = await connection.query(
      "SELECT law.group, COUNT(billNo) AS cnt FROM LAWDATA.law where generalResult='수정가결' or generalResult='원안가결' or generalResult='대안반영폐기' GROUP BY law.group "
    );
    console.log(result);
    res.status(200).json({ result: result, response: response });
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};

module.exports = {
  search,
  lead,
  team,
  vote,
  preview,
  today
};
