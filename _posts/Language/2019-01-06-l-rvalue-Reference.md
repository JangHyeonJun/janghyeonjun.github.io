---


parent: Language
title: "좌-우측값 레퍼런스(l-value r-value reference)"
categories:
  - Language
tags:
  - [lvalue, rvalue, reference, lvalue reference, rvalue reference]
---



## 좌-우측값 레퍼런스(l-rvalue reference)

```c++
int a = 10;
```

  C++ 에서는 위에서 변수 `a`와 같이 좌측에서 사용되는 주소를 가지고 데이터를 보관하는 값을 **좌측값**(lvalue), 임시로 사용하며 주소를 가지지 않는 `10` 과 같은 값을 **우측값**(rvalue)이라고 한다.



```c++
int& ref_a = a;
int& ref_10 = 10; // error
```

  `&` 연산자를 통해 우리는 참조 형식의 변수를 선언함으로써 해당 변수를 직접적으로 접근하고 수정할 수 있다. 이러한 참조 연산자 `&`는 주소를 가지고 있는 **좌측값**(lvalue)에서만 사용할 수 있기때문에, 다른 말로 **좌측값 레퍼런스**(lvalue reference) 라고 한다.



 **좌측값 레퍼런스**(= 참조 연산자)를 잘 사용하면, 프로그램안에서 임시 객체나 인자 값을 생성하면서 발생하는 복사 횟수를 줄일 수 있다. 만약 우측값 레퍼런스가 존재한다면 우측값의 복사가 일어나는 횟수도 줄일 수 있을것이다.



```
int&& ref_10 = 10;
int&& ref_a = a; // error
```



 `&&` 연산자를 사용하면 우측값에 대한 참조를 가지고 있는 **우측값 레퍼런스**(rvalue reference)를 만들 수 있다. 주의할 점은 우측값은 주소를 가지지 않고 임시로 사용하는 임시 객체이므로 사용 직후에 소멸되지만, 우측값 레퍼런스를 사용할 경우 우측값은 사라지지 않는다.
