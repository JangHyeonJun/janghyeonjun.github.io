---
layout: default

parent: Language
title: "가비지 컬렉션(Garbage Collection)"
categories:
  - Language
tags:
  - [GC, GarbageCollection, GarbageCollector]
---

## 가비지 컬렉션

메모리 관리 기법. 동적 할당 메모리 중 사용하지 않는 메모리를 자동으로 찾아내 해제하는 기능.



---

### 추적 기반 가비지 컬렉션 (Tracing Garbage Collection)

특정한 타이밍에 현재 할당된 모든 메모리를 조사하여 접근 불가능한 메모리를 해제.

**JVM**  / **.NET Framework** 의 **가상머신** 또는 **Python** / **Ruby** / **Perl** 등의 **스크립트 언어** **OCaml** / **Go** 등의 **네이티브 컴파일 언어**에서 사용한다.



#### 점진적 가비지 컬렉션 (Incremental Garbage Collection)

접근 불가능한 메모리를 쓰레기로 **마킹**해놓고 점진적으로 할당 해제 하는 방법. 



- **삼색 기법 마킹** (Tri Color Marking)

  접근 가능한 지 알 수없는 메모리를 **흰색**, 참조중인 메모리가 마킹되지 않았을 경우 **회색**, 작업이 끝난 메모리를 **검은색**으로 마킹한다. GC가 중간에 정지되어도 회색 메모리부터 다시 조사할 수 있다.



#### 세대별 가비지 컬렉션 (Generational Garbage Collection)

잠깐 쓰고 사라지는 객체를 크기가 작은 **NEW 영역**에 할당하고, NEW 영역에서 오래 살아남은 객체를 **OLD 영역**으로 이동시켜 세대를 구분하는 방법. 대부분의 쓰레기는 NEW 영역에서 발생하여 비용을 낮출 수 있다.



---

### 레퍼런스 카운팅 가비지 컬렉션 (Reference Counting Garbage Collection)

특정 메모리를 참조할 경우 **참조 횟수**를 1을 더하고, 참조가 끝난 경우 1을 빼서 0이 될 경우에 메모리를 해제하는 방식.

소멸자를 구현할 수 있는 **C++** / **Python** 과 같은 언어에서 채택된다.



