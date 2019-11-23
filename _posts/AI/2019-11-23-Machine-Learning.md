---

layout: single

title: "기계학습 - Machine Learning"
categories:
  - AI
tags:
  - [ML, MachineLearning, SupervisedLearning, Regression, LinearRegression, LogisticRegression, GradientDescent]
---

- ## [인공지능] 기계학습

  컴퓨터가 스스로 학습할 수 있는 알고리즘과 기술을 개발하는 인공지능의 한 분야.

  개발자가 직접 작성하는 기존의 프로그래밍은 많은 규칙을 직접 만들기에는 한계가 있다. (*e.g. 스팸 메세지 필터링, 자율 주행 자동차*)

  

  기계학습은 다음과 같이 나누어진다.

  
  
  - **지도학습**(Supervised Learning) : **Label**이 있는 **Data**가 주어지고 이를 통해 기계가 학습한다. (*e.g. 이미지 분류, 스팸 필터링, 주가 예측*)
  
    - **회귀**(Regression) : 들어온 입력 X에 대해 예측하여 출력 Y를 준다. 출력 값은 **연속적**이다. (*e.g. 시험 점수 예측*)
  
      - **선형 회귀**(Linear Regression) : 학습 데이터를 잘 나타내는 **가설**(Hypothesis, Y = Wx + b)을 찾는 것. **비용 함수**(Cost Function)를 통해 얻은 **비용**(Cost)이 가장 작은 **W**와 **b**를 찾는 것이 **학습**의 **목표**(Goal)이다.
      - **로지스틱 회귀분석**(Logistic Regression) : 선형회귀로 나온 값을 함수를 통해 0~1 사이의 값으로 바꾸어 분석한다.
      - 로지스틱함수(Logistic Function) : 
  
    - **분류**(Classfication) : 들어온 입력 X에 대하여 어떤 그룹에 속하는지 분류해준다. (*e.g. 시험 등급 예측*)
  
    - **비용 함수**(Cost Function) **또는 손실 함수**(Loss Function) : 입력에 대하여 기계가 예측하는 가설(Hypothesis)과 실제 결과 값의 차이(Error)를 계산하는 함수. (*e.g. 평균 제곱 오차, Mean Squared Error, MSE*)
  
    - **경사하강법**(Gradient Descent) : 비용함수를 최소화 하는 알고리즘. W와 b 변수들에 대해 **미분**하여 기울기 구하고, 비용을 최소화 시키는 방향으로 **학습률**(Learning Rate) 만큼 변경한다. 
  
      
  
  - **비지도학습**(Unsupervised Learning) : **Label** 없는 데이터를 통해 기계가 스스로 학습한다.
  
  - **강화학습**(Reinforcement Learning)
  
  
  





---

  
