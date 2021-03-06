---
title: "@obj"
---

external 바인딩에 `@obj`를 쓰면 객체를 생성해주는 함수를 자동으로 만들어줍니다.

이 함수가 불릴 때는 함수의 파라메터 레이블이 JS 객체의 필드에 대응되도록 평가됩니다.

굉장히 유용한 기능이니 알아두시면 좋습니다.

이름있는 인자를 옵셔널로 만들고 함후 호출시 이를 생략하면 생성되는 객체에서는 이 필드를 포함하지 않습니다.
따라서 원하는 필드만을 포함한 객체를 런타임에 동적으로 만들고 싶을 때 유용합니다.

예를 들어 아래와 같은 JS 객체가 필요하다고 해봅시다.

```jsx
var homeRoute = {
  method: "GET",
  path: "/",
  action: () => console.log("Home"),
  // options: ...
};
```

첫 3개의 필드만 필수고 나머지는 옵셔널입니다. 이런 경우 바인딩을 아래와 같이 만들면 됩니다.

```reason
@obj
external route: (
  ~_method: string,
  ~path: string,
  ~action: list(string) => unit,
  ~options: {..}=?,
  unit,
) => _ = ""
```

**주의**: 끝에 있는 `= ""`는 더미 플레이스홀더입니다. 문법적인 제약 때문에 써줘야 하는거라 다른 의도는 없습니다.

이 함수는 4개의 레이블드 파라메터(넷중 하나는 옵셔널)와, 레이블 없는 하나 인자를 마지막으로 가집니다. (없으면 컴파일이 안됩니다)
그리고 `_method`라는 파라메터는 리스크립트의 `method` 키워드와의 충돌을 피하기 위해서 앞에 언더스코어를 붙였습니.

리턴타입이 `_` 인 점에도 주목하세요.
이는 리스크립트에게 JS 객체의 타입 전체를 추론하라는 의미인데, 이런 표현이 없었다면 모든 타입을 직접 손으로 써줬어야 했을 것입니다.

실제 호출은 이렇게 할 수 있습니다.

```reason
let homeRoute = route(
  ~_method="GET",
  ~path="/",
  ~action=_ => Js.log("Home"),
  (),
);
```
