# Javascript - 02

## 프로그래밍에서 가장 중요한 것은?
입력, 연산, 출력 <br>
사용자에게 콘솔이나 UI에서 입력받은 데이터를 잘 처리하고 연산해서 알맞게 사용자에게 출력
<br>
<br>
데이터를 전송, 서버로 보내서 다시 받아오는 것 등도 포함<br>
그 과정에서 CPU에 최적화된 연산, 메모리의 사용을 최소화 등도 중요 <br>
<br>
<br>


## 변수
변경 될 수 있는 값 <br>
let(added in ES6) <br>

### Block scope
`{}`을 이용해서 사용하는 변수 등을 block scope라고 한다. <br>
block scope 밖에 정의 해서 사용하는 변수들을 global scope라고 한다. <br>
<br>

### var(don't ever use this!)
javascript의 var는 변수를 선언하기 전에 값을 할당하는 행위를 할 수 있다. <br>
심지어 변수를 사용할 수 있음(undefined => 변수는 정의되어 있고, 값은 안들어가 있음) <br>
var는 block scope가 없음 <br>
<br>
이것을 var `hoisting`이라고 한다.<br>
어디에 선언했는지 상관없이 항상 선언을 최상단으로 끓어 올려주는 것 <br>
<br>

## Constants
한번 할당하면 값이 절대 바뀌지 않는 변수 <br>
값을 선언함과 동시에 할당하고 절대 바뀌지 않는다. <br>
immutable: 값이 변경될 수 없는 타입

사용을 하는 몇가지 이유: 
1. security: 보안성
   1. 해커들이 값을 변경하는걸 방지
2. thread safety
   1. thread가 동시에 값을 변경할 수 없음
3. reduce human mistakes

※ mutable data type: 값이 계속해서 변경될 수 있는 타입
<br>
<br>

## variable types 
1. primitive, single item: 
   1. 더 이상 작은 단위로 나눠질 수 없는 single item type
   2. number, string, boolean, null, undefined, symbol
2. Object(box container): 
   1. single item을 여러개 묶어서 한 박스로 관리 할 수 있게 해주는 타입
3. function:
   1. first-class function
   2. function도 다른 데이터 타입처럼 변수에 할당 가능
   3. 함수의 parameter(인자)로도 전달 가능
   4. 함수의 리턴타입으로 function을 사용 가능


``` javascript 
const infinity = 1 / 0; // Infinity
const negativeInfinity = -1 / 0 // -Infinity
const nAn = 'not a number' / 0 // NaN
```

<br>

### bigInt (fairly new, don't use it yet)
javascript number = -2^53 ~ 2^53 까지 표현 <br>
숫자의 마지막에 n을 붙이면 bigInt로 간주 되어 짐 <br>
최근에 추가된 사항> 크롬하고 firefox에서만 지원 <br>
<br>

### template literals(string)
``` javascript
const jins = 'JinSung';
// `(백틱)을 이용해서 template literals 사용 가능
const helloBob = `hi ${jins}` // 템플릿 리터럴, 출력값: hi JinSung

```
<br>

### boolean
false: 0, null, undefined, NaN, '' <br>
true: any other value <br>
<br>

###  symbol
map이나 다른 자료구조에서 고유한 식별자가 필요하거나, 동시에 다발적으로 일어날 수 있는 코드에서 우선 순위를 주고 싶을 때, 고유한 식별자가 필요할 때 쓰는 것

``` javascript
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1 === symbol2) // false, 동일한 string으로 symbol을 만들어도, 서로 다른 식별자로 만들어 준다.

const gSymbol1 = Symbol.for('id');
const gSmbol2 = Symbol.for('id');

console.log(gSymbol1 === gSmbol2) // true, 동일한 Symbol을 만들고 싶을 때는 for을 사용

console.log(`value: ${symbol1}`) // error
console.log(`value: ${symbol1.description}`) // 이렇게 사용해야 한다.
```
<br>
<br>

### object
일상생활에서 보는 물건과 물체들을 대표할 수 있는 박스형태를 말한다. <br>
``` javascript 
const jinSung = { name: 'jinsung', age: 28}; // const로 선언되어 있어서, jinSung이라는 변수의 값은 변경 불가능
jinSung.age = 27;  // 하지만 object내의 변수들은 값이 변경 가능하다.
```


## dynamic typing
dynamically typed language <br>
javascript는 변수를 선언할 때 어떤 타입인지 선언하지 않고, 런타임(프로그램)에/이 할당된 값에 따라서 타입이 변경 될 수 있다.

``` javascript
let text = 'hello'; 
console.log(text.chartAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
// text를 누군가 number로 변경 그 뒤에 
console.log(text.chartAt(0)); //을 실행 하게 되면, error 발생
```
javascript는 런타임에 타입이 정해지기 때문에 런타임으로 에러가 발생하는 경우가 많음 <br>
그래서 typescript의 언어가 나옴 <br>
typescript는 javascript위에 type이 올라가서, javascript를 충분히 이해하고 넘어가야 한다.















