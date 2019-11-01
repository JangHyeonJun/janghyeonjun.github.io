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

  *이 [논문][http://ai.stanford.edu/~ang/papers/icml00-irl.pdf][^1] 과 [RLkorea 논문 리뷰](https://reinforcement-learning-kr.github.io/2019/01/28/1_linear-irl/)을 참고해서 작성하였습니다.*

  #### 역강화학습이란

   에이전트의 보상(Reward)을 통해 정책을 학습하는 강화학습과는 반대로, 보상을 얻는 **보상 함수를 찾아내는** 알고리즘. 보상을 찾는 과정에서 **전문가**(Expert Agent)의 행동을 사용하기 때문에 **모방학습의 한 종류**이다. 또한, 역강화학습에서 보상 함수는 여러가지 형태의 값으로 나타날 수 있기 때문에 **ill-posed problem** 이다.

  
  
  #### 역강화학습을 사용하는 이유
  
   기존 강화학습에는 다음과 같은 어려운 문제가 존재한다.
  
  1. 강화학습에 사용되는 보상 함수가 가져야되는 속성들(Multi-attirbute)을 정확하게 표현하는 것은 매우 어려운 문제이다.
     - 예를 들어, 가상의 벌이 먹이를 찾도록 강화 학습을 진행하고 싶을 때 비행거리, 포식자의 위험, 시간, 바람 등 어떤 것을 고려해서 보상을 결정할지 정확히 하기 어렵다.
  
  2. 강화학습에서 어떠한 행동이 '바람직한' 행동인지를 정의하는 것은 어려운 문제이다. 이 때, 전문가의 행동을 '바람직한' 행동으로 보고 사용할 수 있다.
  
  
  
   역강화학습에서는 이러한 문제를 해결하기위한 대안이 될 수 있다.
  
  
  
  #### 역강화학습 과정(간략)
  
  IRL을 통해 보상 함수의 집합(Set)을 찾기 위해, MDP에서 다음과 같은 조건이 필요하다.
  
  - 상태 공간(State Space)이 유한(Finite)해야한다.
  - 모델을 이미 알고 있어야 한다.
  - 최적정책(Optimal Poliicy)이 관찰되었다고 가정한다.
  
  
  
   IRL 을 통해 얻어낸 보상 함수의 **퇴화도**(Degeneracy, 정책이 최적이 아닌지와 충분하지 못한 크기인지)를 없애기 위해 최적화 방법으로 **heuristic** 한 **선형 프로그래밍**(Linear Programming, 선형 방정식으로 정해진 여러 조건들을 만족하면서 최적화 하는 방법)
  
  
  
  다음 내용은 [동영상1](https://www.youtube.com/watch?v=AXi4s3aFN6M), [동영상2](https://www.youtube.com/watch?v=AXi4s3aFN6M) 참조하기
  
  





[^1]: Ng, Andrew Y., and Stuart J. Russell. "Algorithms for inverse reinforcement learning." *Icml*. Vol. 1. 2000.



---

  
