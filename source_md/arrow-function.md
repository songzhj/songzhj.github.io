##箭头函数使用的注意点
- **函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象**
- 不能当作构造函数（不能使用new）
- 不能使用arguments对象，可以使用rest参数代替
- 不能使用yield，不能用作Generator函数