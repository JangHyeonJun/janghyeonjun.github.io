---
layout: single

title: "싱글턴 패턴(Singleton Pattern)"
categories:
  - Design
tags:
  - [DesignPattern, Singleton, SingletonPattern]

---

## [디자인 패턴] 싱글턴

*[게임 프로그래밍 패턴 더 빠르고 깔끔한 게임 코드를 구현하는 13가지 디자인 패턴](http://www.hanbit.co.kr/store/books/look.php?p_code=B4342659595)을 참고하여 작성하였습니다.*



**싱글턴 패턴**은 오직 한 개의 **객체**(Instance)만 갖도록 보장하며, 어디서든 접근할 수 있는 **전역 접근점**을 제공하는 기법이다.



### 구현

아래 내용은 **싱글턴 패턴**을 구현하기 위한 예시를 보여준다. 디자인 패턴은 `코드가 아닌 패턴`이기 때문에 넘겨주는 매개변수, 사용하는 데이터의 종류는 상관이 없다. 전체적인 프로그램의 구조만 같으면 똑같은 패턴이다.

전체 구현 코드는 [깃허브]( https://github.com/JangHyeonJun/CPPStudy/blob/master/CPPStudy/singleton_pattern.cpp)에서 확인할 수 있다.



### Singleton Class

`Singleton` 클래스의 생성자를 `private` 하게 선언하여, 외부에서 싱글턴 객체의 생성을 방지한다. 전역적인 접근을 위해 `instance()` 함수를 제공하며, 이 함수 안에서 `nullptr`을 체크한 후 객체의 생성이 이루어진다, 단 하나의 객체(Instance)를 갖기 위해 `Singleton*` 타입의 전역 변수를 `private` 하게 가지고 함수를 통해서 객체에게 접근할 수 있도록한다.

```c++
class Singleton {
	Singleton() {}
	static Singleton* _instance;
public:
	static Singleton* instance() {
		if (_instance == nullptr)
			_instance = new Singleton();
		return _instance;
	}
};
```





### 장점

- 어디에서나 접근할 수 있다.

- 인스턴스가 오직 하나이기 때문에 데이터 저장이 단순해진다.

- 처음 사용될 때 초기화(게으른 초기화 라고도 부른다)를 하기 때문에 CPU 사용량에 도움이 되고, 필요로 하는 정보가 준비될 수 있는 시간이 주어진다.

- 상속을 통해 파생 클래스 타입에 따라 구체화된 클래스를 만들 수 있다.



### 단점

- 전역 변수로써 사용된다
  - 어디서나 접근 가능하기 때문에 디버깅 시에 고쳐야할 코드의 위치를 찾기 힘들다.
  - 어느 인스턴스든 접근 가능하기 때문에 객체 간 **결합도**(커플링, Coupling)가 커진다.
  - 멀티스레드와 같은 동시성 프로그래밍 시에 전역변수는 **경쟁 상태**(Race Condition)를 쉽게 만들고 동기화를 어렵게 한다.
- [**한 개의 인스턴스** / **전역 접근**] 두 가지 기능을 강제한다. 전역 접근만을 원할 때는 싱글턴 패턴 외에 다른 대안이 존재한다.
- 적절한 초기화 시간을 찾아 제어해야 한다.

---

  

