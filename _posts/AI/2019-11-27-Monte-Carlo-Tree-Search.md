---

layout: single

title: "몬테카를로 트리 탐색 - Monte-carlo Tree Search (MCTS)"
categories:
  - AI
tags:
  - [MonteCarloTreeSearch, MCTS]
use_math: true
---

- ## [인공지능] MCTS

  알파고에서도 사용된 탐색 알고리즘으로, 시뮬레이션을 통해 가능성이 높은 선택을 하며 탐색하는 알고리즘.

  

  4가지 과정을 통해 진행된다.

  1. **선택**(Selection) : 현재 주어진 트리에서 **트리 정책**(Tree Policy, 최선의 자식 노드를 선택하는 정책)에 따라 결정되는 최선의 노드를 선택해 나간다. 선택 함수는 MCTS 과정을 진행하면서 얻게된 보상 중 가장 높은 것을 선택하는 **Max Child**, 가장 많이 방문한 것을 선택하는 **Robust Child** 등이 있다.
2. **확장**(Expansion) : 도달한 마지막 리프 노드에서 게임이 끝나지 않았다면 자식 노드를 `1 ~ n` 개 생성한다.
  3. **시뮬레이션**(Simulation) : 확장된 트리에서 **기본 정책**(Default Policy, 시뮬레이션을 통해 결과를 얻기 위한 측정용 정책)을 통해 시뮬레이션을 시행한다. e.g. 
  4. **역전파**(Backpropagation) : 시뮬레이션 결과를 통해 노드의 보상을 업데이트 한다.
  
  
  
  ![](https://user-images.githubusercontent.com/18680116/69682645-6e31a280-10f5-11ea-869f-1085df4a7e80.png)
  
  *이미지 출처*[^1]
  
  
  



---

[^1]: Rocki, Kamil, and Reiji Suda. "Parallel monte carlo tree search scalability discussion." *Australasian Joint Conference on Artificial Intelligence*. Springer, Berlin, Heidelberg, 2011.



---

  
