//随机数生成
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    }
}
//随机图片
document.getElementById("random-pic").src="assets/images/gallery/"+randomNum(2,23)+".png";
//控制台ANOMS输出
console.log(String.raw`  /■■■■■■  /■■   /■■  /■■■■■■  /■■      /■■  /■■■■■■ `+"\n"+String.raw` /■■__  ■■| ■■■ | ■■ /■■__  ■■| ■■■    /■■■ /■■__  ■■`+"\n"+String.raw`| ■■  \ ■■| ■■■■| ■■| ■■  \ ■■| ■■■■  /■■■■| ■■  \__/`+"\n"+String.raw`| ■■■■■■■■| ■■ ■■ ■■| ■■  | ■■| ■■ ■■/■■ ■■|  ■■■■■■ `+"\n"+String.raw`| ■■__  ■■| ■■  ■■■■| ■■  | ■■| ■■  ■■■| ■■ \____  ■■`+"\n"+String.raw`| ■■  | ■■| ■■\  ■■■| ■■  | ■■| ■■\  ■ | ■■ /■■  \ ■■`+"\n"+String.raw`| ■■  | ■■| ■■ \  ■■|  ■■■■■■/| ■■ \/  | ■■|  ■■■■■■/`+"\n"+String.raw`|__/  |__/|__/  \__/ \______/ |__/     |__/ \______/ `+"\n\n	 欢迎来到ANOMS纯净生存服务器官网 原作者：Tigercrl")
console.log("				   ANOMS官网 · v1.0.0-pre24")
//生日控制台输出，私信Tigercrl以记录生日
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