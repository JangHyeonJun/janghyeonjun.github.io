---


parent: Math
title: "내적과 외적(Dot Product & Cross Product)"
categories:
  - Math
tags:
  - [DotProduct, CrossProduct, Math, Mathematics]
use_math : true
---

***[20.01.08 updated]***



벡터 $A$와 $B$에 관하여,



#### 내적 (Dot Product, Inner Product, Scalar Product)

$$
{A}\cdot{B} = \sum_{k=1}^n(A_k B_k)
=|A||B|cos\theta
$$

#### 외적  (Cross Product, Outer Product, Vector Product)

$$
A\times B= det\begin{vmatrix}
a & b & c \\
d &  e & f \\
g &  h & i
\end{vmatrix} \\
= a\cdot det\begin{vmatrix}e & f\\h&i \end{vmatrix} - b\cdot det\begin{vmatrix}d & f\\g&i \end{vmatrix} + c\cdot det\begin{vmatrix}d & e\\g&h \end{vmatrix} \\ 
= a(ei-fh) - b(di-fg) + c(dh-eg) 
$$

$$
|A\times B| = |A||B|sin\theta
$$

