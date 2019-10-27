---
layout: single

title: "용어 정리"
categories:
  - Graphics
tags:
  - [RenderingPipeline]

---

- ## [그래픽스] 용어 정리

  - 버텍스(Vertex) : 정점, 좌표(x, y, z), 법선(nx, ny, nz), 텍스처 좌표(u, v), 색상(color) 정보 등을 담을 수 있다. 버텍스가 모여 폴리곤(Polygon)이 되고, 폴리곤이 모여 메쉬(Mesh)가 된다. 메쉬를 그릴 때, 중복 되는 정점이 많으므로 정점의 인덱스 버퍼를 가지고 중복 사용하여 메쉬를 그린다.

  - 절두체(Frustum) : 카메라가 볼 수 있는 공간의 부피
  - 렌더링 파이프라인(Rendering Pipeline) : 3D 월드를 구성하고 가상 카메라를 통해 모니터에 그려내는 과정
    - 로컬 스페이스 : 물체으 마다 자체의 로컬 좌표를 가지고 모델링 한다.
  - 월드 스페이스 : 로컬 스페이스를 통해 구성된 모델에 **월드 변환**을 거쳐 월드 스페이스로 옮겨, 각 모델 간의 관계(위치, 크기 등)를 표현한다.
    - 뷰 스페이스 : 카메라가 Z+ 축을 보도록 회전 시키고 이에 따라 다른 모든 물체를 회전한다.
  - 후면 추려내기 : 카메라가 폴리곤의 전면만을 렌더링하여 물체의 내부에서는 아무것도 보이지 않는다. 렌더링을 위한 비용을 감소시켜준다. 전면인지 아닌지는 버텍스의 방향 순서(CW, CCW)로 확인한다.
    - 조명 : 물체에 명암을 추가한다. 월드 스페이스에서 정의되고 뷰 스페이스로 변환된다.
    - 클리핑 : 절두체를 넘어가는 물체를 분리하고 추려낸다.
    - 투영 : 원근법을 사용하는 원근 투영(Perspective Projection)을 통해 3D 월드를 2D 이미지로 표햔한다. 카메라로 부터 가까운 평면의 거리(*n*), 먼 평면의 거리(*z*), 시야각(*fov*), 높이와 넓이에 대한 비율인 종횡비(*Aspect*) 를 설정해야한다.
    - 뷰포트 변환 : 윈도우에 뷰포트라 불리우는 직사각형에 화면을 렌더링한다. 윈도우에 대해 상대적인 좌표와 크기를 가지게 해준다. 여러개의 뷰 포트를 가질 수도 있다. ex) 레이싱 게임의 후방카메라
    - 래스터라이즈 : 선으로 이루어진 폴리곤을 픽셀로 표현해준다.

---

  