---
layout: single

title: "Docker Toolbox pre-create check Error"
categories:
  - Issue
tags:
  - [Issue, Error, DockerToolBox, Docker]

 

---



- ## 도커 툴박스 설치 에러 해결법

  Windows(10 home, 8, 7 ver)에서 도커를 사용하기 위해 설치하는

  Docker Toolbox 에서 다음과 같은 에러가 발생시 시도해 볼 수 있는 것들을 정리해 보았습니다.

  ```
  Running pre-create checks...
  Error with pre-create check: "This computer doesn't have VT-X/AMD-v enabled. Enabling it in the BIOS is mandatory"
  Looks like something went wrong in step ´Checking if machine default exists´... Press any key to continue...
  ```

  

  1. BIOS 창에서 가상화 기능 켜기

     - 컴퓨터 실행시 F2, Del 키를 눌러 바이오스 셋업에 들어가 보안 또는 CPU 설정 화면에서 **Virtualization Technology**, 또는 **SVM Mode** - **Enable**

       

  2. 코어 격리 기능 끄기

     - Windows 보안 - 장치보안 - 코어 격리 - 코어 격리 세부 정보에 들어가 **메모리 무결성** - **끔**

       

  3. Hyper-V 비활성화 하기

     - 제어판 - 프로그램 및 기능 - **Hyper-V** 기능 **비활성화**

       

  4. 도커 툴박스 이전 버전 설치하기

     - **18.09.3-ce 버전** 설치

       

  5. Hyper-V 검사 기능을 끄고 가상 머신 설치하기

     - CMD 창에서 `docker-machine create -d virtualbox --virtualbox-memory=2048 --virtualbox-no-vtx-check default` 를 입력하여 `default` 가상 머신 생성

  

  

  

  

  