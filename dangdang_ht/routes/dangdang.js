var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/banner', function(req, res, next) {
 var arr=[
    "http://img54.ddimg.cn/186920113075064_y.jpg",
    "http://img56.ddimg.cn/178320113869846_y.jpg",
    "http://img56.ddimg.cn/220170073632986_y.jpg",
 ]
 res.send(arr)
});


/* GET home 获取分类 */
router.get('/categoryList', function(req, res, next) {
   var arr=[
      "http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png",
      "http://img63.ddimg.cn/upload_img/00702/B/icon-jrcx-1559563476.png",
      "http://img63.ddimg.cn/upload_img/00528/000/7chaoshi-1545121233.png",
      "http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png",
      "http://img63.ddimg.cn/upload_img/00702/B/icon-jrcx-1559563476.png",
      "http://img63.ddimg.cn/upload_img/00528/000/7chaoshi-1545121233.png",
      "http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png",
      "http://img63.ddimg.cn/upload_img/00702/B/icon-jrcx-1559563476.png",
      "http://img63.ddimg.cn/upload_img/00528/000/7chaoshi-1545121233.png",
      "http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png",
    
   ]
   res.send(arr)
  });

  router.get("/msproduct",function(req, res, next){
   var arr=[
      {
         imgurl:"http://img3m8.ddimg.cn/24/30/1574886678-1_h_2.jpg",
         desc:"手套1元秒杀  数量有限 抢完即止男女手套秋冬季加绒加厚保暖触屏防水防风骑车户外手套",
         yprice:1,
         price:38.00

      },
      {
         imgurl:"http://img3m0.ddimg.cn/84/10/1193412810-1_h_6.jpg",
         desc:"幼儿英语启蒙绘本1-10 共10册",
         yprice:16.5,
         price:150.00

      },
      {
         imgurl:"http://img3m8.ddimg.cn/24/30/1574886678-1_h_2.jpg",
         desc:"手套1元秒杀  数量有限 抢完即止男女手套秋冬季加绒加厚保暖触屏防水防风骑车户外手套",
         yprice:1,
         price:38.00

      },
      {
         imgurl:"http://img3m0.ddimg.cn/84/10/1193412810-1_h_6.jpg",
         desc:"幼儿英语启蒙绘本1-10 共10册",
         yprice:16.5,
         price:150.00

      },
      {
         imgurl:"http://img3m8.ddimg.cn/24/30/1574886678-1_h_2.jpg",
         desc:"手套1元秒杀  数量有限 抢完即止男女手套秋冬季加绒加厚保暖触屏防水防风骑车户外手套",
         yprice:1,
         price:38.00

      },
      {
         imgurl:"http://img3m0.ddimg.cn/84/10/1193412810-1_h_6.jpg",
         desc:"幼儿英语启蒙绘本1-10 共10册",
         yprice:16.5,
         price:150.00

      },
      {
         imgurl:"http://img3m8.ddimg.cn/24/30/1574886678-1_h_2.jpg",
         desc:"手套1元秒杀  数量有限 抢完即止男女手套秋冬季加绒加厚保暖触屏防水防风骑车户外手套",
         yprice:1,
         price:38.00

      },
      {
         imgurl:"http://img3m0.ddimg.cn/84/10/1193412810-1_h_6.jpg",
         desc:"幼儿英语启蒙绘本1-10 共10册",
         yprice:16.5,
         price:150.00

      },
      {
         imgurl:"http://img3m8.ddimg.cn/24/30/1574886678-1_h_2.jpg",
         desc:"手套1元秒杀  数量有限 抢完即止男女手套秋冬季加绒加厚保暖触屏防水防风骑车户外手套",
         yprice:1,
         price:38.00

      },
      {
         imgurl:"http://img3m0.ddimg.cn/84/10/1193412810-1_h_6.jpg",
         desc:"幼儿英语启蒙绘本1-10 共10册",
         yprice:16.5,
         price:150.00

      }


   ]
   res.send(arr)
  })



  router.get("/floorwarp",function(req, res, next){
   var arr=[
      {
         dtit:"文艺小情节",
         dcen:"书中大情怀",
         dimgurl:"http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png"
      },
      {
         dtit:"电子书",
         dcen:"每满20减8",
         dimgurl:"http://img60.ddimg.cn/ddreader/dangebook/2019bd500x500.jpg"
      },
      {
         dtit:"万种童书",
         dcen:"阅读陪伴成长",
         dimgurl:"http://img60.ddimg.cn/upload_img/00796/1/10.28-1575272475.png"
      },
      {
         dtit:"文艺小情节",
         dcen:"书中大情怀",
         dimgurl:"http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png"
      },
      {
         dtit:"电子书",
         dcen:"每满20减8",
         dimgurl:"http://img60.ddimg.cn/ddreader/dangebook/2019bd500x500.jpg"
      },
      {
         dtit:"万种童书",
         dcen:"阅读陪伴成长",
         dimgurl:"http://img60.ddimg.cn/upload_img/00796/1/10.28-1575272475.png"
      },
      {
         dtit:"文艺小情节",
         dcen:"书中大情怀",
         dimgurl:"http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png"
      },
      {
         dtit:"电子书",
         dcen:"每满20减8",
         dimgurl:"http://img60.ddimg.cn/ddreader/dangebook/2019bd500x500.jpg"
      },
      {
         dtit:"万种童书",
         dcen:"阅读陪伴成长",
         dimgurl:"http://img60.ddimg.cn/upload_img/00796/1/10.28-1575272475.png"
      }

   ]
   res.send(arr)
})




router.get("/bookCateList",function(req, res, next){
   var arr=[
      {
         id:1,
         name:"图书"
      },
      {
         id:2,
         name:"童书"
      },
      {
         id:3,
         name:"旧书/拍卖"
      },
      {
         id:4,
         name:"女装"
      },
      {
         id:5,
         name:"手机数码"
      },
      {
         id:6,
         name:"图书"
      },
      {
         id:7,
         name:"童书"
      },
      {
         id:8,
         name:"旧书/拍卖"
      },
      {
         id:9,
         name:"女装"
      },
      {
         id:10,
         name:"手机数码"
      },
      {
         id:11,
         name:"图书"
      },
      {
         id:12,
         name:"童书"
      },
      {
         id:13,
         name:"旧书/拍卖"
      },
      {
         id:14,
         name:"女装"
      },
      {
         id:15,
         name:"手机数码"
      },
      {
         id:16,
         name:"图书"
      },
      {
         id:17,
         name:"童书"
      },
      {
         id:18,
         name:"旧书/拍卖"
      },
      {
         id:19,
         name:"女装"
      },
      {
         id:10,
         name:"手机数码"
      },
      {
         id:21,
         name:"图书"
      },
      {
         id:22,
         name:"童书"
      },
      {
         id:23,
         name:"旧书/拍卖"
      },
      {
         id:24,
         name:"女装"
      },
      {
         id:25,
         name:"手机数码"
      },

     
      
   ]
   res.send(arr)
})


module.exports = router;