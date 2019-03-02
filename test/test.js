
let str='工业品<';
let arr=str.split("/");
let tmp='';
for(let i=0;i<arr.length;i++){
  if(i===arr.length-1){arr[i]='<a href="#">'+arr[i]+'</a>';}
  else{arr[i]='<a href="#">'+arr[i]+'/</a>';}
  tmp+=arr[i];

}

tmp="<li>"+tmp+"</li>";
console.log(tmp);