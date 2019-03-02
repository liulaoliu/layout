
let str="关于我们|联系我们|联系客服|合作招商|商家帮助|营销中心|手机京东|友情链接|销售联盟|京东社区|风险监测|隐私政策|京东公益|English Site|Media & IR";

let arr=str.split('|');

for(let i=0;i<arr.length;i++){

    console.log('<li class="f3c"><a>'+arr[i]+'</a></li>');
}

