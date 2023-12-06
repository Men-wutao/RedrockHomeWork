//旧方法
// const person = {
//   name: '佐科姐姐',
//   age: 1000000,
//   address: {
//     city: 'ChongQing',
//     area: 'NanShan'
//   },
//   title: ['student', { year: 2022, title: 'GoodStudent' }]
// }
// let name = person.name;
// let year = person.age;
// let city = person.address.city;
// let mountain = person.address.area;
// let title1 = person.title[0];
// let title2 = person.title[1].title;
// // 你的代码
// console.log(name) // 佐科姐姐
// console.log(year) // 1000000 这里没有写错哈，就是要输出1000000，结合课件
// console.log(city) // ChongQing
// console.log(mountain) // NanShan //这里没有写错，就是要输出NanShan，结合课件
// console.log(title1) // student
// console.log(title2) // GoodStudent

//解构赋值
const person = {
  name: '佐科姐姐',
  age: 1000000,
  address: {
    city: 'ChongQing',
    area: 'NanShan'
  },
  title: ['student', { year: 2022, title: 'GoodStudent' }]
}
const { name } = person;
const { age } = person;
const year = age;
const { address: { city } } = person;
const { address: { area } } = person;
const mountain = area;
const { title: [title1] } = person;
const { title: [, { title }] } = person;
const title2 = title;
console.log(name) // 佐科姐姐
console.log(year) // 1000000 这里没有写错哈，就是要输出1000000，结合课件
console.log(city) // ChongQing
console.log(mountain) // NanShan //这里没有写错，就是要输出NanShan，结合课件
console.log(title1) // student
console.log(title2) // GoodStudent