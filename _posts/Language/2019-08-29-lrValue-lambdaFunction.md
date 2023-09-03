---


parent: Language
title: "l-value, r-value, 람다 함수"
categories:
  - Language
tags:
  - [C++, ivalue, rvalue, lamdafunction]


---

## [C++] l-value 와 r-value

c++ 은 value category 를 나누어, **lvalue** 와 **rvalue** 로 나눈다. **lvalue**는 값을 위한 공간(주소)이 존재하고 **rvalue**는 값을 위한 공간(주소)이 존재하지 않는다(정확히는 메모리에 존재하지만 주소가 없어 어디인지는 알 수 없는). 

```
int main()
{
int i;
	i = 7;   // 'i'는 lvalue '7'은 rvalue.
}
```



## [C++] 람다 함수(lambda function)

`c++ 11`에서 처음으로 도입된 이름 없는 함수 객체이다. 다음과 같이 선언할 수 있다. 

(3 가지 다 **같은** 람다 함수이다.)

```
[](int i) -> bool { return i % 2 == 1; }
[](int i) -> { return i % 2 == 1; }
[](int i) { return i % 2 == 1; }
```



선언한 람다 함수는 auto 키워드를 통해 다음과 같이 사용할 수 있다.

```
auto is_odd = [](int i) {return i % 2 == 1; };
is_odd(3); // True
```



auto 키워드 없이 다음과 같이 바로 사용할 수도 있다.

```
[](int i) { return i % 2 == 1; }(3);
```



외부에 있는 참조(reference)를 캡쳐한다는 의미의 **캡쳐목록(Capture List)**을 사용하면 람다 함수 외부에 선언된 변수도 함수 안에서 사용할 수 있다. `&`를 붙여서 참조를 얻어오지 않으면 `const` 형태의 복사본을 캡쳐하게 된다.

```
int main()
{
	int two = 2;
	
	auto plusTwo = [&two](int i){ return i + two; }
	plusTwo(10); // 12
}
```

클래스 내에서 람다함수를 사용하고 멤버 변수를 참조하고 싶을 경우 캡쳐 리스트에 `this`를 넣으면 된다.

```
class A
{
	int num;
public:
	A():num(0);
	auto plusTwo = [this](int i){ return this->num + 2; }
}
```

