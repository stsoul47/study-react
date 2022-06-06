# HTML5 기본 문법

## HTML(HyperText Markup Language)
웹 페이지를 기술하기 위한 마크업 언어

<br><br>

## HTML5 포함 기능
1. 멀티미디어(Multimedia): 비디오 및 오디오 기능을 자체적으로 지원
2. 그래픽(Graphics & Effects): 
   1. SVC, 캔버스를 사용한 2차원 그래픽
   2. CSS3, WebGL을 사용한 3차원 그래픽을 지원
3. 통신(Connectivity)
   1. HTML5는 서버와의 소켓 통신을 지원하므로 서버와의 양방향 통신이 가능
4. 디바이스 접근(Device access)
   1. 카메라, 동작센서 등의 하드웨어 기능을 직접적으로 제어 가능
5. 오프라인 및 저장소(Offline & Storage)
   1. 오프라인 상태에서도 애플리케이션 동작 가능
   2. HTML5가 플랫폼으로 사용될 수 있다.
6. 시맨틱 태그(Semantics)
   1. HTML 요소의 의미를 명확히 설명하는 시맨틱 태그를 도입하여 브라우저, 검색엔진, 개발자 모두에게 콘텐츠의 의미를 명확히 설명 가능
   2. HTML 요소의 의미를 명확히 해석하고 그 데이터를 활용할 수 있는 시맨틱 웹을 실현 가능
7. CSS3

<br><br>

## HTML 기본 문법
### 요소 (element)
HTML 요소는 시작 태그 (start tag)와 종료 태그(end tag) 그리고 tag사이에 위치한 content로 구성<br>
태그는 대소문자를 구별하지 않으나 W3C: World Wide Web Consortium에서는 HTML4의 경우 소문자를 추천하고 있으므로 HTML5에서도 소문자를 사용하는 것이 일반적이다.

<br><br>

#### 빈요소 
content를 가질수 없는 요소를 빈 요소 (Empty element or Self-Closing element)라 한다.
빈요소는 content가 없으며 어트리뷰트(Attribute)만 가질 수 있다.

대표적 빈 요소
1. br
2. hr
3. img
4. input
5. link
6. meta

<br><br>

### 어트리뷰트(Attribute)
어트리뷰트(Attribute 속성)이란 요소의 성질, 특징을 정의하는 명세<br>
어트리뷰트는 시작 태그에 위치해야 하며, 이름과 값의 쌍을 이룬다.

<br><br>

#### 글로벌 어트리뷰트(HTML Global Attribute)
글로벌 어트리뷰트는 모든 HTML 요소가 공통으로 사용할 수 있는 어트리뷰트
몇몇 요소에는 효과가 적용되지 않을 수 있지만 대체로 모든 요소에서 사용 가능

| Attribute  | Description |
| ---------- | ----------- |
| id         | 유일한 식별자(id)를 요소에 지정<br>중복 지정 불가능|
| class      | 스타시트에 정의된 class를 요소에 지정<br> 중복 지정 불가능|
| hidden     | css의 hidden과는 다르게 의미상으로 브라우저에 노출되지 않게 한다.|
| lang       | 지정된 요소의 언어를 지정 <br>검색엔진의 크롤링 시 웹페이지의 언어를 인식|
| style      | 요소에 인라인 스타일을 지정 | 
| tabindex   | 사용자가 키보드로 페이지를 내비게이션 시 이동 순서를 지정 |
| title      | 요소에 관한 제목을 지정 |

<br>

### 주석
주석(comment)는 주로 개발자에게 코드를 설명하기 위해 사용, 브라우저는 주석을 화면에 표시하지 않음











