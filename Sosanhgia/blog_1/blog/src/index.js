import path from 'path';
import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import * as url from 'url';
import * as cheerio from 'cheerio';
import axios from 'axios';
import e from 'express';
import db from './coneting.js'
import schema from './schema.js';


//kết nối với mongodb
db();

const app = express();
const port = 3000; // 10.0.0.2/3000
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const $ = cheerio.load('<ul id="fruits">...</ul>');
//import { engine, handlebars } from 'express-handlebars';


//http logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//app.set('views', path.join(__dirname, "resource/views")); 
let dt = [];

const fetchData2 = async (url) => {
  //dt.push(url);
  try {
    let res = await axios.get(url);
    let $ = await cheerio.load(res.data);
  
    let name ='';
    let noidung=[];
    $(
      "div.product-info-container > a"
    ).each((i, e) => {
       name = $(e)[i].attribs.title;
    })
    // if(name!="")
    //dt.push(name);
    let nhanhieu=""
    $(
      "#product-detail > div:nth-child(4) > div:nth-child(3) > div.product-info-container > div.brand > a"
    ).each((i,e) => {
      nhanhieu= $(e)[i].attribs.title;
    })
    //dt.push(nhanhieu)
    let x="";
    $(
      "#product-short-desc "
    ).each((i,e)=>{
        //dt.push($(e).text().trim());
        // if($(e).text().trim()=="/")
        // {
          var len = $(e)[i].children[0].next.children.length;
          //noidung.push(len);
          for(var j = 0; j < len; j++) {
            
            //console.log("child =>>> ", $(e)[i].children[0].next.children[j].data);
            if($(e)[i].children[0].next.children[j].data != null)
              noidung.push($(e)[i].children[0].next.children[j].data);
          }
    })

    let sosanh = [];
    $(
      "#product-merchant-list > div:nth-child(1) > div.first-product.clearfix"
    ).each((i,e) => {
        let len = $(e)[i].children.length;
        let res= $(e)[i].children[1].attribs['data-src'];
        let res1=$(e)[i].children[3].children[0].data;
        let res2=$(e)[i].children[3].children[1].children[2].data;
        let res3=$(e)[i].children[5].children[1].attribs['data-src'];
        let res4=$(e)[i].children[7].children[1].children[0].data;
        let res5=$(e)[i].children[7].children[3].children[0].data;
        let ob ={
          hinh: res,
          tendt: res1,
          nhacc: res2,
          hinhnoiban: res3,
          gia: res4,
          capnhat: res5
        }
       sosanh.push(ob); 
    })

    if(sosanh.length==0)
    {
      $(
        "#product-merchant-list > div.merchant-item > div.first-product.clearfix"
      ).each((i,e) => {
          let len = $(e)[i].children.length;
          let res= $(e)[i].children[1].attribs['data-src'];
          let res1=$(e)[i].children[3].children[0].data;
          let res2=$(e)[i].children[3].children[1].children[2].data;
          let res3=$(e)[i].children[5].children[1].attribs['data-src'];
          let res4=$(e)[i].children[7].children[1].children[0].data;
          let res5=$(e)[i].children[7].children[3].children[0].data;
          let ob ={
            hinh: res,
            tendt: res1,
            nhacc: res2,
            hinhnoiban: res3,
            gia: res4,
            capnhat: res5
          }
         sosanh.push(ob); 
      })
    }
    let oj={
      ten: name,
      thuonghieu: nhanhieu,
      cauhinh: noidung,
      gia: sosanh
    }
    dt.push(oj);
    let sosanh1=[];
    $(
      "#sub-pm-list-98"
    ).each((i,e)=>{
        //sosanh1.push($(e)[i].children.length);
        let len = $(e)[i].children.length;
        for(let j=1;j<len;j+=2)
        {
          let res=$(e)[i].children[j].children[1].attribs['data-src'];
          let res1=$(e)[i].children[j].children[3].children[0].data;
          let res2=$(e)[i].children[j].children[3].children[2].children[0].data
          let res3=$(e)[i].children[j].children[5].children[1].attribs['data-src'];
          let res4=$(e)[i].children[j].children[7].children[1].children[0].data;
          let res5=$(e)[i].children[j].children[7].children[3].children[0].data;
          let ob ={
            hinh: res,
            tendt: res1,
            nhacc: res2,
            hinhnoiban: res3,
            gia: res4,
            capnhat: res5
          }
          sosanh.push(ob);
        }
    })
    //dt.push(sosanh1);
    // if(noidung.length!=0 && name!='')
    // {
        
    //     let ob = {
    //         ten: name,
    //         //cauhinh: noidung,
    //         //giasosanh: sosanh
    //     }
    //     dt.push(ob);
    // }
    // let ob = {
    //   ten: name,
    //   //cauhinh: noidung,
    //   //giasosanh: sosanh
    // }
    //dt.push(ob);
    //dt.push(name);

  } catch (error) {
    console.log(error);
  }
}

const fetchData = async () =>{
  try {
      //let res = await axios.get('https://diemthi.tuyensinh247.com/diem-chuan.html');
      let res = await axios.get('https://www.sosanhgia.com/t6-dien-thoai-di-dong.html');
      let $= await cheerio.load(res.data);
      const link = $("a")
      .map((i,link)=>{
        //dt.push(link.attribs);
        
        if(link.attribs.id!=null)
        fetchData2(link.attribs.href);
        
        
      }).get(); 
      //console.log(link);
  } catch (error) {
      console.log(error);
  }
}
fetchData();
//fetchData1();

app.get('/crawldata', async (req,res)  =>{
  // for(let i=0;i<dt.length;i++)
  // {
  //   const data= new schema(dt[i]);
  //   await data.save();
  // }
  res.send(dt);
})

app.get('/home', (req, res,next) => {
  schema.find({})
        .then(schema => {
            schema= schema.map(schema => schema.toObject());
            res.json(schema);
        }) 
    .catch(next);
})

/* app.get('/news', (req, res) => {
  res.render('news');   
})
 */
// ip : 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 

//#product-merchant-list > div:nth-child(1) > div.first-product.clearfix > div.price-wrapper > div.product-price