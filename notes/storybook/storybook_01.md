# StoryBook

컴포넌트 기반 개발(Component-Driven Development)(CDD) 방법론에 따라 Storybook UI를 만들 예정 <br>
컴포넌트 > 마지막 화면에 이르기까지 상향적으로 UI를 개발하는 과정<br>
CDD는 UI를 구축 할 때 직면하게 되는 규모의 복잡성을 해결하는 데 도움이 된다.


Stroybook은 컴포넌트와 하위 스토리의 두 가지 기본 단계로 구성<br>
각 스토리는 해당 컴포넌트에 대응된다고 생각하면 된다.

- 컴포넌트
  - 스토리
  - 스토리
  - 스토리

``` javascript
export default {
  component: Task,
  title: 'Task',
};
```
component -- 해당 컴포넌트<br>
title -- Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법

스토리는 주어진 state안에서 렌더링된 요소(ex. prop가 포함된 컴포넌트)를 리턴하는 함수<br>
함수형 컴포넌트(Functional Component)와 같다.



