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

컴포넌트에 Permutations(순열(?))이 여러개 이기 때문에 Template 변수에 할당 해서, 작성하고 유지 해야 하는 코드의 양이 줄어들 것이다.
``` text
template.bind({})는 함수의 복사본을 만드는 표준 JavaScript의 한 기법입니다.
우리는 이 기법을 사용하여 각각의 스토리가 고유한 속성(properties)을 갖지만 동시에 동일한 구현을 사용하도록 할 수 있습니다.
```

인수(arguments) 또는 간단히 줄여서 args를 사용하여 storybook을 다시 시작하지 않고도 controls addon으로 컴포넌트를 실시간으로 수정 가능<br>
args의 값이 변하면 컴포넌트도 함께 변합니다.

스토리를 만들 때 task인수를 사용, 컴포넌트가 예상하는 task의 형태를 구성
\> 실제 데이터를 모델로 하여 만들어진다. 
> export 하는 것은 차후 스토리에서 이를 재사용 할 수 있도록 해준다.

액션(actions)은 UI 컴포넌트를 독립적으로 만들 때, 컴포넌트와의 상호작용을 확인하는데 도움을 준다.
> 앱의 컨텍스트에서 함수와 state에 접근하지 못할 때 action()을 사용하여 끼워 넣을 수 있음








