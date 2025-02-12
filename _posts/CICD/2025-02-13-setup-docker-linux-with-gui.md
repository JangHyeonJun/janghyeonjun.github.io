---

parent: CICD
title: "윈도우즈 환경에서 GUI를 지원하는 Linux 도커 컨테이너 띄우기"
categories:
  - CICD
tags:
  - [Docker, Ubuntu, Linux, Windows, WSL, VcXsrv]

---

## 윈도우즈 환경에서 GUI를 지원하는 Linux 도커 컨테이너 띄우기

---
본 포스팅에서 자잘한 설치환경 에러에 대해서 설명하지는 않습니다.

> **사전 조건** > Windows 10 버전 2004 이상 또는 Windows 11 설치치


#### 1. [WSL2 설치](https://learn.microsoft.com/ko-kr/windows/wsl/install)

1. 명령 프롬프트 창을 관리자 권한으로 연다.
2. `wsl --install` 을 통해 WSL 설치, 기본적으로 WSL2가 설치된다.
3. `wsl --version` 을 통해 WSL 2가 설치되었는지 확인한다.

#### 2. 도커 엔진 설치

Docker Desktop을 설치해도 무방함, 그러나 무료인 도커 엔진을 추천한다다.

1. 관리자 권한으로 PowerShell 또는 CMD를 띄우고 WSL을 입력하여 리눅스 실행
2. root 계정으로 접속 또는 sudo 커맨드를 앞에 붙일것것
3. 다음 명령어를 순서대로 실행
    1. `apt update` & `apt upgrade `

    2. `apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common`
    
    3. `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`

    4. `apt update` & `apt upgrade`

    5. `apt install -y ca-certificates curl gnupg lsb-release`
    
    6. `apt install docker-ce docker-ce-cli containerd.io`

    7. `docker -v` 를 통해 설치 확인


#### 3. 리눅스 컨테이너 생성
1. `docker pull ubuntu` 우분투 최신 이미지 다운로드드

2. CMD 또는 도커에서 Terminal 실행 후 다음 명령어로 컨테이너 생성 및 실행. `docker run -it --name 원하는컨테이너이름 -e DISPLAY=host.docker.internal:0 ubuntu bash`

#### 4. [VcXsrv Windows X Server 설치](https://sourceforge.net/projects/vcxsrv/)
1. 디폴트 옵션으로 설치.
2. 설치후 XLaunch 프로그램 실행
3. Multiple windows 선택, Display number 0으로 설정
4. Start no client 선택
5. Disable access control 선택
6. 마침. (언급 없는 것들은 건드리지 말고 다음)
7. `Windows 방화벽 설정 - 고급 - 인바운드`에서 VcXsrv 관련 Rule 찾아서 환경에 맞는 방화벽 미리 해제.

#### 5. 실행 및 확인

1. 리눅스 컨테이너에서 apt를 통해 X11 어플 설치. `apt update && apt install -y x11-apps`
2. 윈도우에서 cmd 실행, `ipconfig` 로 ip확인(ipv4)
3. 리눅스 컨테이너에서 `export DISPLAY=<본인 ip>:0` 입력   
4. `xclock` 명령어를 쳐서 아래와 같은 시계 화면이 뜨면 성공 
    ![](/assets/img/xclock_capture.png)
---

  

