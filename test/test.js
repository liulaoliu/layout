function getTimeByTimeZone(timeZone){
  var d=new Date();
      localTime = d.getTime(),
      localOffset=d.getTimezoneOffset()*60000, //获得当地时间偏移的毫秒数,这里可能是负数
      utc = localTime + localOffset, //utc即GMT时间
      offset = timeZone, //时区，北京市+8  美国华盛顿为 -5
      localSecondTime = utc + (3600000*offset);  //本地对应的毫秒数
  var date = new Date(localSecondTime);
  let timeZoneTmp="+"+timeZone;
  console.log("根据计算得知"+timeZoneTmp+"时区的时间是 " + date.toLocaleString());

  console.log("系统实际显示时间是"+(new Date()).toLocaleString())
}

getTimeByTimeZone(8)



