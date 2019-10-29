---

layout: single

title: "역 강화학습 - Inverse Reinforcement Learning"
categories:
  - AI
tags:
  - [InverseReinforcementLearning]
---

- ## [인공지능] 역강화학습(작성중)

  *[모방학습](ai/Imitation-Learning/)을 먼저 보고 오시면 좋습니다 !*

  #### 역강화학습이란

   에이전트의 보상(Reward)을 통해 정책을 학습하는 강화학습과는 반대로, 보상을 얻는 **보상 함수를 찾아내는** 알고리즘. 역강화학습에서 보상 함수는 여러가지 형태의 값으로 나타날 수 있기 때문에 **ill-posed problem** 이다.

  

  #### 역강화학습을 사용하는 이유
  
   기존 강화학습에는 다음과 같은 어려운 문제가 존재한다.
  
  1. 강화학습에 사용되는 보상 함수를 정확하게 표현하는 것은 매우 어려운 문제이다.
     - 예를 들어, 가상의 벌이 먹이를 찾도록 강화 학습을 진행하고 싶을 때 비행거리, 포식자의 위험, 시간, 바람 등 어떤 것을 고려해서 보상을 결정할지 정확히 하기 어렵다.
  
  2. 강화학습에서 어떠한 행동이 '바람직한' 행동인지를 정의하는 것은 어려운 문제이다.
  
  
  
   역강화학습에서는 이러한 문제를 해결하기위한 대안이 될 수 있다.
  
  
  
  



*이 [논문][http://ai.stanford.edu/~ang/papers/icml00-irl.pdf][^1] 과 [포스팅](https://reinforcement-learning-kr.github.io/2019/01/28/1_linear-irl/)을 참고해서 작성하였습니다.*

[^1]: Ng, Andrew Y., and Stuart J. Russell. "Algorithms for inverse reinforcement learning." *Icml*. Vol. 1. 2000.



---

  
