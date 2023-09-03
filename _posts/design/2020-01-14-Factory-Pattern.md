---


parent: Design Pattern
title: "팩토리 패턴(Factory Pattern)"
categories:
  - Design
tags:
  - [DesignPattern, Factory, FactoryPattern, AbstractFactory, FactoryMethod]

---

## [디자인 패턴] 팩토리

*[게임 프로그래밍 패턴 더 빠르고 깔끔한 게임 코드를 구현하는 13가지 디자인 패턴](http://www.hanbit.co.kr/store/books/look.php?p_code=B4342659595)을 참고하여 작성하였습니다.*

**팩토리 패턴**은 **팩토리 메소드 패턴**과 **추상 팩토리 패턴** 2가지 기법으로 나누어진다.



- **팩토리 메소드 패턴**은 객체 생성을 담당하는 메소드를 만드는 기법 어떤 객체를 생성할지는 매개변수로 전달한다.

- **추상 팩토리 패턴**은 객체를 생성하기 위한 함수가 정의된 `Abstract Factory` 를 **기반 클래스**로 정의하고 어떤 객체를 만들지는 여러 종류의 `Factory`라는 **파생 클래스** 를 만들어 객체를  생성 및 반환하는 기법이다.

  

---

### 구현 (팩토리 메소드)

아래 내용은 **팩토리 메소드 패턴**을 구현하기 위한 예시를 보여준다. 디자인 패턴은 `코드가 아닌 패턴`이기 때문에 넘겨주는 매개변수, 사용하는 데이터의 종류는 상관이 없다. 전체적인 프로그램의 구조만 같으면 똑같은 패턴이다.

전체 구현 코드는 [깃허브]( https://github.com/JangHyeonJun/CPPStudy/blob/master/CPPStudy/factory_pattern.cpp)에서 확인할 수 있다.



### Factory Class

자동차를 생성하는 `CarFactory` 클래스에서 `makeCar` 함수를 통해 객체를 생성할 수 있다.

```c++
class CarFactory {
public: 
	Car* makeCar(CarType type) {
		if (type == SUV)
			return new Suv();
		else if (type == SEDAN)
			return new Sedan();
	}
};
```





---

### 구현 (추상 팩토리)

아래 내용은 **추상 팩토리 패턴**을 구현하기 위한 예시를 보여준다. 디자인 패턴은 `코드가 아닌 패턴`이기 때문에 넘겨주는 매개변수, 사용하는 데이터의 종류는 상관이 없다. 전체적인 프로그램의 구조만 같으면 똑같은 패턴이다.

전체 구현 코드는 [깃허브]( https://github.com/JangHyeonJun/CPPStudy/blob/master/CPPStudy/abstract_factory_pattern.cpp)에서 확인할 수 있다.



### Factory Class

자동차와 오토바이를 생성하는 `VehicleFactory` 클래스를 상속받는 `DomesticFactory`와 `ForeignFactory` 클래스는 각각 국산 제품과 외제품을 제작한다.

```c++
class VehicleFactory {
public:
	virtual Car* createCar() = 0;
	virtual Bike* createBike() = 0;
};

class DomesticFactory : public VehicleFactory {
public:
	Car* createCar() override { return new DomesticCar(); }
	Bike* createBike() override { return new DomesticBike(); }
};

class ForeignFactory : public VehicleFactory {
public:
	Car* createCar() override { return new ForeignCar(); }
	Bike* createBike() override { return new ForeignBike(); }
};
```

---

  

