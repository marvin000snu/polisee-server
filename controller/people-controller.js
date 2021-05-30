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

const getMainAttendData  = async function (req,res,next){
  const connection = await Pool.getConnection();
  try{
    const id = req.params.id;
    const [[result]] = await connection.query("SELECT * FROM LAWDATA.people where id=?", [id]);
    res.status(200).json({
      attend : (result["main-attend"].slice(1,-1).split(",")).map((v)=>{return v.replace(/"/gi,"")}),
      notAttend : (result["main-notattend"].slice(1,-1).split(",")).map((v)=>{return v.replace(/"/gi,"")}),
      work : (result["main-work"].slice(1,-1).split(",")).map((v)=>{return v.replace(/"/gi,"")}),
      home : (result["main-home"].slice(1,-1).split(",")).map((v)=>{return v.replace(/"/gi,"")}),
    })
  }catch(err){
    console.log(err)
  }finally{
    connection.release();
  }
}

module.exports = {
  getAllPeople,
  getMainAttendData
};
