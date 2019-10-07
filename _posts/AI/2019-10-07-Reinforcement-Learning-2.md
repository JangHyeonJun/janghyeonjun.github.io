---

layout: single

title: "강화학습 - Reinforcement Learning(2)"
categories:
  - AI
tags:
  - [ModelFreeControl, Q-Learning]
---

- ## [인공지능] Model Free & Q-Learning

  정리한 내용의 많은 부분은 [모두의 코드 OpenRL](http://www.modulabs.co.kr/RL) 을 참고하였습니다.

  - **Dynamic Programming**

    강화학습의 토대가 되는 동적 프로그래밍(Dynamic Programming)은 **학습이 아니라** 전체 큰 문제를 작은 문제로 나누어 풀 수 있도록 계획하여 연산을 빠르게 하는 것. 정책 반복(Policy Iteration)과 가치 반복(Value Iteration)에서 사용된다.

  

  - **Model Free Control**

    반복 과정(Iteration)을 위해 동적 프로그래밍이 사용되며 이를 위해, 환경의 모델(reward, state transition probability)을 사용해 가치 함수의 기대값을 얻어낸다. 그러나 강화 학습은 모델이 필요하지 않은 model free control 알고리즘이다. 우선 다음 행동을 시도해보고 그 결과를 바탕으로하는 샘플링(Sampling)의 평균 통해 가치 함수를 추정하며 학습을 진행한다. 

    (*여기서 control 이란, 모델을 개선시키는 경우를 포함한다. 정책 평가만 이루어지면 prediction, 정책 탐욕 개선까지 이루어지면 control* )

    

    sampling 을 통해 가치,정책을 개선하는 과정은 Monte-Carlo Control 과 Temporal Difference Control 두 가지가 있다.

  

  - **Monte-Carlo Control**

    몬테카를로(MC) 제어는 다음과 같은 특성이 있다.

    - 정책 평가를 끝까지(참 가치 함수를 찾을 때 까지) 하지 않고 한 번의 episode로 얻은 정보를 토대로 한다.

    - 상태 가치 함수는 모델이 필요하기 때문에 평가 대상을 행동 가치 함수로 한다.
    - 정책 개선시 단순히 Greedy한 정책 개선을 하지 않고 epsilon 이라는 확률을 두어 항상 가장 높은 가치 함수를 따라가지 않고 random한 정책으로 개선할 수 있도록 한다. 이를 **ε-Greedy policy improvement** 이라고 한다.

    단, MC는 episode 의 끝이 있어야해 online으로 학습하지 못한다.

    ![](https://user-images.githubusercontent.com/18680116/66308378-fab7b400-e941-11e9-8a40-1da3ac3b0a3a.png)

    

  - **Temporal-Difference Control = SALSA**

    시간차 제어는 현재의 **S**tate와 **A**ction 그로인한 **R**eward, 그리고 다음 **S**tate와 **A**ction 까지만 보고서 가치함수를 업데이트 하기 때문에 **SALSA** 라고 불리운다.

    

    ![](https://user-images.githubusercontent.com/18680116/66308401-0b682a00-e942-11e9-9561-7bf629fc7a9f.png)

    위 수식은 Q Function 을 update 하는 대표적인 수식이다. **α** 는 어떠한 비율로 update 할 것인지에 대한 parameter, **γ** 는 할인율을 뜻한다. 

      SALSA는 MT가 한 에피소드가 끝날때 까지 기다린 후 업데이트하는 것과 달리 실시간으로 다음 상태의 큐 함수 Q(S<sub>t+1</sub>) 가 S<sub>t+1</sub> 의 큐 함수라고 가정하고(에피소드를 기다리지 않고 즉각 업데이트) Q(S<sub>t+1</sub>) 와 Q(S<sub>t</sub>) 의 차이 + 보상 R<sub>t+1</sub> 을 통해 함수를 업데이트한다.

    *<가치 함수에도 똑같이 적용할 수 있으나 환경의 모델을 알고 있어야 한다.>*

    

  - **Q-Learning**

    ![](https://user-images.githubusercontent.com/18680116/66311256-0064c800-e949-11e9-9b6e-c1dfd53c2118.png)

    Q Leaning 은 두 가지 policy를 사용하는 off-policy learning 이다. learning에서는 greedy 하게 improve 하고 행동할 때는 ε-Greedy 하게 한다.

    이를 알고리즘으로 나타내면 다음과 같다.

    *<참고 : ∀ 는 '모든 ~에 대해'  ∃ 는 '어떤 ~가 존재하여' 라는 의미>*

    ![](https://user-images.githubusercontent.com/18680116/66311264-05297c00-e949-11e9-8e92-923e11d3d960.png)

  

- 

- 

- 

- 

- ## [인공지능] 가치 함수 & 벨만 방정식

  ㅇ



- ## ToDo

  - ml-agents 다른 프로젝트
  - [모델 프리, Q 러닝 복습](http://www.modulabs.co.kr/RL_library/2621)
  - 강화학습 알고리즘 종류와 특징 알아내기, 내 논문에서 쓴 알고리즘 이해하기
  - '파이썬과 케라스로 배우는 강화학습' 읽기


