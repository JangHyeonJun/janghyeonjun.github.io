---
title: "Dynamic PGO (Dynamic Profile Guided Optimization, 동적 프로필 기반 최적화)"
author: me
categories: [System]
tags: [system, dynamic-pgo, pgo, ltcg, compiler, optimization]
pin: true
math: true
mermaid: true
---

(.NET 6 기준으로 작성한 포스팅입니다.)

## 서론

이전 포스팅에서 설명한 PGO는 런타임에 적용할 수는 없는 최적화다. 링크 타임에만 진행할 수 있는 최적화이므로 JIT를 사용하는 Managed Code에서는 사용이 불가능하다.

하지만, .NET Core 3.0부터 계층 컴파일(Tiered Compilation)이 도입되면서 PGO를 사용할 수 있는 기반이 마련되었다.

### Tiered Compilation (계층 컴파일)

.NET은 JIT 컴파일러를 통해 런타임에서 IL코드를 기계어로 변환시켜준다. 실시간 컴파일은 비용이 드는 작업이기 때문에 최적화를 거의 하지않은 체로 변환만 시켜준다. 하지만 자주 호출되는 함수는 비용을 감수해서라도 최적화 하는 것이 좋을것이다. 그래서 만들어진 것이 계층 컴파일이다.

계층 컴파일은 Tier 0, 1을 도입하여 우선 처음 컴파일 되는 코드는 Tier0에서 시작하고 최적화를 최소로한다. 이후 함수, 코드 호출 횟수를 카운팅해서 특정 횟수(e.g. 30회)가 넘어가면 Tier1로 넘어가도록 별도의 스레드가 할당돼있는 JIT Queue에 넣어준다.

JIT Queue에 들어가있는 Tier1로 올라간 코드는 백그라운드에서 컴파일을 진행하고 다음 호출 시에 새로 컴파일된 코드를 호출하도록 한다.

### Dynamic PGO (동적 프로필 기반 최적화)

계층 컴파일 기반이 마련된 상태에서 .NET 6부터 계층 컴파일에 PGO를 추가한 것이 Dynamic PGO 이다. 기존 계층 컴파일의 최적화는 어찌됐든 컴파일러 수준의 최적화만 진행하였고 프로필 기반의 최적화 까지 도입하게된 것. .NET6 기준으로 디폴트 비활성화 되어있으므로 옵션을 따로 켜주어야한다.

+) 반복문 같은 경우는 다음 코드 호출 시기까지 기다릴 수 없기 때문에 [OSR(On Stack Replacement)](https://devblogs.microsoft.com/dotnet/announcing-dotnet-7-preview-4/#on-stack-replacement-aka-osr)기능을 통해 반복 횟수를 체크하고 런타임에 최적화된 코드로 점프할 수 있도록 해준다고 한다.
