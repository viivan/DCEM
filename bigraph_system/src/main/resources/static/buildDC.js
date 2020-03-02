//CopyRight@liwei 2005/11
//动态删除行的函数还没有完成。注意innerHTML里面的控件代码属性赋值的时候不要使用引号
$(document).ready(function () {
  $("#submit").click(function () {
    // $("#menu").hide();
    // $("h2").hide();
    draw();
    //say();
  });
});
// 声明一下全局timer定时器, 方便再次生成的时候, 可以清除上一个timer
var timer;
function addLine() {
  var newLine = Service.rows.length;
  var row = Service.insertRow(newLine);
  var col = row.insertCell(0);
  col = row.insertCell(0);
  col.innerHTML = "<input style=width:100px;  type=text size=8>";
  col = row.insertCell(1);
  col.innerHTML = "<input  style= width:100px; type=text size=8>";
  col = row.insertCell(2);
  col.innerHTML = "<input  style= width:100px; type=text size=8>";
  col = row.insertCell(3);
  col.innerHTML = "<input style= width:100px; type=text size=8>";
  col = row.insertCell(4);
  col.innerHTML = "<input style= width:100px; type=text size=8>";
  return newLine;
}

function addLine1() {
  var newLine = port.rows.length;
  var row = port.insertRow(newLine);
  var col = row.insertCell(0);
  col = row.insertCell(0);
  col.innerHTML = "<input style= width:100px; type=text size=10>";
  col = row.insertCell(1);
  col.innerHTML = "<input style= width:100px; type=text size=10>";
  col = row.insertCell(2);
  col.innerHTML = "<input style= width:100px; type=text size=10>";
  col = row.insertCell(3);
  col.innerHTML = "<select style= width:100px; id = Ctrl><option value =input>input</option><option value =output>output</option> <option value=callput>callput</option></select>";
  col = row.insertCell(4);
  col.innerHTML = "<select style= width:100px; id = cL><option value =null></option><option value =outerlink>outerlink</option><option value=innerlink>innerlink</option></select>";
  return newLine;
}

function addLine2() {
  var newLine = edge.rows.length;
  var row = edge.insertRow(newLine);
  var col = row.insertCell(0);
  col = row.insertCell(0);
  col.innerHTML = "<input style= width:100px; type=text size=8>";
  col = row.insertCell(1);
  col.innerHTML = "<input style= width:100px; type=text size=8>";
  return newLine;
}

function keyDwonEvent() {
  //alert(event.keyCode);
  var newLine;
  var txt;
  if (event.keyCode == 13 && event.ctrlKey) {
    newLine = addLine();
  }
  /*
  txt = "line"+newLine+"startTime"    
  txt.setFocus;alert(txt);*/
}

function delLine() {
  var i;
  var count;
  count = planTable.rows.length;
  if (count > 2) {
    planTable.deleteRow(planTable.rows.length - 1)
    for (i = 0; i < count - 1; i++) {
      //if(document.chk[i].checked){
      //alert("aa");
      //}
    }
  }
}

