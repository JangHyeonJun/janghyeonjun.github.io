---



parent: AI
title: "강화학습 - Reinforcement Learning(5)"
categories:
  - AI
tags:
  - [DeepLearning, DeepNeuralNetwork, ArtificialNeuralNetwork, Perceptron, ApproximationFunction]
---

- ## [인공지능] 인공신경망(Artificial Neural Network)과 강화학습

  

  #### 기존 강화학습의 한계

   몬테카를로, 살사, 큐러닝은 모델 프리(Model-Free) 알고리즘으로 환경에 대한 모델 없이 샘플링을 통해 학습함으로써 다이내믹 프로그래밍의 한계 중 환경에 대한 완벽한 정보가 필요함을 해결하였다. 하지만 계산 복잡도와 차원의 저주 문제를 해결하지 못하였다.

  

  #### 근사 함수와 인공신경망

  ![근사 함수 예시](https://user-images.githubusercontent.com/18680116/67083173-a62ff680-f1d5-11e9-986a-22d84ff052e0.png) 

  *근사 함수 예시*  [^1]

  [^1]: [출처 - Chris McCormick](https://mccormickml.com/2015/08/26/rbfn-tutorial-part-ii-function-approximation/)

  

   상태의 숫자가 많을 때(eg. 바둑) 모든 가치 함수, 큐 함수를 저장하는 것은 불가능에 가깝다. 이러한 데이터를 근사하게 알려주는 함수를 만들어 테이블을 대신하면 상태의 숫자가 많아져도 강화학습을 적용할 수 있게된다. 

  

  #### 퍼셉트론
  
   딥러닝의 발전 이후로 뛰어난 성능을 가지게 되어 최근에는 거의 대부분이 근사 함수로써 인공신경망을 사용한다. 인공 신경망은 신경세포의 뉴런(뇌 활동의 기본단위)에서 영감을 받아 만든 수학적 모델이다.
  
   다음 그림은 인공신경망에서 한 노드만으로 이루어진 **퍼셉트론**(Perceptron)을 나타낸 것이다. 
  
  ![인공 신경망](https://user-images.githubusercontent.com/18680116/67085979-d75ef580-f1da-11e9-94de-60a9a3d9fd33.png)
  
  *퍼셉트론 예시*[^2]
  
  [^2]: Vieira, Sandra & Pinaya, Walter & Mechelli, Andrea. (2017). Using deep learning to investigate the neuroimaging correlates of psychiatric and neurological disorders: Methods and applications. Neuroscience & Biobehavioral Reviews. 74. 10.1016/j.neubiorev.2017.01.002.
  
   퍼셉트론의 원리는 각 입력 ***x*** 에 가중치(weight) ***w*** 를 곱한 값들의 합에 편향(bias) ***b***를 더한 값 y 를 얻어낸다. 이후에 **y** 가 **임계값**(threshold) 에 대한 수치를 확인하는 활성 함수(Activation Function) ***f*** 에 입력으로 넣어 최종적인 출력을 얻는다.
  
   활성함수는 초기에 임계값을 넘으면 1, 그렇지 않으면 0 을 출력했지만 현재는 여러가지 종류를 사용한다. 대표적으로는 **ReLU, Tanh, Sigmoid** 함수가 있다.
  
  
  
  #### 인공신경망
  
   뉴런을 흉내낸 인공 신경인 퍼셉트론은 근사치를 얻어낼 수 있지만 치명적인 단점이 있다. 선형 구조로 되어있기 때문에 XOR 게이트와 같은 문제에 답을 낼 수 없다. 선형을 해결하기 위해 퍼셉트론을 여러개 두는(퍼셉트론의 출력을 다른 퍼셉트론의 입력으로) 다층 퍼셉트론을 통해 XOR 문제를 해결하였다.
  
   노드를 병렬로 여러개 세운것을 하나의 층(layer)이라고 하며 입력을 받는 층을 **입력층**(Input Layer), 출력을 하는 층은 **출력층**(Output Layer)이라고 하며 입력층과 출력층 사이에 쌓인 층을 **은닉층**(Hidden Layer)이라고 한다. 여러개의 퍼셉트론을 통해 입력층, 출력층, 은닉층으로 인공의 뉴런이 망으로 이루어져있다고 해서 **인공신경망**(Artificial Neural Netwrok)이라고 부르며, 은닉 층이 2개 이상일 경우엔 **심층신경망**(Deep Neural Network)이라고 한다.
  
  ![](https://user-images.githubusercontent.com/18680116/67086001-e180f400-f1da-11e9-9d30-c0d175f7303f.png)
  
  *심층신경망 예시*[^2]
  
  
  
  #### 딥러닝 
  
   기존의 기계학습은 전문가가 정한 추상화 기준에따라 데이터에서 **특징 추출**(Feature Extraction)을 진행한 후 학습을 진행했다. 하지만 딥러닝에서는 복잡한 특징을 컴퓨터가 스스로 추출한다. 딥러닝에서 특징을 추출하는 과정은 결국 **가중치**와 **편향**을 학습하는 것이다.
  
  
  
  #### 지도학습
  
   입력과 입력에 대한 정답으로 나와야할 출력(**타깃**, target)이 짝을 지은 데이터를 통해 학습하는 것을 지도학습이라고 한다. 입력이 심층신경망을 통해서 나온 출력(**예측**)이 타깃과 얼마나 같은지 오차를 계산한다. 오차를 계산할 때 사용하는 함수를 **오차함수**(Loss Function)라고 하며 여러 종류가 있다. 대표적인 오차함수 **평균제곱오차**(MSE, Mean Squared Error)는 다음과 같은 수식으로 오차를 결정한다.
  
  
  $$
  오차 = (타깃 - 예측)^2
  $$
  
  
   이렇게 구한 오차를 통해 심층신경망을 학습하게 되는데 이때 학습 알고리즘이 **역전파**(Back Propagation) 알고리즘이 사용된다. 역전파 알고리즘은 출력으로 나온 예측값과 타깃의 오차를 다시 거꾸로 전파해 학습한다는 뜻이다.
  
   역전파 알고리즘은 편미분을 통해 학습을 진행한다. 가중치 또는 편향을 조금 증가시키거나 감소시켰을 때 오차가 어떻게 변하는지 알 수 있고 이 편미분 값을 통해 가중치나 편향 값을 증가시켜야 하는지 감소시켜야 하는지 알 수 있게되고 가중치나 편향 값을 업데이트 하며 심층신경망을 학습하게된다. 이 방법을 다른 말로 **경사하강법**(Gradient Descent)이라고 한다. 경사하강법에는 **SGD, RMSprop, Adam**과 같은 여러 방법이 있고 한번에 얼마나 업데이트할지 **학습 속도**(Learning Rate)라는 변수를 가지고 있다. 상황에 따라 맞는 방법을 사용한다.
  
  
  
  ---
  
  
