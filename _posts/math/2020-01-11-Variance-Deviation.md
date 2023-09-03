---


parent: Math
title: "분산과 표준편차(Variance & Standard Deviation)"
categories:
  - Math
tags:
  - [Variance, StandardDeviation]
use_math : true
---

***[20.01.11 updated]***



#### 다음과 같은 수열이 있을 때,

---

$$
[-10, 0, 10, 20, 30]
$$

---

### 평균

$$
average = \frac{-10 + 0 + 10 + 20 + 30}5 = \frac{50}5 = 10
$$



### 편차

평균과 각 숫자(변량)의 차이를 나타낸 값. 편차의 합은 항상 **0** 이다.
$$
deviation = number - average \\
e.g) deviation[-10] = -10 - 10 = -20
$$



### 분산

수의 분포가 얼마나 퍼져있는지 나타낸 값. 숫자가 적을수록 모여있음을 나타낸다.
$$
variance = \frac{\sum deviation^2}{n} \\
= \frac{(-10 -10)^2 +(0-10)^2+(10-10)^2+(20-10)^2+(30-10)^2}5\\
= \frac{400+100+0+100+400}5\\
= 200
$$

### 표준편차

분산에 제곱근을 한것. 숫자가 평균에 비해 얼마나 떨어져있는지 알 수 있다.
$$
StandardDeviation(\sigma)=\sqrt {variance} = \sqrt {200} = 10\sqrt 2
$$