function draw() {
  //获得服务信息
  var form = document.getElementById("Service");
  var tagElementSi = form.getElementsByTagName("input");
  //端口信息;
  var form1 = document.getElementById("port");
  var tagElementPi = form1.getElementsByTagName("input");
  var tagElementPc = form1.getElementsByTagName("select");
  //alert("aa");
  //连接信息;
  var form2 = document.getElementById("edge");
  var tagElementLi = form2.getElementsByTagName("input");
  //区域
  var form3 = document.getElementById("root");
  var tagElementL = form3.getElementsByTagName("input");

  function gets(str) {
    var x = get_point(str);
    var a = "";
    for (var j = 0; j < str.length; j++) {
      if (j < x) {
        a = a + str[j];
      }
    }
    return a;
  }

  function Port() {
    //端口ID，名称，类型，控制属性（输入(黄)，输出（绿），输入/输出（红））
    var pI;
    var pN;
    var pT;
    var pC;
    var innername;
    var outername;
  }
  //服务
  function Service() {
    var name;
    //内部站点
    var site;
    var sitename;
    //子节点数目
    var inserve;
    //父节点
    var fatherNode;
    //端口数量
    var port_number;
    //端口属性
    var p;
    //控制属性；
    var CN;
    var CT;
    var U;
    var DL;
    var CN;
    //位置属性
    var root_number; //站点号
  }
  //站点；
  function Root() {
    var osite;
    var ositename;
    var s_number; //总服务数量
    var Nofacir; //最外圈的服务
  }
  //边连接
  function EdgeLink() {
    var start;
    var end;
  }
  //连接图
  //function LinkGraph(){var edgelink = new EdgeLink();var innername,outername;}
  //位置图；
  //function PlaceGraph(){var root = new Root() ;var site;}
  //数据细胞；
  function DC() {
    var S_N; //服务数量；
    var E_N; //边数量；
    var RootNumber; //区域数量;
    var sitenumber; //站点数量
  }

  function circle() {
    var Id;
    //坐标，半径
    var x;
    var y;
    var r;
    //端口坐标
    var pointX;
    var pointY;
  }

  function sitepoint() {
    var X;
    var Y;
    var sp;
  }

  function get_num(str) {
    var num = "";
    for (var k = 0; k < str.length; k++) {
      if (str[k] >= '0' && str[k] <= '9') {
        num += str[k];
      }
    }
    return num;
  }
  //断点
  function get_point(str) {
    for (var j = 0; j < str.length; j++) {
      if (str[j] == '.') {
        return j;
      }
    }
  }
  //得到服务号
  function getservice(str) {
    var x = get_point(str);
    var a = "";
    for (var j = 0; j < str.length; j++) {
      if (j < x) {
        a = a + str[j];
      }
    }
    a = get_num(a);
    return a;
  }
  //获得端口号
  function getport(str) {
    var x = get_point(str);
    var b = "";
    for (var j = 0; j < str.length; j++) {
      if (j > x) {
        b = b + str[j];
      }
    }
    b = get_num(b);
    return b;
  }
  var Dc = new DC();
  Dc.S_N = (tagElementSi.length - 1) / 4; //服务数量

  

  //alert(Dc.S_N);
  Dc.RootNumber = 1;
  //alert(getservice("s3.port1"));
  var s = new Array();
  var cir = new Array();
  var root = new Array();
  var siteP = new Array();
  var link = new Array();
  Dc.sitenumber = 0;
  for (var i = 0; i < Dc.RootNumber; i++) {
    root[i] = new Root();
    if (tagElementL[1].value != "") {
      root[i].osite = true;
      root[i].ositename = tagElementL[1].value;
      //alert(root[i].ositename );
      Dc.sitenumber++;
    }
    root[i].Nofacir = 0;
  }
  for (var i = 0; i <= Dc.S_N; i++) {
    cir[i] = new circle();
    cir[i].pointX = new Array();
    cir[i].pointY = new Array();
    s[i] = new Service();
    s[i].p = new Array();
    s[i].fatherNode = -1;
    s[i].root_number = 0;
    s[i].port_number = 0;
    s[i].inserve = 0;
  }
  // alert(Dc.S_N);
  for (var i = 1; i <= Dc.S_N; i++) {
    var j = (i - 1) * 5;
    if (tagElementSi[j].value == "") break;
    s[i].name = tagElementSi[j].value;
    if (tagElementSi[j + 2].value == "") {
      root[0].Nofacir++;
    } else {
      s[i].fatherNode = tagElementSi[j + 2].value;
    }
    if (tagElementSi[j + 3].value != "") {
      s[i].inserve = tagElementSi[j + 3].value;
    }
    if (tagElementSi[j + 4].value != "") {
      s[i].site = true;
      s[i].sitename = tagElementSi[j + 4].value;
      Dc.sitenumber++;
    }
    //alert(s[i].name);
    //alert(s[i].fatherNode);
    //alert(s[i].inserve);
    //alert(s[i].sitename);
  }
  for (var i = 0; i <= Dc.sitenumber; i++) {
    siteP[i] = new sitepoint();
  }
  var portN = (tagElementPi.length) / 3;
  //alert(portN);
  for (var i = 1; i <= portN; i++) {
    for (var j = 1; j <= Dc.S_N; j++) {
      if (s[j].name == gets(tagElementPi[(i - 1) * 3].value)) {
        //alert(getport(tagElementPi[(i-1)*3+1].value));
        s[j].p[getport(tagElementPi[(i - 1) * 3].value)] = new Port();
        //alert("check");
        s[j].p[getport(tagElementPi[(i - 1) * 3].value)].pI = tagElementPi[(i - 1) * 3].value;
        //alert(s[j].p[getport(tagElementPi[(i-1)*3+1].value)].pI);
        s[j].p[getport(tagElementPi[(i - 1) * 3].value)].pN = tagElementPi[(i - 1) * 3 + 1].value;
        //alert("check");
        s[j].p[getport(tagElementPi[(i - 1) * 3].value)].pT = tagElementPi[(i - 1) * 3 + 2].value;
        //alert("check");
        var index = tagElementPc[(i - 1) * 2].selectedIndex;
        //alert(tagElementPc[(i-1)*2].options[index].value);
        s[j].p[getport(tagElementPi[(i - 1) * 3].value)].pC = tagElementPc[(i - 1) * 2].options[index].value;
        //alert(s[j].p[getport(tagElementPi[(i-1)*3+1].value)].pC);
        s[j].port_number++;
        var index2 = tagElementPc[(i - 1) * 2 + 1].selectedIndex;
        if (tagElementPc[(i - 1) * 2 + 1].options[index2].value == "innerlink") {
          s[j].p[getport(tagElementPi[(i - 1) * 3].value)].innername = true;
        } else if (tagElementPc[(i - 1) * 2 + 1].options[index2].value == "outerlink") {
          s[j].p[getport(tagElementPi[(i - 1) * 3].value)].outername = true;
        }
      }
    }
  }
  Dc.E_N = (tagElementLi.length) / 2;
  //alert(Dc.E_N);
  for (var i = 0; i < Dc.E_N; i++) {
    link[i] = new EdgeLink();
    if (tagElementLi[(i * 2)].value == "") {
      //Dc.E_N = 0;
      break;
    }
    link[i].start = tagElementLi[(i * 2)].value;
    link[i].end = tagElementLi[(i * 2 + 1)].value;
  }

  // debugger;
  // console.log(s);
  // console.log(cir);
  // console.log(root);
  // console.log(siteP);
  // console.log(link);
  // console.log(root);
  // ----------------------------------开始声明一个json 用于转换为xml
  var doc = {};
  doc.S = {};
  doc.S.s = new Array();
  doc.S._description = "services";

  // S标签
  for (var i = 1; i < s.length; i++) {
    doc.S.s[i - 1] = new Service();
    doc.S.s[i - 1].__text = s[i].name != undefined ? s[i].name : "";
  }
  // Ctrl标签
  doc.Ctrl = {
    _description: "mapping",
    s: {}
  };
  
  // ctrl节点下内容
  doc.Ctrl.s = new Array();
  for (var i = 1; i < s.length; i++) {
    doc.Ctrl.s[i - 1] = {};
    doc.Ctrl.s[i - 1]._flag = s[i].name != undefined ? s[i].name : "";
    doc.Ctrl.s[i - 1].C = {
      _description: "a dervice control",
      CT: s[i].CT != undefined ? s[i].CT : "",
      U: s[i].U != undefined ? s[i].U : "",
      CN: s[i].CN != undefined ? s[i].CN : "",
      CL: {
        _description: "control level",
        DL: s[i].DL != undefined ? s[i].DL : "",
        CN: s[i].CN != undefined ? s[i].CN : ""
      },
      P: {
        _description: "a service Ports",
      }
    }
    doc.Ctrl.s[i - 1].C.P.p = new Array();
    for (var j = 1; j < s[i].p.length; j++) {
      var pData = {
        pC: s[i].p[j].pC != undefined ? s[i].p[j].pC : "",
        pI: s[i].p[j].pI != undefined ? s[i].p[j].pI : "",
        pN: s[i].p[j].pN != undefined ? s[i].p[j].pN : "",
        pT: s[i].p[j].pT != undefined ? s[i].p[j].pT : "",
        _flag: s[i].p[j].pI != undefined ? s[i].p[j].pI : ""
      }
      doc.Ctrl.s[i - 1].C.P.p[j - 1] = pData;
    }
  }
  // cL标签
  doc.cL = {
    edgeLink: new Array()
  }
  for (var i = 0; i < link.length; i++) {
    doc.cL.edgeLink[i] = {};
    doc.cL.edgeLink[i].linkPort = new Array();
    doc.cL.edgeLink[i].linkPort[0] = link[i].start != undefined ? link[i].start : "";
    doc.cL.edgeLink[i].linkPort[1] = link[i].end != undefined ? link[i].end : "";
  }
  //cP标签
  doc.cP = {
    root: new Array()
  }
  for (var i = 1; i < s.length; i++) {
    if (s[i].sitename != undefined && s[i].sitename != null && s[i].sitename != "") {
      doc.cP.root[doc.cP.root.length] = {
        s: {
          _flag: "s" + i,
          site: s[i].sitename != undefined ? s[i].sitename : "",
          s1: new Array()
        }
      }
    }
  }
  for (var i = 1; i < s.length; i++) {
    if (s[i].fatherNode != -1) {
      var add = false;
      for (var j = 0; j < doc.cP.root.length; j++) {
        if (doc.cP.root[j].s._flag == "s" + s[i].fatherNode) {
          doc.cP.root[j].s.s1[doc.cP.root[j].s.s1.length] = {
            _flag: "s" + i
          };
          add = true;
          break;
        }
      }
      if (!add) {
        doc.cP.root[doc.cP.root.length] = {
          s: {
            _flag: "s" + s[i].fatherNode,
            s1: [{
              _flag: "s" + i
            }]
          }
        }
      }
    }
  }
  // 设置外层的site
  for (var j = 0; j < root.length; j++) {
    if (root[j].osite != undefined && root[j].osite == true) {
      if (doc.cP.root == undefined) {
        doc.cP.root = new Array();
      }
      if (doc.cP.root[j] == undefined) {
        doc.cP.root[j] = {};
      }
      doc.cP.root[j].site = {
        __text: root[j].ositename
      }
    }
  }

  // 设置innerName
  // doc.Ctrl.s = new Array();
  doc.cL.innerLink = {};
  doc.cL.innerLink.innerName = new Array();
  for (var i = 1; i < s.length; i++) {
    for (var j = 1; j < s[i].p.length; j++) {
      if (s[i].p[j].innername === true) {
        var name = doc.Ctrl.s[i - 1].C.P.p[j - 1].pI;
        doc.cL.innerLink.innerName[doc.cL.innerLink.innerName.length] = name;
      }
    }
  }

  var x2js = new X2JS();
  var jsonObj = doc;
  var xmlAsStr = x2js.json2xml_str(jsonObj);

  xmlAsStr = "<doc>" + xmlAsStr + "</doc>";
  var saveXML = new Blob([xmlAsStr], { type: "xml;charset=utf-8" })
  var fileName = $("#fileName").val();
  fileName = fileName + ".xml";
  saveAs(saveXML, fileName);
  // if (timer != undefined) {
  //   window.clearInterval(timer);
  // }
  // timer = setInterval(function () {
  //   var filespec = "./saveXML/" + fileName; 
  //   $("#showXMLiframe").attr("src", filespec);
  // }, 1000);

  var filespec = "./saveXML/" + fileName;
  $("#showXMLiframe").attr("src", filespec);


  //tagElementPi.length;
  //tagElementPs.length;
  //s alert("check");
  //画偶图  
  var elm = document.getElementById("my-canves");
  var paper = Raphael(elm, 12000, 8000);
  var x = 50,
    y = 100,
    l = 200,
    w = 240;
  dashed = {
    fill: "none",
    str2oke: "#D3D3D3",
    "stroke-dasharray": "- "
  }; //虚线
  sitecoler = {
    fill: "#D3D3D3",
    str2oke: "#000",
    "stroke-dasharray": "- "
  }; //站点
  circlrcoler = {
    stroke: "#87CEFA"
  }; //服务
  yellow = {
    fill: "#FFFF00"
  };
  green = {
    fill: "#00FF00"
  };
  red = {
    fill: "#FF0000"
  };
  var deg = Math.PI / 180; //弧度
  //00FF00 绿 FFFF00黄  FF0000红  控制属性（输入(黄)，输出（绿），输入/输出（红））
  var Point = new Array();
  //var cir = paper.circle(80,140,20).attr(circlrcoler);
  //alert(Dc.sitenumber);
  //不考虑过多服务，嵌套只考虑一层
  for (var i = 0; i < Dc.RootNumber; i++) {
    Point[i] = x;
    paper.rect(x, y, l, w).attr(dashed);
    paper.text(x + 10, 110, i).attr({
      fill: "#000",
      "font-size": 18
    });
    //只有一个服务
    if (root[i].Nofacir == 1) {
      for (var j = 1; j <= Dc.S_N; j++) {
        if (s[j].root_number == i && s[j].fatherNode == -1) {
          cir[j].Id = s[j].name;
          cir[j].x = (x + x + l) / 2;
          cir[j].y = (y + y + w) / 2
          if (s[j].inserve <= 1) {
            cir[j].r = 30;
            paper.circle(cir[j].x, cir[j].y, cir[j].r).attr(circlrcoler);
            //paper.circle(cir[j].x,cir[j].y ,cir[j].r-30).attr(circlrcoler);
            paper.text(cir[j].x - cir[j].r, cir[j].y - cir[j].r, s[j].name).attr({
              fill: "#87CEFA",
              "font-size": 12
            });
            //只考虑嵌套服务只有一个
            for (var k = 1; k <= Dc.S_N; k++) {
              if (s[k].fatherNode == s[j].name) {
                cir[k].Id = s[k].name;
                cir[k].x = cir[j].x;
                cir[k].y = cir[j].y;
                cir[k].r = cir[j].r / 2;
                paper.circle(cir[j].x, cir[j].y, cir[k].r).attr(circlrcoler);
                paper.text(cir[k].x - cir[j].r / 2, cir[j].y - cir[j].r / 2, s[k].name).attr({
                  fill: "#87CEFA",
                  "font-size": 10
                });
                //alert(cir[k].x);
              }
            }
          }
          //多个嵌套服务
          else {
            cir[j].r = 60;
            paper.circle(cir[j].x, cir[j].y, cir[j].r).attr(circlrcoler);
            paper.text(cir[j].x - cir[j].r, cir[j].y - cir[j].r, s[j].name).attr({
              fill: "#87CEFA",
              "font-size": 12
            });
            //只考虑嵌套服务只有一个
            var cot = 0;
            var gap = 240 / (s[j].inserve - 1);
            //alert(gap);
            for (var k = Dc.S_N; k >= 1; k--) {
              if (s[k].fatherNode == s[j].name) {
                cir[k].Id = s[k].name;
                cir[k].x = cir[j].x + (cir[j].r / 2) * Math.sin((240 + gap * cot) * deg);
                cir[k].y = cir[j].y - (cir[j].r / 2) * Math.cos((240 + gap * cot) * deg);
                cir[k].r = cir[j].r / 5;
                paper.circle(cir[k].x, cir[k].y, cir[k].r).attr(circlrcoler);
                paper.text(cir[k].x, cir[k].y + cir[k].r + 5, s[k].name).attr({
                  fill: "#87CEFA",
                  "font-size": 10
                });
                cot++;
                //alert(cir[k].x);
              }
            }
          }
        }
      }
    }
    //多个服务内嵌套多个服务未写;
    else if (root[i].Nofacir > 1) {
      var Li = (l - 20) / root[i].Nofacir;
      var Wi = (w - 20) / root[i].Nofacir;
      var xi = (x + 20 + Li + x) / 2;
      var yi = (y + 20 + Wi + y) / 2;
      for (var j = 1; j <= Dc.S_N; j++) {
        if (s[j].root_number == i && s[j].fatherNode == -1) {
          cir[j].Id = s[j].name;
          cir[j].x = xi;
          cir[j].y = yi;
          cir[j].r = Math.min(Wi / 3, 30);
          paper.circle(xi, yi, cir[j].r).attr(circlrcoler);
          paper.text(xi - cir[j].r + 5, yi - cir[j].r, s[j].name).attr({
            fill: "#87CEFA",
            "font-size": 12
          });
          //只考虑嵌套服务只有一个
          for (var k = 1; k <= Dc.S_N; k++) {
            if (s[k].fatherNode == j) {
              cir[k].Id = s[k].name;
              cir[k].x = xi;
              cir[k].y = yi;
              cir[k].r = cir[j].r / 2;
              paper.circle(xi, yi, cir[k].r).attr(circlrcoler);
              paper.text(cir[k].x - cir[j].r / 2, cir[j].y - cir[j].r / 2, s[k].name).attr({
                fill: "#87CEFA",
                "font-size": 10
              });
              //alert(cir[k].x);
            }
          }
          xi = xi + Li;
          yi = yi + Wi;
        }
      }
    }
    if (root[i].osite == true) {
      //alert("check");
      paper.rect(x + l - 30, y + w - 20, 25, 15).attr(sitecoler);
      siteP[get_num(root[i].ositename)].X = x + l - 30;
      siteP[get_num(root[i].ositename)].Y = y + w - 20;
      //alert(siteP[get_num(root[i].ositename)].X);
      paper.text(siteP[get_num(root[i].ositename)].X + 12.5, siteP[get_num(root[i].ositename)].Y + 8, get_num(root[i].ositename)).attr({
        fill: "#000",
        "font-size": 15
      });
      //alert(get_num(root[i].ositename));
    }
    //站点间间隔80;
    x = x + l + 80;
  }
  //00FF00 绿 FFFF00黄  FF0000红
  //画点
  for (var i = 1; i <= Dc.S_N; i++) {
    var angle1 = 225;
    var angle2 = 315;
    var angle3 = 270;
    var angle4 = 90;
    var angle5 = 360;
    var angle6 = 45;
    var angle7 = 135;
    var angle8 = 180;
    var xi = cir[i].x;
    var yi = cir[i].y;
    var r = cir[i].r;
    //alert(s[i].fatherNode);
    for (var j = 1; j <= s[i].port_number; j++) {
      //alert(s[i].p[j].pI);
      if (s[i].fatherNode == -1) {
        if (s[i].p[j].pC == "input") {
          //input端口 + 内部接口 在225-270;
          if (s[i].p[j].innername == true) {
            paper.circle(xi + r * Math.sin(angle1 * deg), yi - r * Math.cos(angle1 * deg), 2).attr(yellow);
            cir[i].pointX[j] = xi + r * Math.sin(angle1 * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle1 * deg);
            angle1 = angle1 + 10;
          }
          //inpu端口t + 外部接口 在315-360;
          else if (s[i].p[j].outername == true) {
            paper.circle(xi + r * Math.sin(angle2 * deg), yi - r * Math.cos(angle2 * deg), 2).attr(yellow);
            cir[i].pointX[j] = xi + r * Math.sin(angle2 * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle2 * deg);
            angle2 = angle2 + 10;
          }
          //纯input端口 270-315
          else {
            paper.circle(xi + r * Math.sin(angle3 * deg), yi - r * Math.cos(angle3 * deg), 2).attr(yellow);
            //alert(r*Math.cos(angle3*deg));
            cir[i].pointX[j] = xi + r * Math.sin(angle3 * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle3 * deg);
            angle3 = angle3 + 10;
          }
        } else if (s[i].p[j].pC == "output") {
          //output端口 + 内部接口 在90-135;
          if (s[i].p[j].innername == true) {
            paper.circle(xi + r * Math.sin(angle4 * deg), yi - r * Math.cos(angle4 * deg), 2).attr(green);
            cir[i].pointX[j] = xi + r * Math.sin(angle4 * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle4 * deg);
            angle4 = angle4 + 10;
          }
          //output端口 + 外部接口 在0-45;
          else if (s[i].p[j].outername == true) {
            paper.circle(xi + r * Math.sin(angle5 * deg), yi - r * Math.cos(angle5 * deg), 2).attr(green);
            cir[i].pointX[j] = xi + r * Math.sin(angle5 * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle5 * deg);
            angle5 = angle5 + 10;
          }
          //output端口45-90;
          else {
            paper.circle(xi + r * Math.sin(angle6 * deg), yi - r * Math.cos(angle6 * deg), 2).attr(green);
            cir[i].pointX[j] = xi + r * Math.sin(angle6 * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle6 * deg);
            angle6 = angle6 + 10;
          }
        }
        //callput端口根据连接的站点确定位置
        else {
          var angle, flag = false;
          //alert(s[i].p[j].pI);
          //alert(flag);
          if (s[i].p[j].innername == true) {
            //alert("check");
            for (var k = 0; k < Dc.E_N; k++) {
              //alert(Dc.E_N);
              if (link[k].start == s[i].p[j].pI) {
                if (s[i].root_number > s[getservice(link[k].end)].root_number) {
                  angle = angle4;
                  angle4 = angle4 + 10;
                  flag = true;
                  break;
                } else if (s[i].root_number < s[getservice(link[k].end)].root_number) {
                  angle = angle1;
                  angle1 = angle1 + 10;
                  flag = true;
                  break;
                } else {
                  angle = angle1;
                  angle1 = angle1 + 10;
                  flag = true;
                  break;
                }
              } else if (link[k].end == s[i].p[j].pI) {
                if (s[i].root_number > s[getservice(link[k].start)].root_number) {
                  angle = angle4;
                  angle4 = angle4 + 10;
                  flag = true;
                  break;
                } else if (s[i].root_number < s[getservice(link[k].start)].root_number) {
                  angle = angle1;
                  angle1 = angle1 + 10;
                  flag = true;
                  break;
                } else {
                  angle = angle1;
                  angle1 = angle1 + 10;
                  flag = true;
                  break;
                }
              }
              //alert(flag);
              if (flag == true) {
                break;
              }
            }
            if (flag == false) {
              angle = angle8;
              angle8 = angle8 + 10;
              //alert("check");
            }
            //alert("check");
            paper.circle(xi + r * Math.sin(angle * deg), yi - r * Math.cos(angle * deg), 2).attr(red);
            cir[i].pointX[j] = xi + r * Math.sin(angle * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle * deg);
          } else if (s[i].p[j].outername == true) {
            var angle, flag = false;
            for (var k = 0; k < Dc.E_N; k++) {
              if (link[k].start == s[i].p[j].pI) {
                if (s[i].root_number > s[getservice(link[k].end)].root_number) {
                  angle = angle5;
                  angle5 = angle5 + 10;
                  flag = true;
                  break;
                } else if (s[i].root_number < s[getservice(link[k].end)].root_number) {
                  angle = angle2;
                  angle2 = angle2 + 10;
                  flag = true;
                  break;
                } else {
                  angle = angle5;
                  angle5 = angle5 + 10;
                  flag = true;
                  break;
                }
              } else if (link[k].end == s[i].p[j].pI) {
                if (s[i].root_number > s[getservice(link[k].start)].root_number) {
                  angle = angle5;
                  angle5 = angle5 + 10;
                  flag = true;
                  break;
                } else if (s[i].root_number < s[getservice(link[k].start)].root_number) {
                  angle = angle2;
                  angle2 = angle2 + 10;
                  flag = true;
                  break;
                } else {
                  angle = angle5;
                  angle5 = angle5 + 10;
                  flag = true;
                  break;
                }
              }
              if (flag == true) {
                break;
              }
            }
            if (flag == false) {
              angle = angle5;
              angle5 = angle5 + 10;
            }
            paper.circle(xi + r * Math.sin(angle * deg), yi - r * Math.cos(angle * deg), 2).attr(red);
            cir[i].pointX[j] = xi + r * Math.sin(angle * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle * deg);
          } else {
            var angle, flag = false;
            for (var k = 0; k < Dc.E_N; k++) {
              if (link[k].start == s[i].p[j].pI) {
                if (s[i].root_number > s[getservice(link[k].end)].root_number) {
                  angle = angle1;
                  angle1 = angle1 + 10;
                  flag = true;
                  break;
                } else if (s[i].root_number < s[getservice(link[k].end)].root_number) {
                  angle = angle6;
                  angle6 = angle6 + 10;
                  flag = true;
                  break;
                } else {
                  angle = angle5;
                  angle5 = angle5 + 10;
                  flag = true;
                  break;
                }
              } else if (link[k].end == s[i].p[j].pI) {
                if (s[i].root_number > s[getservice(link[k].start)].root_number) {
                  angle = angle2;
                  angle2 = angle2 + 10;
                  flag = true;
                  break;
                } else if (s[i].root_number < s[getservice(link[k].start)].root_number) {
                  angle = angle6;
                  angle6 = angle6 + 10;
                  flag = true;
                  break;
                } else {
                  angle = angle5;
                  angle5 = angle5 - 10;
                  flag = true;
                  break;
                }
              }
              if (flag == true) {
                break;
              }
            }
            if (flag == false) {
              angle = angle7;
              angle7 = angle7 + 10;
              // alert("check");
            }
            paper.circle(xi + r * Math.sin(angle * deg), yi - r * Math.cos(angle * deg), 2).attr(red);
            cir[i].pointX[j] = xi + r * Math.sin(angle * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle * deg);
          }
        }
      }
      //暂时未考虑嵌套的节点与另一站点的服务连接；
      else if (s[i].fatherNode != -1) {
        //alert("check7");
        if (s[i].p[j].pC == "input") {
          if (s[i].p[j].innername == true) {
            paper.circle(xi + r * Math.sin(angle4 * deg), yi - r * Math.cos(angle4 * deg), 2).attr(yellow);
            cir[i].pointX[j] = xi + r * Math.sin(angle4 * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle4 * deg);
            angle4 = angle4 + 10;
          } else if (s[i].p[j].outername == true) {
            paper.circle(xi + r * Math.sin(angle5 * deg), yi - r * Math.cos(angle5 * deg), 2).attr(yellow);
            cir[i].pointX[j] = xi + r * Math.sin(angle5 * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle5 * deg);
            angle5 = angle5 + 10;
          } else {
            paper.circle(xi + r * Math.sin(angle6 * deg), yi - r * Math.cos(angle6 * deg), 2).attr(yellow);
            cir[i].pointX[j] = xi + r * Math.sin(angle6 * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle6 * deg);
            angle6 = angle6 + 10;
          }
        } else if (s[i].p[j].pC == "output") {
          if (s[i].p[j].innername == true) {
            paper.circle(xi + r * Math.sin(angle1 * deg), yi - r * Math.cos(angle1 * deg), 2).attr(green);
            cir[i].pointX[j] = xi + r * Math.sin(angle1 * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle1 * deg);
            angle1 = angle1 + 10;
          } else if (s[i].p[j].outername == true) {
            paper.circle(xi + r * Math.sin(angle2 * deg), yi - r * Math.cos(angle2 * deg), 2).attr(green);
            cir[i].pointX[j] = xi + r * Math.sin(angle2 * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle2 * deg);
            angle2 = angle2 + 10;
          } else {
            paper.circle(xi + r * Math.sin(angle3 * deg), yi - r * Math.cos(angle3 * deg), 2).attr(green);
            cir[i].pointX[j] = xi + r * Math.sin(angle3 * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle3 * deg);
            angle3 = angle3 + 10;
          }
        } else {
          var angle, flag = false;
          if (s[i].p[j].innername == true) {
            for (var k = 0; k < Dc.E_N; k++) {
              if (link[k].start == s[i].p[j].pI) {
                if (s[i].root_number > s[getservice(link[k].end)].root_number) {
                  angle = angle4;
                  angle4 = angle4 + 10;
                  flag = true;
                  break;
                } else if (s[i].root_number < s[getservice(link[k].end)].root_number) {
                  angle = angle1;
                  angle1 = angle1 + 10;
                  flag = true;
                  break;
                } else {
                  angle = angle1;
                  angle1 = angle1 + 10;
                  flag = true;
                  break;
                }
              } else if (link[k].end == s[i].p[j].pI) {
                if (s[i].root_number > s[getservice(link[k].start)].root_number) {
                  angle = angle4;
                  angle4 = angle4 + 10;
                  break;
                  flag = true;
                } else if (s[i].root_number < s[getservice(link[k].start)].root_number) {
                  angle = angle1;
                  angle1 = angle1 + 10;
                  break;
                  flag = true;
                } else {
                  angle = angle1;
                  angle1 = angle1 + 10;
                  break;
                  flag = true;
                }
              }
              if (flag == true) {
                break;
              }
            }
            if (flag == false) {
              angle = angle8;
              angle8 = angle8 + 10;
            }
            paper.circle(xi + r * Math.sin(angle * deg), yi - r * Math.cos(angle * deg), 2).attr(red);
            cir[i].pointX[j] = xi + r * Math.sin(angle * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle * deg);
          } else if (s[i].p[j].outername == true) {
            var angle, flag = false;
            for (var k = 0; k < Dc.E_N; k++) {
              if (link[k].start == s[i].p[j].pI) {
                if (s[i].root_number > s[getservice(link[k].end)].root_number) {
                  angle = angle6;
                  angle6 = angle6 + 10;
                  flag = true;
                } else if (s[i].root_number < s[getservice(link[k].end)].root_number) {
                  angle = angle2;
                  angle2 = angle2 + 10;
                  flag = true;
                } else {
                  angle = angle5;
                  angle5 = angle5 + 10;
                  flag = true;
                }
              } else if (link[k].end == s[i].p[j].pI) {
                if (s[i].root_number > s[getservice(link[k].start)].root_number) {
                  angle = angle6;
                  angle6 = angle6 + 10;
                  flag = true;
                } else if (s[i].root_number < s[getservice(link[k].start)].root_number) {
                  angle = angle2;
                  angle2 = angle2 + 10;
                  flag = true;
                } else {
                  angle = angle5;
                  angle5 = angle5 + 10;
                  flag = true;
                }
              }
              if (flag == true) {
                break;
              }
            }
            if (flag == false) {
              angle = angle5;
              angle5 = angle5 + 10;
            }
            paper.circle(xi + r * Math.sin(angle * deg), yi - r * Math.cos(angle * deg), 2).attr(red);
            cir[i].pointX[j] = xi + r * Math.sin(angle * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle * deg);
          } else {
            var angle, flag = false;
            for (var k = 0; k < Dc.E_N; k++) {
              if (link[k].start == s[i].p[j].pI) {
                if (s[i].root_number > s[getservice(link[k].end)].root_number) {
                  angle = angle6;
                  angle6 = angle6 + 10;
                } else if (s[i].root_number < s[getservice(link[k].end)].root_number) {
                  angle = angle2;
                  angle2 = angle2 + 10;
                } else {
                  angle = angle5;
                  angle5 = angle5 + 10;
                }
                flag = true;
              } else if (link[k].end == s[i].p[j].pI) {
                if (s[i].root_number > s[getservice(link[k].start)].root_number) {
                  angle = angle6;
                  angle6 = angle6 + 10;
                } else if (s[i].root_number < s[getservice(link[k].start)].root_number) {
                  angle = angle2;
                  angle2 = angle2 + 10;
                } else {
                  angle = angle5;
                  angle5 = angle5 + 10;
                }
                flag = true;
              }
              if (flag == true) {
                break;
              }
            }
            if (flag == false) {
              angle = angle7;
              angle7 = angle7 + 10;
            }
            paper.circle(xi + r * Math.sin(angle * deg), yi - r * Math.cos(angle * deg), 2).attr(red);
            cir[i].pointX[j] = xi + r * Math.sin(angle * deg);
            cir[i].pointY[j] = yi - r * Math.cos(angle * deg);
          }
        }
      }
    }
  }
  //内部站点
  for (var i = 1; i <= Dc.S_N; i++) {
    if (s[i].site == true && s[i].inserve == 0) {
      paper.rect(cir[i].x - cir[i].r / 1.5 / 2, cir[i].y - cir[i].r / 4, cir[i].r / 1.5, cir[i].r / 2).attr(sitecoler);
      if (s[i].fatherNode == -1)
        paper.text(cir[i].x, cir[i].y, get_num(s[i].sitename)).attr({
          fill: "#000",
          "font-size": 15
        });
      else
        paper.text(cir[i].x, cir[i].y, get_num(s[i].sitename)).attr({
          fill: "#000",
          "font-size": 8
        });
      siteP[get_num(s[i].sitename)].X = cir[i].x - 12.5;
      siteP[get_num(s[i].sitename)].Y = cir[i].y - 7.5;
      //alert(s[i].sitename);
    } else if (s[i].site == true && s[i].inserve != 0) {
      paper.rect(cir[i].x - 7, cir[i].y + cir[i].r / 2 + 2, 12, 8).attr(sitecoler);
      paper.text(cir[i].x - 7 + 6, cir[i].y + cir[i].r / 2 + 2 + 4, get_num(s[i].sitename)).attr({
        fill: "#000",
        "font-size": 6
      });
      siteP[get_num(s[i].sitename)].X = cir[i].x - 7;
      siteP[get_num(s[i].sitename)].Y = cir[i].y + cir[i].r / 2 + 2;
    }
  }
  //边的连接
  for (var i = 0; i < Dc.E_N; i++) {
    var s1, p1, s2, p2;
    s1 = getservice(link[i].start);
    p1 = getport(link[i].start);
    s2 = getservice(link[i].end);
    p2 = getport(link[i].end);
    var dx = (cir[s1].pointX[p1] - cir[s2].pointX[p2]);
    var dy = (cir[s1].pointY[p1] - cir[s2].pointY[p2]);
    var p1x = cir[s1].pointX[p1];
    var p1y = cir[s1].pointY[p1];
    var p2x = cir[s2].pointX[p2];
    var p2y = cir[s2].pointY[p2];
    if (dx < 0) {
      if (dy < 0) {
        var path1 = [
          ["M", p1x, p1y],
          ["C", p1x - Math.min(-20, dx / 2), p1y, p2x + Math.min(-20, dx / 2), p2y, p2x, p2y]
        ];
        paper.path(path1).attr(circlrcoler);
      } else {
        var path1 = [
          ["M", p1x, p1y],
          ["C", p1x - Math.min(-20, dx / 3), p1y + 10, p2x + Math.min(-20, dx / 3), p2y - 10, p2x, p2y]
        ];
        paper.path(path1).attr(circlrcoler);
      }
    } else if (dx == 0) {
      var path1 = [
        ["M", p1x, p1y],
        ["C", p1x + 10, p1y + dy / 4, p2x - 10, p1y - dy / 4, p2x, p2y]
      ];
      paper.path(path1).attr(circlrcoler);
    } else {
      if (dy < 0) {
        var path1 = [
          ["M", p1x, p1y],
          ["C", p1x - Math.max(10, dx / 2), p1y, p2x + dx / 3, p2y, p2x, p2y]
        ];
        paper.path(path1).attr(circlrcoler);
      } else {
        var path1 = [
          ["M", p2x, p2y],
          ["C", p2x + Math.max(10, dx), p2y, p1x - dx / 3, p1y, p1x, p1y]
        ];
        paper.path(path1).attr(circlrcoler);
      }
    }
  }
  //alert(s[4].p[2].outername);
  for (var i = 1; i <= Dc.S_N; i++) {
    for (var j = 1; j <= s[i].port_number; j++) {
      var path;
      var px = cir[i].pointX[j];
      var py = cir[i].pointY[j];
      if (s[i].p[j].innername == true) {
        var flag = false;
        var pos;
        for (var k = 0; k <= Dc.sitenumber; k++) {
          if (siteP[k].sp == s[i].p[j].pI) {
            flag = true;
            pos = k;
            break;
          }
        }
        if (flag == false) {
          path = [
            ["M", px, py],
            ["C", px + 20, py + w / 3, px - 20, py + w / 2, px, py + w / 2 + 10]
          ];
          paper.text(px + 10, py + w / 2 + 10, "i").attr({
            fill: "#87CEFA",
            "font-size": 15
          });
          paper.text(px + 15, py + w / 2 + 12, i).attr({
            fill: "#87CEFA",
            "font-size": 8
          });
        } else {
          path = [
            ["M", px, py],
            ["C", px + (siteP[pos].X - px + 40), py - 20, siteP[pos].X, siteP[pos].Y, siteP[pos].X, Math.max(360, siteP[pos].Y + w / 2)]
          ];
          paper.text(siteP[pos].X + 20.5, Math.max(360, siteP[pos].Y + w / 2), "i").attr({
            fill: "#87CEFA",
            "font-size": 15
          });
          paper.text(siteP[pos].X + 25.5, Math.max(360, siteP[pos].Y + w / 2) + 2, i).attr({
            fill: "#87CEFA",
            "font-size": 8
          });
        }
      } else if (s[i].p[j].outername == true) {
        path = [
          ["M", px, py],
          ["C", px + 20, py - w / 3, px - 20, py - w / 2, px, py - w / 2 - 30]
        ];
        paper.text(px + 10, py - w / 2 - 30, "O").attr({
          fill: "#87CEFA",
          "font-size": 15
        });
        paper.text(px + 17, py - w / 2 - 28, i).attr({
          fill: "#87CEFA",
          "font-size": 10
        });
      }
      paper.path(path).attr(circlrcoler);
    }
  }
  /*
  var path1 = [["M",83.3+20,130],["C",83.3+20,130+20,83.3+10,163,116-20,193.75]];
  paper.path(path1).attr(circlrcoler);
  var path2 = [["M",116+20,193.75],["C",116+50,193.75-50,x-100-50,163+20,x-100-20*Math.sin(45*deg),162.5-20*Math.sin(45*deg)]];
  paper.path(path2).attr(circlrcoler);
  var path3 = [["M",x-100,50],["C",x-100-50,100,x-100-30,120,x-100-20*Math.sin(45*deg),162.5-20*Math.sin(45*deg)]];
  paper.path(path3).attr(circlrcoler);
  var path4 = [["M",83.3,130+20],["C",83.3-20,130+20,83.3-30,130+50,83.3-50,130+60]];
  paper.path(path4).attr(circlrcoler);
  var path5 = [["M",136,193.75],["C",136+20,193.75-20,136+30,193.75+20,136+40,193.75+30]];
  paper.path(path5).attr(circlrcoler);
  */
  //var cir = paper.circle(35,25,20);
}
