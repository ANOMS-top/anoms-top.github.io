//随机图片
var num = Math.floor(Math.random()*5+2);
document.getElementById("random-pic").src="assets/images/gallery/"+num+".png";
//控制台ANOMS输出
console.log(String.raw`  /■■■■■■  /■■   /■■  /■■■■■■  /■■      /■■  /■■■■■■ `+"\n"+String.raw` /■■__  ■■| ■■■ | ■■ /■■__  ■■| ■■■    /■■■ /■■__  ■■`+"\n"+String.raw`| ■■  \ ■■| ■■■■| ■■| ■■  \ ■■| ■■■■  /■■■■| ■■  \__/`+"\n"+String.raw`| ■■■■■■■■| ■■ ■■ ■■| ■■  | ■■| ■■ ■■/■■ ■■|  ■■■■■■ `+"\n"+String.raw`| ■■__  ■■| ■■  ■■■■| ■■  | ■■| ■■  ■■■| ■■ \____  ■■`+"\n"+String.raw`| ■■  | ■■| ■■\  ■■■| ■■  | ■■| ■■\  ■ | ■■ /■■  \ ■■`+"\n"+String.raw`| ■■  | ■■| ■■ \  ■■|  ■■■■■■/| ■■ \/  | ■■|  ■■■■■■/`+"\n"+String.raw`|__/  |__/|__/  \__/ \______/ |__/     |__/ \______/ `+"\n\n	 欢迎来到ANOMS纯净生存服务器官网 原作者：Tigercrl")
//生日控制台输出
var today = new Date();
var month = today.getMonth() + 1;
var date = today.getDate();
//生日判断排序为录入时间
if (month == 8 && date == 10){
	console.log("	   今天是服主(zhangwanyu)的生日，祝服主生日快乐！");
}else if(month == 11 && date == 30){
	console.log("	  今天是管理员Tigercrl的生日，祝Tigercrl生日快乐！");
}else if(month == 8 && date == 8){
	console.log("  今天是管理员minecraft_cookie的生日，祝Cookie生日快乐！");
}