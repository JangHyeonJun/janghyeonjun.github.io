---

layout: default

parent: AI
title: "기계학습 - Machine Learning"
categories:
  - AI
tags:
  - [ML, MachineLearning, SupervisedLearning, Regression, LinearRegression, LogisticRegression, Classification, BinaryClassification, MultinomialClassification, CostFunction, CrossEntropy, GradientDescent, Overfitting, Underfitting]
use_math: true
---

- ## [인공지능] 기계학습

  컴퓨터가 스스로 학습할 수 있는 알고리즘과 기술을 개발하는 인공지능의 한 분야.

  개발자가 직접 작성하는 기존의 프로그래밍은 많은 규칙을 직접 만들기에는 한계가 있다. (*e.g. 스팸 메세지 필터링, 자율 주행 자동차*)

  

  기계학습은 다음과 같이 나누어진다.

  
  
  - **지도학습**(Supervised Learning) : **Label**이 있는 **Data**가 주어지고 이를 통해 기계가 학습한다. (*e.g. 이미지 분류, 스팸 필터링, 주가 예측*)
  
  - **비지도학습**(Unsupervised Learning) : **Label** 없는 데이터를 통해 기계가 스스로 학습한다.
  
  - **강화학습**(Reinforcement Learning) : 현재 **상태** $s$ 에서 **행동** $a$ 를 취하며 받는 **보상** $r$ 을 최대화 하는 행동을 하도록 학습한다.
  
  
  
  다음은 기계학습에서 사용되는 용어이다.
  
  
  
  - **회귀**(Regression) : 들어온 입력 $X$에 대해 예측하여 출력 $Y$를 준다. 출력 값은 **연속적**이다. (*e.g. 시험 점수 예측*)
  - **선형 회귀**(Linear Regression) : 학습 데이터를 잘 나타내는 **가설**(Hypothesis, e.g. $Y = Wx + b$)을 찾는 것. **비용 함수**(Cost Function)를 통해 얻은 **비용**(Cost)이 가장 작은 **W**와 **b**를 찾는 것이 **학습**의 **목표**(Goal)이다.
    - **로지스틱 회귀분석**(Logistic Regression) : 선형회귀로 나온 값을 함수를 통해 0~1 사이의 값으로 바꾸어 분석한다.
  - **분류**(Classfication) : 들어온 입력 $X$에 대하여 어떤 그룹에 속하는지 분류해준다. (*e.g. 시험 등급 예측*)
  - **이항 분류**(Binary Classification) 또는 **로지스틱 분류**(Logistic Classification) : 로지스틱 회귀를 통해 나온 0~1 사이의 값에 경계(Boundary)를 두어 참, 거짓으로 분류한다.
    - **다항 분류**(Multinomial Classification) : 여러개의 로지스틱 값들이 나올 때 **소프트맥스**(Softmax) 함수를 통해 각 값들의 합이 1이 되도록 만들고 **원-핫 인코딩**(One-Hot Encoding)을 통해 가장 높은 숫자만 1로 만들고 나머지는 0으로 만들어 분류한다.
  - **비용 함수**(Cost Function) **또는 손실 함수**(Loss Function) : 입력에 대하여 기계가 예측하는 가설(Hypothesis)과 실제 결과 값의 차이(Error)를 계산하는 함수. (*e.g. 회귀에서 주로 쓰이는 **평균 제곱 오차**, Mean Squared Error, MSE*) (*e.g. 분류에서 주로 쓰이는 **크로스 엔트로피**, Cross Entropy*)
  - **크로스 엔트로피**(Cross Entropy) : 분류에서 **MSE**를 사용할 경우 **학습의 속도가 느리고 멈출 수 있으며**, **지역 최소화 문제**가 생긴다.  이를 해결하기 위해 hypothesis 가 label과 같을 경우 0, 다를 경우 매우 큰 오차를 주는 비용 함수이다.
  - **경사하강법**(Gradient Descent) : 비용함수를 최소화 하는 알고리즘. $W$와 $b$ 변수들에 대해 **미분**하여 기울기 구하고, 비용을 최소화 시키는 방향으로 **학습률**(Learning Rate) 만큼 변경한다.
  - **오버피팅**(Overfitting) : 모델이 실제 분포보다 학습 데이터의 분포에 근접하게 학습되는 현상. 이를 피하는 방법을 **정규화**(Regulariztion)라고 한다.
  - **언더피팅**(Underfitting) : 모델이 너무 단순하여 **학습 오류**(cost)가 줄어들지 않는 현상. 모델에 **특성**(feature) $x$ 를 추가하여 해결한다. 그러나 특성이 너무 많으면 오버피팅이 발생한다.
  - **역전파 알고리즘**(Backpropagation) : **경사하강법**을 사용하기 위해 에러에 대한 미분값이 필요하다. 여러층으로 구성된 다층 신경망에서 **미분값을 알아내기위한 알고리즘**으로써, **연쇄 법칙**(Chain Rule)을 통해 미분을 정리한다.
  
  
  





---

  
