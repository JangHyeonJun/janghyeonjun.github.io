---



parent: AI
title: "역 강화학습 - Inverse Reinforcement Learning"
categories:
  - AI
tags:
  - [InverseReinforcementLearning]
---

- ## [인공지능] 역강화학습

  *[모방학습](ai/Imitation-Learning/)을 먼저 보고 오시면 좋습니다 !*

  참고자료: [IRL 논문 1][http://ai.stanford.edu/~ang/papers/icml00-irl.pdf][^1] , [IRL 논문 2](http://ai.stanford.edu/~ang/papers/icml04-apprentice.pdf)[^2], [RLkorea 논문 리뷰](https://reinforcement-learning-kr.github.io/2019/01/28/1_linear-irl/), [PR-029 리뷰 영상](https://youtu.be/AXi4s3aFN6M)

  #### 역강화학습이란

   에이전트의 보상(Reward)을 통해 정책을 학습하는 강화학습과는 반대로, 보상을 얻는 **보상 함수를 찾아내는** 알고리즘. 보상을 찾는 과정에서 **전문가**(Expert Agent)의 행동을 사용하기 때문에 **모방학습의 한 종류**이다. 또한, 역강화학습에서 보상 함수는 여러가지 형태의 값으로 나타날 수 있기 때문에 **ill-posed problem** 이다. 반대로 **well-posed problem** 은 해답이 존재하고 유일한 문제를 뜻한다.

   **행동 복제**(Behavioral cloning)는 전문가의 데이터의 입출력을 그대로 따라하지만 IRL은 전문가의 행동에서 보상을 추출하여 RL로 학습하기 때문에 좀 더 **일반화**(Generalization)가 쉽다.
  
  
  
  #### 역강화학습을 사용하는 이유
  
   기존 강화학습에는 다음과 같은 어려운 문제가 존재한다.
  
  1. 강화학습에 사용되는 보상 함수가 가져야되는 속성들(Multi attirbute)을 정확하게 표현하는 것은 매우 어려운 문제이다.
     - 예를 들어, 가상의 벌이 먹이를 찾도록 강화 학습을 진행하고 싶을 때 비행거리, 포식자의 위험, 시간, 바람 등 어떤 것을 고려해서 보상을 결정할지 정확히 하기 어렵다.
  
  2. 강화학습에서 어떠한 행동이 '바람직한' 행동인지를 정의하는 것은 어려운 문제이다. 이 때, 전문가의 행동을 '바람직한' 행동으로 보고 사용할 수 있다.
  
  
  
   역강화학습에서는 이러한 문제를 해결하기위한 대안이 될 수 있다.
  
  
  
  #### 역강화학습 과정(간략)
  
  IRL을 통해 보상 함수의 집합(Set)을 찾기 위해, MDP에서 다음과 같은 조건이 필요하다.
  
  - 유한한 **상태 공간**(State Space) S 와 **행동 공간**(Action Space) A 을 가지고 있어야 한다.
  - **모델(**상태 변이 확률)을 이미 알고 있어야 한다.
  - **전문가의 행동들**(Expert trajectories)에서 만들어진 **최적 정책**(Optimal poliicy)이 관찰되었다고 가정한다.
  
  
  
  ##### MDP를 통해 보상함수는 다음과 같이 정의할 수 있다.
  
  - S는 상태, A는 행동, T는 상태 변이 확률,  γ는 감가율, D는 초기 상태 분포, R은 보상을 뜻한다.
  - 보상함수 R(s)는 가중치 w와 상태변이확률 T 그리고 상태 s를 입력으로 0~1 사이의 값을 주는 φ 함수로 정의된다.
  
  ![image](https://user-images.githubusercontent.com/18680116/68068994-2d689700-fd9e-11e9-835a-a3098ba13e6a.png)
  
  ##### 위 정의를 통해 IRL은 다음과 같이 진행된다.
  
  1. 성능이 우수한 정책(전문가의 데이터)을 통해 보상함수 R(s)를 구한다.
  2. 보상을 통해 최적 정책을 계산한다.
  3. 1번과 2번을 반복하다가 전문가의 성능과 이전 정책의 성능의 차이  τ 가  ε/2 보다 작을 때 충분히 학습됐다고 생각하고 학습을 종료한다.  
  
  ![](https://user-images.githubusercontent.com/18680116/68069211-8a654c80-fda0-11e9-888a-5732417d8871.png)
  
  
  

[^1]: Ng, Andrew Y., and Stuart J. Russell. "Algorithms for inverse reinforcement learning." *Icml*. Vol. 1. 2000.

[^2]: Abbeel, Pieter, and Andrew Y. Ng. "Apprenticeship learning via inverse reinforcement learning." *Proceedings of the twenty-first international conference on Machine learning*. ACM, 2004.



---

  
