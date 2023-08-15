---
layout: default
parent: Computer graphics
title: "행렬 변환(Matrix Transform)"
categories:
  - Graphics
tags:
  - [MatrixTransform]
use_math : true
---

## [그래픽스] 행렬 변환

  컴퓨터 그래픽스에서는 물체에게 변환(이동, 회전, 크기)을 하기위해 행렬 구조를 사용한다. 이유는 행렬의 곱셈 특성때문에 일련의 변환을 한 번에 수행할 수 있어 연산량을 줄여줄 수 있다.

 단, 여러가지 변환 행렬을 적용할 때 반드시 **크기 - 회전 - 이동** 의 순서로 곱해주어야 한다. 행렬은 교환법칙이 성립하지 않기 때문에 행렬간 곱하는 순서가 다른 결과를 초래하게 되기 때문이다.



- **이동행렬** : 벡터 $$(x, y, z, 1)$$ 을 $$p_x, p_y, p_z$$ 만큼 이동 시키기 위한 행렬. $$T^-1 = T(-p)$$ 이다.
  $$
  T(p) =
  \begin{vmatrix}
  1&0&0&0\\
  0&1&0&0\\
  0&0&1&0\\
  p_x&p_y&p_z&1
  \end{vmatrix}\\
  $$
  

- **회전행렬** :  벡터 $$(x, y, z, 1)$$의 $$X, Y, Z$$ 축을 회전 시키기 위한 행렬. $$R^T = R^-1$$ 이다.
  $$
  X(\theta) =
  \begin{vmatrix}
  1&0&0&0\\
  0&cos(\theta)&sin(\theta)&0\\
  0&-sin(\theta)&cos(\theta)&0\\
  0&0&0&0\\
  \end{vmatrix}\\
  Y(\theta) =
  \begin{vmatrix}
  cos(\theta)&0&-sin(\theta)&0\\
  0&1&0&0\\
  sin(\theta)&0&cos(\theta)&0\\
  0&0&0&1\\
  \end{vmatrix}\\
  Z(\theta) =
  \begin{vmatrix}
  cos(\theta)&sin(\theta)&0&0\\
  -sin(\theta)&cos(\theta)&0&0\\
  0&0&1&0\\
  0&0&0&1\\
  \end{vmatrix}\\
  $$
  

- **크기변환행렬** : 벡터 $$(x, y, z, 1)$$의 $$X, Y, Z$$ 축 크기를 변환 시키기 위한 행렬. $$S^-1 = S(\frac1q_x, \frac1q_y, \frac1q_z)$$ 이다.
  $$
  S(q) =
  \begin{vmatrix}
  q_x&0&0&0\\
  0&q_y&0&0\\
  0&0&q_z&0\\
  0&0&0&1
  \end{vmatrix}
  $$