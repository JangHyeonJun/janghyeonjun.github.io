---


parent: Design Pattern
title: "관찰자 패턴(Observer Pattern)"
categories:
  - Design
tags:
  - [DesignPattern, Observer, ObserverPattern]

---

## [디자인 패턴] 관찰자

*[게임 프로그래밍 패턴 더 빠르고 깔끔한 게임 코드를 구현하는 13가지 디자인 패턴](http://www.hanbit.co.kr/store/books/look.php?p_code=B4342659595)을 참고하여 작성하였습니다.*



![](https://user-images.githubusercontent.com/18680116/72243788-24aeff80-3630-11ea-9b58-f34f9626d48e.png)

*[이미지 출처](https://codeburst.io/observer-pattern-object-oriented-php-4e669431bcb9)*

객체 상태를 계속해서 판단하는 **관찰자**(Observer) 클래스와. 관찰을 당하는 객체를 나타내는 **대상**(Subject) 클래스로 이루어진다.



### 구현

아래 내용은 관찰자 패턴을 구현하기 위한 예시를 보여준다. 디자인 패턴은 `코드가 아닌 패턴`이기 때문에 넘겨주는 매개변수, 사용하는 데이터의 종류는 상관이 없다. 전체적인 프로그램의 구조만 같으면 똑같은 패턴이다.

전체 구현 코드는 [깃허브]( https://github.com/JangHyeonJun/CPPStudy/blob/master/CPPStudy/observer_pattern.cpp)에서 확인할 수 있다.



### Observer Class

`Observer`는 이벤트 알림을 받기위한 `onNotify()` 함수를 구현하도록 만든 추상 클래스(또는 인터페이스)이다. Subject로 부터 개체 정보 `Entity`와 이벤트 정보`Event`를 매개 변수로 받아 관찰한 정보를 토대로 작업을 수행한다. 관찰자 객체는 이 `Observer` 클래스를 상속받아 구현하면 된다.

```c++
class Observer {
public:
	virtual ~Observer() {};
	virtual void onNotify(const Entity& entity, Event event) = 0;
};
```



### Subject Class

`Subject`는 관찰하고 싶은 대상이 된 객체를 뜻하는 클래스이다. `Obseerver` 클래스의 참조 배열을 가지고 있어야 하며(여러 관찰자에게 알림을 보내기 위해), `notify` 함수를 통해 알림을 보내고 `addObserver` 와 `removeObserver` 함수를 통해 관찰자를 등록하고 삭제한다.

```c++
class Subject {
private:
	Observer* observers[MAX_OBSERVERS];
	int numObservers;

protected:
	void notify(const Entity& entity, Event event) {
		for (int i = 0; i < numObservers; i++)
			observers[i]->onNotify(entity, event);
	}

public:
	Subject() { numObservers = 0; }
	void addObserver(Observer* observer)
	{
		observers[numObservers] = observer;
		numObservers++;
		cout << "관찰자 등록 (등록된 개수 : " << numObservers<< " )" << endl;
	}
	void removeObserver(Observer* observer)
	{
		int i = 0;
		for (; i <= numObservers; i++)
			if (observers[i] == observer)
				break;
		for (; i < numObservers; i++)
			observers[i] = observers[i + 1];
		observers[numObservers] = nullptr;
		numObservers--;
		cout << "관찰자 삭제 (등록된 개수 : " << numObservers + 1 << " )" << endl;
	}

};
```



---

  

