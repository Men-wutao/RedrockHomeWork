//参考https://www.kancloud.cn/ljw789478944/interview/397319#_34
//JSON.parse(JSON.stringify())
let obj = { name: "红岩", lesson: "第5次课", level: "lv2" }//创建一个对象
let obj2 = JSON.parse(JSON.stringify(obj));
obj2.lesson = "5";
console.log(obj2);