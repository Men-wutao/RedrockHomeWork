//方法一
// let obj = { name: "红岩", lesson: "第5次课", level: "lv2" }//创建一个对象
// let obj2 = {};//创建一个空对象
// Object.assign(obj2, obj);//运用Object.assign拷贝
// // obj2['name'] = "我爱红岩";
// console.log(obj2);

let obj = { name: "红岩", lesson: "第5次课", level: "lv2") } }//创建一个对象
let obj2 = { ...obj };//创建一个空对象
Object.assign(obj2, obj);//运用Object.assign拷贝
// obj2['name'] = "我爱红岩";
console.log(obj2);

