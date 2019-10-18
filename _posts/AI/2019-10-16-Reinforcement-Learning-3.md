---

layout: single

title: "강화학습 - Reinforcement Learning(3)"
categories:
  - AI
tags:
  - [DynamicProgramming, PolicyIteration, ValueIteration]
---

- ## [인공지능] 다이내믹 프로그래밍

   

  #### 순차적 행동 결정 문제 풀이법

  1. **순차적 행동 결정 문제를 MDP로 정의**

  2. **가치함수를 벨만 방정식을 통해 반복 계산**

  3. **최적 가치함수 / 최적 정책 찾기**

  

   벨만 방정식을 만든 리처드 벨만이 제시한 기법으로 시간에 따라 변하는 프로그래밍을 의미한다. 큰 문제를 작은 문제로 쪼개어 작은 문제의 답을 서로 이용함으로써 계산량을 줄인다.

  

  #### 정책 이터레이션

   다이내믹 프로그래밍과 벨만 기대 방정식을 통해 문제를 푼다. 대다수의 정책은 확률적인 정책이기 때문에 가치함수를 계산하려면 기댓값이 들어가야하므로 벨만 기대 방정식을 이용한다.

   처음에는 정책에 대한 정보가 없기 때문에 무작위 행동을 정하는 정책을 사용하고 정책 평가(Policy Evaluation)와 정책 발전(Policy Improvement)을 반복해 최적 정책을 찾아낸다.

  - 정책 평가
  
     현재의 정책 π 에서 가치 함수 V<sub>π</sub>(s) 를 통해 정책이 좋은지 판단한다. 가치 함수를 구할 때 먼 미래를 고려할수록 경우의 수가 기하급수적으로 늘어나기 때문에 다이내믹 프로그래밍을 통해 게산량 문제를 해결한다.
  
     정책 평가 시에는 t 에서 t+1 까지 한 타임스탭만 사용해서 모든 s에 대해 가치함수 V(s)를 업데이트 하고 이것을 무한히 반복하면 참 가치함수가 된다.
  
- 정책 발전
  
   상태 s에서 선택 가능한 행동 중 가장 큰 q함수 값을 가지는 행동을 하도록 탐욕 정책 발전(Greedy Policy Improvement)를 사용한다. 장기적으로 반복하면 최적 정책을 찾을 수 있게된다.

> 1. 정책 평가(벨만 기대 방정식을 통해 현재 정책의 참 가치함수 구하기) 
  > 2. 정책 발전(참 가치 함수 중 탐욕 정책 발전을 통해 최적 정책 찾기)

  

  #### 가치 이터레이션

다이내믹 프로그래밍과 벨만 최적 방정식을 통해 문제를 푼다.

   처음에는 가치함수에 대한 정보가 없기 때문에 벨만 최적 방정식을 사용하더라도 최적이 아닌 값이 나오겠지만 현재 상태에서 가능한 값중 최고의 값을 반복하게 되면 최적 가치함수와 최적 정책을 구할 수 있게된다.

   정책 이터레이션이 가능한 모든 s에 대해 고려하지만 가치 이터레이션은 제일 높은 값을 통해서만 업데이트한다. 또한 정책이 직접적으로 주어지지 않고 가치함수를 통해 행동을 선택한다.

  > 1. 가치 함수를 최적 정책에 대한 가치 함수라고 가정하고 반복적으로 계산하면, 최적 정책에 대한 참 가치 함수 = 최적 가치 함수를 찾게된다.

  

  #### 다이내믹 프로그래밍의 한계

   다이나믹 프로그래밍은 계산을 빠르게 하는것이지 학습이 아니다. 다음과 같은 세 가지 문제를 가지고 있다.

  - **계산 복잡도**
  
    바둑과 같이 경우의 수가 우주의 원자 수보다 많을 경우 문제를 풀 수 없다.
  
  - **차원의 저주(Curse of Dimentionality)**
  
    상태가 2, 3, 4 차원으로 늘어날 수록 경우의  수도 지수적으로 증가할 것이다.
  
  - **환경에 대한 완벽한 정보(Model) 필요**
  
    환경에 대한 모델(보상, 상태 변환 확률)을 알고 있어야만 문제를 풀 수 있다

  

  #### 모델이 필요없는 강화학습

   모델링(Modeling)이란, 입력과 출력의 관계를 식으로 나타내는 과정을 뜻한다. 모델을 정확히 알기 어려운 경우 다음과 같은 방법을 통해 접근해 볼 수 있다.

  

  1. **우선 모델링을 한 후, 실험을 통해 오차를 조정한다.**
  
  2. **모델 없이 환경과의 상호작용을 통해 입력과 출력 사이의 관계를 학습한다.**

  

   1번은 학습의 개념이 없는 고전적인 방법이고, 학습의 개념이 들어간 2번이 강화학습의 접근방법이다.