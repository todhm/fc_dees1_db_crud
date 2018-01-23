var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '회원관리' });
});
/*req:요청, res:응답, next: */
router.get('/joinform',function(req,res,next){
  res.render('joinform.ejs',{title:'회원가입'})
});

router.post("/join",function(req,res,next){
  var id = req.body.id; 
  console.log(req.body);
  res.send("OK");
})
module.exports = router;
