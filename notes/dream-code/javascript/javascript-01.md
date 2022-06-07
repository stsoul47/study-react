# javascript - 01(Javascript란?)

## API
Application Programming Interface의 약자

## web API
javascript언어에 표함되는 API가 아니라, 브라우저가 제공하는 브라우저가 이해할 수 있는 함수들

## Dev Tools
브라우저의 dev tools를 잘 활용하면, 공부할 때나 현업에서 일할 때 유용하게 사용 가능

## javascript 공식 사이트
ecma-international.org

## async vs defer

### header에 스크립트 파일을 넣었을 때
1. parsing HTML(HTML파일을 한줄 씩 읽어 내려감)
2. `<script></script>`문법을 만남
3. parsing 하던 HTML을 잠시 멈춰 두고, 필요한 script 파일 다운로드
4. 다운받은 script 파일을 실행
5. 멈춰 뒀던 HTML을 다시 parsing 시작

단점: 
js(javascript)파일이 엄청 클 때, 사용자가 웹 사이트를 보는 거 까지 많은 시간이 필요

### body 끝 부분에 script 파일을 추가
1. 페이지가 준비가 되고
2. 스크립트를 만나고 fetching js(js파일 다운로드)
3. executing js(js파일 실행)
  
단점: 
web사이트가 javascript에 의존적이라면
즉 사용자가 의미있는 컨텐츠를 보기위해 서버에 있는 데이터를 받아오거나, DOM을 이쁘게 꾸민다면 fetch하고 실행하는데 시간이 걸린다.

### header + async
``` html 
<script asyn src = "main.js"></script>
``` 
위와 같은 방식으로 사용

1. parsing HTML
2. `script`문법을 만남
3. 병렬로 main.js를 다운로드 
4. 그 뒤 계속 parsing을 하다가, 다운로드(fetching)가 완료되면 parsing을 멈추고 다운로드 된 파일을 실행
5. 실행이 완료되면, 다시 parsing HTML

장점: 
1. 바디 끝에 사용하는 것보다는 다운로드 받는 시간을 절약할 수 있음
   
  
단점: 
1. HTML이 파싱되기도 전에 실행이 되서, queryselect같은 걸로 DOM 요소를 조작한다 그러면, 조작하려는 시점에 우리가 원하는 HTML요소가 아직 정의 되어 있지 않을 수 있다.
2. 자바스크립트를 실행 하기 위해서 HTML parsing을 멈출 수 있기 때문에, 여전히 사용자가 web을 보는 시간이 더 걸릴 수 있음


### header + defer
``` html 
<script defer src = "main.js"></script>
``` 
1. parsing을 하다가 `script`문법의 defer를 만남
2. js파일 다운로드를 명령해 놓음
3. 나머지 HTML을 끝까지 parsing
4. parsing을 끝내고 js를 실행

## `use strict`
비상식적인 소스코드<br>
정의되지 않은 변수에 값을 할당하고 사용, 프로토타입으로 정의한 값을 변경 등등<br>
을 하지 못하게 막는다.





