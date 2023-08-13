---

layout: default

parent: AI
title: "모방학습 - Imitation Learning"
categories:
  - AI
tags:
  - [ImitationLearning]
---

- ## [인공지능] 모방학습

  [^1]: Berkeley, CS294-112 "Deep Reinforcement Learning" Lecture 2

  #### 모방학습이란

  전문가의 행동을 모방하며 학습하는 알고리즘. 모방학습에는 **행동 복제**(Behavioral Cloning)와 **역강화학습**(IRL, Inverse Reinforcement Learning)이 있다.

  

  #### 행동 복제(Behavioral Cloning)
  
   전문가의 행동 데이터셋 (S<sub>t</sub> , a<sub>t</sub>) 을 통해 지도학습(Supervised Learning)함으로써 정책 π 를 학습하는 것. 정책은 다양한 신경망으로 구성될 수 있다.
  
  
  
   다음 그림에서는 자동차의 앞에 달린 카메라의 영상(*S*)을 입력으로 하고 행동(*a*) 이 전문가의 행동과 얼마나 비슷한지에 대해 학습하는 CNN(컨볼루션 신경망)을 예시로 한다.
  
  ![](https://user-images.githubusercontent.com/18680116/67748554-88cd1900-fa6e-11e9-9e8c-a0adc19caa15.png)
  
  
  
  #### 행동 복제의 한계점
  
   좋은 성능을 내기 위해, 지도 학습을 사용하는 만큼 방대하고 다양한 데이터 셋이 요구되며, 사람이 직접 데이터셋을 만들어야 되므로 데이터셋 제작이 힘들다.
  
  



*이 [강의](http://rail.eecs.berkeley.edu/deeprlcourse-fa18/)[^1] 를 참조해서 작성하였습니다*

---

  
