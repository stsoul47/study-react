# Javascript-02

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
<br>
<br>

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
어디에 선언했는지 상관없이 항상 선언을 최상단으로 끓어 올려주는 것













