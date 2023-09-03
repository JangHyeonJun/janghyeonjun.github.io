---


parent: Design Pattern
title: "템플릿 패턴(Template Pattern)"
categories:
  - Design
tags:
  - [DesignPattern, Template, TemplatePattern]

---

## [디자인 패턴] 템플릿

*[게임 프로그래밍 패턴 더 빠르고 깔끔한 게임 코드를 구현하는 13가지 디자인 패턴](http://www.hanbit.co.kr/store/books/look.php?p_code=B4342659595)을 참고하여 작성하였습니다.*



**템플릿 패턴**은 공통적인 메소드를 차례대로 실행하도록 **기반클래스**에서 정의하고 **메소드의 구현**은 각 **파생클래스**에서 담당하는 기법이다.



### 구현

아래 내용은 **템플릿 패턴**을 구현하기 위한 예시를 보여준다. 디자인 패턴은 `코드가 아닌 패턴`이기 때문에 넘겨주는 매개변수, 사용하는 데이터의 종류는 상관이 없다. 전체적인 프로그램의 구조만 같으면 똑같은 패턴이다.

전체 구현 코드는 [깃허브]( https://github.com/JangHyeonJun/CPPStudy/blob/master/CPPStudy/template_pattern.cpp)에서 확인할 수 있다.



### Ramen Class

`Ramen` 클래스의 `makeRamen` 함수는 라면을 만들기 위한 함수를 순서대로 실행시키는 함수이다. 어떤 스프를 넣을지 어떤 면을 넣을지 라면의 종류에 따라 다르기 때문에 **파생 클래스**에서 **오버라이딩** 해야한다. 특별한 조리법에 대한 `extra` 함수는 특별한 조리법이 필요하지 않는 경우도 있기 때문에 **순수 가상 함수**가 아닌 **가상 함수**를 사용하여 **구현을 강제하지 않는다**.

```c++
class Ramen
{
	virtual void addPowder() = 0;
	virtual void addNoodle() = 0;
	virtual void extra() {}
	void addWater() { cout << "물을 넣는다" << endl; }
	void boil() { cout << "끓인다" << endl; }
public:
	void makeRamen()
	{
		addWater();
		addNoodle();
		addPowder();
		boil();
		extra();
		cout << "라면 완성! " << "\n\n";
	}
};
```



### JjajangRamen Class

짜장 라면을 추상화 시킨 클래스이다.

```c++
class JjajangRamen : public Ramen
{
	void addPowder() override {
		cout << "짜장 라면 스프를 넣는다" << endl;
	}
	void addNoodle() override {
		cout << "면을 넣는다" << endl;
	}
	void extra() override {
		cout << "물을 버린다" << endl;
	}
};
```



### 장점

- 다형성을 실현하여 로직을 공통화 할 수 있다.
- 코드 중복 제거
- 확장성 증가

---

  

