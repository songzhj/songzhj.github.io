# js异步
--------
Javascript语言的执行环境是"单线程",如果有多个任务，就必须排队，前面一个任务完成，再执行后面一个任务，以此类推。

- 好处：实现起来比较简单，执行环境相对单纯；
- 坏处：只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。常见的浏览器无响应（假死），往往就是因为某一段Javascript代码长时间运行（比如死循环），导致整个页面卡在这个地方，其他任务无法执行。
- 解决办法：Javascript语言将任务的执行模式分成两种：同步和异步。

## js中异步的几种方式

### 1. callback
异步编程最基本的方法。
```javascript
function f1(callback) {
    setTimeout(function() {
        callback();
    }, 2000);
}
```
缺点：耦合度高，不利于代码维护；而且每个任务只能指定一个回调函数。

### 2. event
使用事件驱动的模式。
```javascript
f1.on('wtf', f2);

function f1() {
    setTimeout(function() {
        f1.trigger('wtf');
    }, 2000);
}
```
能够去耦合，但是整个程序都变成了事件驱动，运行流程会变得很不清晰，不符合人脑习惯（顺序）。

### 3. promise
CommongJS提出的规范，现在已经被纳入ES6标准。目的是为异步编程提供统一接口。
```javascript
function f1(...args) {
    return new Promise(function(resolve, reject) {
        //do something
        ajax.get.apply(ajax, args.concat([function(data) {
            if (data.status == 1) {
                resolve(data);
            } else {
                reject(data);
            }
        }]));
    });
}

f1('/flight/air', {from: '北京', arrive: '上海'})
.then(f2)
.catch(f3);
```
Promise方法和它的字面意思一样，保证了代码先后的执行顺序。以往的回调可以使用Promise封装，封装后的代码写起来是顺序执行的，符合人的思考方式，也便于阅读和维护。

另外Promise对象同样可以返回一个新的Promise对象，能够采用链式写法，摆脱了callback hell。

### 4. co
co是一个异步模块，它基于ES6的generator和yield，让我们能够用同步的形式编写异步代码。
```javascript
co(function *() {
    var data = yield $.get('/flight/data');
    console.log(data);
    var user = yield $.get('/flight/user');
    console.log(user);
    var air = yield $.get('/flight/air');
    console.log(air);
});
```
generator本来就是一个迭代器生成器，但是被[TJ](http://tjholowaychuk.com/)这个大神给创造性的拿来解决异步流程问题了，膜。
> TJ Holowaychuk，程序员兼艺术家，Koa、Co、Express、jade、mocha、node-canvas、commander.js等知名开源项目的创建和贡献者。

### 5. async
async/await其实和co是类似的东西，可以说是将co的方案纳入了ES7标准，类似于一个语法糖。
```javascript
//node version at least 7.0.0
const f = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123);
    }, 2000);
  });
};

const testAsync = async () => {
  const t = await f();
  console.log(t);
};

testAsync();
```
async/await被称作是异步编程终极解决方案，他让整个流程真正看起来像是按照代码顺序同步执行，而且还有其它的优点。

-------

## co
co模块的简单思路：
```javascript
function co(gen) {
    var it = gen();
    var ret = it.next();
    ret.value.then(function(res) {
        it.next(res);
    });
}
```
generator函数体可以停在yield语句处，直到下一次执行next()。co模块的思路就是利用这个特性，将异步操作跟在yield后面，当异步操作完成并返回结果后，再触发下一次next()。

> 跟在yield后面的异步操作需要遵循一定的规范：**promise**和thunk。

## async
async/await可以说是对于异步编程比较简单好用的方案，对于不是很复杂的用例下已经够用了。
> await等待的是一个表达式，这个表达式的计算结果是 Promise对象或者其它值。如果它等到的不是一个Promise对象，那await表达式的运算结果就是它等到的东西；如果它等到的是一个Promise对象，await就忙起来了，它会阻塞后面的代码，等着Promise对象resolve，然后得到resolve的值，作为await表达式的运算结果。

> 因为async函数返回一个Promise对象，所以await可以用于等待一个async函数的返回值。

#### async/await的优势？
- 处理then链
- 解决Promise参数传递过于麻烦的问题

**Demo**：对于一个业务，分三个步骤(step1,step2,step3)，每个步骤都是异步的，并且依赖于上一个步骤的结果。
```javascript
function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}

function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(n) {
    console.log(`step2 with ${n}`);
    return takeLongTime(n);
}

function step3(n) {
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}
```

**promise**
```javascript
function doIt() {
    console.time("doIt");
    const time1 = 300;
    step1(time1)
        .then(time2 => step2(time2))
        .then(time3 => step3(time3))
        .then(result => {
            console.log(`result is ${result}`);
            console.timeEnd("doIt");
        });
}

doIt();
```

**async**
```javascript
async function doIt() {
    console.time("doIt");
    const time1 = 300;
    const time2 = await step1(time1);
    const time3 = await step2(time2);
    const result = await step3(time3);
    console.log(`result is ${result}`);
    console.timeEnd("doIt");
}

doIt();
```

**Demo**：每一步都需要之前所有步骤的结果。
```javascript
function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}

function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(m, n) {
    console.log(`step2 with ${m} and ${n}`);
    return takeLongTime(m + n);
}

function step3(k, m, n) {
    console.log(`step3 with ${k}, ${m} and ${n}`);
    return takeLongTime(k + m + n);
}
```

**async**
```javascript
async function doIt() {
    console.time("doIt");
    const time1 = 300;
    const time2 = await step1(time1);
    const time3 = await step2(time1, time2);
    const result = await step3(time1, time2, time3);
    console.log(`result is ${result}`);
    console.timeEnd("doIt");
}

doIt();
```

**promise**
```javascript
//你真以为我会去写？
```
<!--
function doIt() {
    console.time("doIt");
    const time1 = 300;
    step1(time1)
        .then(time2 => {
            return step2(time1, time2)
                .then(time3 => [time1, time2, time3]);
        })
        .then(times => {
            const [time1, time2, time3] = times;
            return step3(time1, time2, time3);
        })
        .then(result => {
            console.log(`result is ${result}`);
            console.timeEnd("doIt");
        });
}
doIt(); -->



## 其它
- async和co都是可以使用try/catch的。
- await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try/catch代码块中。
- thunk：不讲了。