# 웹페이지의 구성하는 기본 태그
## 문서 형식 정의 tag
문서 형식 정의(Document Type Definition, DTD) 태그는 출력할 웹 페이지의 형식을 브라우저에게 전달한다.

``` HTML
<!DOCTYPE html> 
```

<br><br>

## html tag
html 태그는 모든 HTML 요소의 부모 요소이며 웹페이지에 단 하나만 존재한다. 즉, 모든 요소는 html 요소의 자식 요소이며 html 요소 내부에 기술해야 한다.

``` HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>문서 제목</title>
  </head>
  <body>
    화면에 표시할 모든 콘텐츠는 이곳에 기술한다.
  </body>
</html>
```
html은 글로벌 어트리뷰트를 지원 <br>
`lang` 어트리뷰트를 많이 사용

<br><br>

### head tag
head 요소는 메타데이터를 포함하기 위한 요소이며 웹페이지에 단 하나만 존재 <br>
메타데이터는 HTML 문서의 title, style, link, script에 대한 데이터로 화면에 표시되지 않는다.

### title tag
문서의 제목을 정의한다. 정의된 제목은 브라우저의 탭에 표시된다.

### style tag
HTML 문서를 위한 style 정보를 정의

### link tag
link 요소에는 외부 리소스와의 연계 정보를 정의한다. <br>
주로 HTML과 외부 CSS 파일을 연계해서 사용된다.

### script tag
script 요소에는 client-side JavaScript를 정의한다.

`src`어트리뷰트를 사용하면 외부 JavaScript 파일을 로드할 수 있다.

### meta tag
meta요소는 description, keywords, author, 기타 메타데이터 정의에 사용된다. <br>
메타데이터는 브라우저, 검색엔진(keywords)등에 의해 사용된다. <br>
charset 어트리뷰트는 브라우저가 사용할 문자셋을 정의한다. <br>



``` html
<!-- SEO(검색엔진 최적화)를 위해 검색엔진이 사용할 keywords를 정의 -->
<meta name="keywords" content = "HTML, CSS, XML, XHTML, JavaScript">

<!-- 웹페이지 설명을 정의 -->
<meta name="description" content="Web tutorials on HTML and CSS">

<!-- 웹페이지의 저자를 명기한다. -->
<meta name="author" content="JinSung">

<!-- 웹페이지를 30초 마다 refresh -->
<meta http-equiv="refresh" content="30">
```

## body tag
body tag는 HTML 문서의 내용을 나타내며 웹페이지에 단 하나만 존재한다. 메타데이터를 제외한 웹페이지를 구성하는 대부분의 요소가 body요소 내에 기술된다.









