---
layout: single

title: "컴파일/런 타임 (Compile/Run Time)"
categories:
  - OS
tags:
  - [Compile, Runtime, Compiletime, Preprocessor, Compiler, Linker, ObjectFile, Assembler, DLL, DynamicLinking, Error, Stack, Heap]
use_math : true
---





## 벡터(Vector)





## 컴파일타임(Compiletime)

### 컴파일이란?

  개발자가 작성한 소스코드를 기계가 이해하기 위해서는 아래와 같은 컴파일 과정이 필요하다.

![](https://user-images.githubusercontent.com/18680116/73133426-b9235400-406b-11ea-9154-854bcf822cee.png)

  **컴파일 과정**에서 **소스 코드를 전처리**하고 컴파일러에 의해 기계가 이해할 수 있는 **저 수준 언어로 작성된 목적 파일로 변경**한 후, 목적 파일들을 링커가 **하나의 실행 파일**로 만들어 주게된다.

 **실행파일**에는 소스코드, 정적 라이브러리들이 포함된다.



 실행 파일에 들어가는 메모리의 양을 줄이고, 라이브러리 데이터가 중복되지 않기 위해 **동적 링크 라이브러리**(Dynamic-link Library, DLL)를 사용해 실행파일과 분리시킬 수 있다. DLL 또한 컴파일러에 의해 컴파일 된다.

 **DLL**은 다음과 같은 장단점이 있다.

-  DLL을 사용하는 프로그램이 여러개 있어도, 한 번만 메모리에 적재하고 DLL 을 공유한다.
- 라이브러리 내용이 수정되어도 실행 파일을 다시 컴파일 할 필요가 없다.
- 실행 파일의 크기가 줄어든다.



### 컴파일타임

이러한 컴파일을 하는 시간을 컴파일타임 이라고 하며, **문맥 오류**(Syntax error), **타입 체크오류**(Type erroor) 문제를 알 수 있으며. 스택 영역의 전체 크기가 결정되며 이 크기를 넘어가 때 **스택 오버플로**(Stack Overflow)가 발생한다.



## 런타임(Runtime)

프로그램이 실행되고 있을 때를 런타임이라고 하며, **0 나누기 오류(0 division error)** 또는 **Null 참조 오류(Null reference error)**, **메모리 부족 오류** 문제를 알 수 있다. 힙 영역의 전체 크기가 결정된다.