var greenworks = require('./greenworks.js');

if (!greenworks.initAPI()) {
    console.log('An error occured initializing Steam API.');
    process.exit(1);
}
// greenworks.uGCSubscribe("1751418482",
//     function(result){
//         console.log(result);
//     },
//     function(error){
//         console.log(error);
//     });

console.log(greenworks.getItemInstallInfo("1756863212")) 

/** 
let uplaod_timer = null
greenworks.uGCCreateItem(
    ['Image'],
    "C:/Users/kubil/Desktop/30",
    "C:/Users/kubil/Desktop/30/lll.jpg",
    "超级测试0900",
    "超级测试啦啦啦0900",
    function(result1,result2){
        if(result2 != 0 && result2 != "0"){
            console.log("失败，错误代码：" + result2);
        }else{
            console.log("成功，文件句柄：" + result1);
        }
        clearInterval(uplaod_timer);
    },
    function(result1,result2){
        console.log("失败！");
    },
    function(re){
        let result = re;
        
        uplaod_timer = setInterval(function(){
            let process = greenworks.uGCGetItemUpdateProgress(result);
            
            if(process.status == '0'){
                clearInterval(uplaod_timer);
                console.log("上传完成！");
            }else if(process.status == '1'){
                console.log("正在配置数据");
            }else if(process.status == '2'){
                console.log("正在读取内容文件！");
                if(process.total != '0' && process.process != '0'){
                    console.log("读取进度：" + parseInt(parseInt(process.process)/parseInt(process.total)*100) + "%");
                }
            }else if(process.status == '3'){
                console.log("正在上传至Steam！");
                if(process.total != '0' && process.process != '0'){
                    console.log("上传进度：" + parseInt(parseInt(process.process)/parseInt(process.total)*100) + "%");
                }
            }else if(process.status == '4'){
                console.log("正在上传预览图片！");
                if(process.total != '0' && process.process != '0'){
                    console.log("上传进度：" + parseInt(parseInt(process.process)/parseInt(process.total)*100) + "%");
                }
            }else if(process.status == '5'){
                console.log("已经提交所有更改！");
            }else{
                clearInterval(uplaod_timer);
                console.log("返回错误的消息类型！");
            }
        },50)
    });
*/




