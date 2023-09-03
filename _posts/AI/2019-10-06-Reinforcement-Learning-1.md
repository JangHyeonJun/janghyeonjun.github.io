---



parent: AI
title: "강화학습 - Reinforcement Learning(1)"
categories:
  - AI
tags:
  - [ValueFunction, BellmanEquation]
---

- ## [인공지능] 가치 함수 & 벨만 방정식

  < *2019-10-09 내용 개정* >

- 그림 출처 - David Silver 교수님의 RL course 강의 내용](http://www0.cs.ucl.ac.uk/staff/d.silver/web/Teaching.html)

  

  강화학습의 목적은 에이전트의 상태 *s*에서 어떤 행동 *a* 을 해야하는지 결정하는 정책(Policy) 중에 보상 *r* 을 최대화 하는 최적 정책(Optimal Policy)를 찾는 것이다. 다시 말해 action-value function 을 최대화 해주는 optimal policy 를 찾는 것이다.

  

  - **정책**(Policy)

    상태 *s* 에서 행동 *a* 를 하게될 확률.

    ![](https://user-images.githubusercontent.com/18680116/66268377-d42d4680-e877-11e9-8255-f9e8d2a3fd50.png)

  

  - **상태 가치 함수**(State-value function)

    상태 S<sub>t</sub> 에서 받을 수 있는 감가율이 곱해진 모든 보상값의 합 **G<sub>t</sub> = R<sub>t+1</sub> +  R<sub>t+2</sub> + ... **

    의 평균을 낸 것이 상태 가치 함수  v(*s*) 이다. 특정 상태에서 앞으로 받을 보상을 알려준다.

    ![](https://user-images.githubusercontent.com/18680116/66268383-dee7db80-e877-11e9-9eee-e44aa78fa89f.png)

    ![](https://user-images.githubusercontent.com/18680116/66268387-e4452600-e877-11e9-943d-ea3977fb6ef9.png)

    

  - **행동 가치 함수**(Action-value function,  Q-function)

    상태 *s* 에서 행동 *a* 를 하면 받게되는 감가율이 곱해진 모든 보상값의 합의 평균을 낸 것이 행동 가치 함수 q(*s, a*) 이다. 행동 가치 함수를 통해 강화 학습시 모델(reward, state transition probability)을 몰라도 학습을 할 수 있게 해준다. 특정 상태에서 어떤 행동이 좋은지 알려준다.

    ![](https://user-images.githubusercontent.com/18680116/66268389-e9a27080-e877-11e9-943b-4a9c66a327f9.png)

    

  - **벨만 기대 방정식**(Bellman-expectation equation)

    **정책 π 에서** 가치 함수 V<sub>π</sub>(*s*)를 현재 상태 S<sub>t</sub> 의 보상과 다음 상태  S<sub>t+1</sub>의 보상으로 관계를 나타낸 벨만 방정식으로 나타낸 방정식.  산술적으로 가치 함수를 계산할 수 있도록 해주었다.

    ![](https://user-images.githubusercontent.com/18680116/66268465-89f89500-e878-11e9-90f9-07527e8f7050.png)

  - **정책 평가**(Policy Evaluation)

    초기에는 에이전트에게 아무 정보가 없기 때문에 벨만 방정식을 통해 모든 상태에 대해서 한 step씩 계산하면서(처음에는 정책이 없으므로 random 하게) update 하고 무한한 시간이 흘렀을 경우 정책 π 을 따를때 상태에 따른 행동을 결정하는 참 가치 함수(True-value function)을 얻을 수 있다. 이러한 과정을 정책 평가라고 한다.

    

  - **정책 개선**(Policy Improvement)

    정책에 대한 참 값을 얻은 후 더 나은 정책으로 update 하여 optimal한 정책을 찾는 과정. 다음 state 중에서 가장 높은 가치 함수(max value function)를 가진 상태로 가는 탐욕 개선(greedy improvement) 방식 등이 있다.

    

  - **정책 반복**(Poilicy Iteration)

    벨만 기대 방정식을 통해 정책 π 에 대한 참 가치 함수를 찾고, 이 참 가치 함수를 통해 현재 상태에서 높은 가치 함수 값을 가지는 상태로 가도록 개선시킨 새로운 정책 π' 를 만들고 이 새 정책 π' 를 통해 다시 평가-개선 하는 과정을 통해 optimal한 정책을 찾는 것을 정책 반복 이라고한다.

  

  - **벨만 최적 방정식**(Bellman-optimal equation)

    가치 함수중 최대 값을 가지는 상태 *s* 와 행동 *a*를 고르는 최적 가치 함수를 벨만 방정식으로 나타낸 방정식.

    ![](https://user-images.githubusercontent.com/18680116/66268642-5d457d00-e87a-11e9-9451-cd22a0b76e20.png)



