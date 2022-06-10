# 텍스트 관련 태그

## 제목(headings) 태그
제목을 나타내는 태그 `h1 ~ h6`까지 존재

시맨틱 웹의 의미를 살려서 제목 이외에는 사용하지 않는 것이 좋다. 검색엔진은 제목 태그를 중요한 의미로 받아들일 가능성이 크다.

<br>

## 글자 형태(Text Formatting) 태그
|제목      |설명                      |
|----------|--------------------------|
|b         | bold 체를 지정한다. 제목 태그와 같이 의미론적(semantic) 중요성은 없다. |
|strong    | b tag와 동일하게 bold체를 지정한다. 차이점으로 의미론적 중요성의 의미를 갖는다. |
| i        | Italic체를 지정, 의미론적 중요성 없음|
| em       | emphasized(강조, 중요한) text를 지정, i tag와 동일, 의미론적 중요성 갖음 |
| small    | small text를 지정        |
| mark     | highlighted text를 지정  |
| del      | deleted(removed) text를 지정(취소선) |
| ins      | inserted(added) text, 밑줄     | 
| sub      | subscripted(아래 쓰인) text    | 
| sup      | superscripted(위에 쓰인) text  | 


``` HTML
<!DOCTYPE html>
<html>
  <body>
    <p>This is <sub>subscripted</sub> text.</p> 
    <p>This is <sup>superscripted</sup> text.</p>
  </body>
</html>
```

![결과값](../assets/images/sub_sup%20결과값.jpg.png)


## 본문 태그
|제목      |설명                      |
|----------|--------------------------|
| p        | 단락(paragraphs)를 지정한다. |
| br       | 강제 개행(line break)을 지정한다. 빈 요소(empty element)로 종료 태그가 없다.|
| pre      | 형식화된(preformatted) text를 지정한다. pre태그 내의 content는 작성된 그대로 브라우저에 표시된다.           |
| hr       | 수평줄을 삽입한다.       |
| q        | 짧은 인용문(quotation)을 지정, 브라우저는 인용부호(큰따옴표/ quotation marks)로 q요소를 감싼다.|
| blockquote | 긴 인용문 블록을 지정한다. 브라우저는 blockquote 요소를 들여쓰기 한다. css를 이용하여 다양한 style을 적용할 수 있다. |
