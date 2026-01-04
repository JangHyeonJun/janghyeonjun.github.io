---
parent: dotnet
title: "Dynamic PGO (Dynamic Profile Guided Optimization, 동적 프로필 기반 최적화)"
categories: [System]
tags: [system, dynamicPgo, pgo, ltcg, optimization]
pin: false
math: false
mermaid: false
---

(.NET 6 기준으로 작성한 포스팅입니다.)
(23-11-09: .NET 7 기준 최신정보 업데이트 하였습니다.)

## 서론

이전 포스팅에서 설명한 PGO는 런타임에 적용할 수는 없는 최적화다. 빌드(컴파일/링크) 시에만 진행할 수 있는 최적화이므로 JIT에서는 사용이 불가능했다.

하지만, .NET Core 3.0부터 계층 컴파일(Tiered Compilation)이 도입되면서 PGO를 사용할 수 있는 기반이 마련되었다.

### Tiered Compilation (계층 컴파일) (.NET6)

.NET은 JIT 컴파일러를 통해 런타임에서 IL코드를 기계어로 변환시켜준다. 실시간 컴파일은 비용이 드는 작업이기 때문에 최적화를 거의 하지않은 체로 변환만 시켜준다. 하지만 자주 호출되는 함수는 비용을 감수해서라도 최적화 하는 것이 좋을것이다. 그래서 만들어진 것이 계층 컴파일이다.

계층 컴파일은 Tier 0, 1을 도입하여 최적화가 덜된 코드로 빠르게 실행시키다가 런타임에 최적화가 필요한 코드를 부분적으로 재컴파일하여 최적화 시키는 기능.

 우선 처음 컴파일 되는 코드는 Tier0에서 시작하고 최적화를 최소로한다. 이후 함수, 코드 호출 횟수를 카운팅해서 특정 횟수(e.g. 30회)가 넘어가면 Tier1로 넘어가도록 별도의 스레드가 할당돼있는 JIT Queue에 넣어준다. JIT Queue에 들어가있는 Tier1로 올라간 코드는 백그라운드에서 컴파일을 진행하고 다음 호출 시에 새로 컴파일된 코드를 호출하도록 한다.

### Dynamic PGO (동적 프로필 기반 최적화)

계층 컴파일 기반이 마련된 상태에서 .NET 6부터 계층 컴파일에 PGO를 추가한 것이 Dynamic PGO 이다. 기존 계층 컴파일의 최적화는 어찌됐든 컴파일러 수준의 최적화만 진행하였고 프로필 기반의 최적화 까지 도입하게된 것. .NET6 기준으로 디폴트 비활성화 되어있으므로 옵션을 따로 켜주어야한다.

### Dynamic PGO & Tiered Compilation 의 .NET 7 업데이트 내용

[원본 링크 (다이어그램이 있으니 꼭 들어가서  보시는걸 추천합니다)](https://github.com/dotnet/runtime/blob/main/docs/design/features/DynamicPgo-InstrumentedTiers.md)

Tier 0에서 코드가 얼마나 호출되는지 측정(Instrument)하는 것은 비용이 많이 들기 때문에. Tier 1로 가기전에 몇가지 중간 단계가 오고간다.

1. 단순히 코드 호출 횟수만 체크하여 30번을 넘어가는 경우(Hot 코드 상태) Instrumented 코드로 승격시킨다.

2. Instrumented 상태에서는 다음과 같이 측정을 위한 코드가 삽입된다.
    - 분기 예측을 위해, 분기 앞부분마다 Counter 코드를 삽입하고.
    - 역가상화를 위해, 가상 함수가 호출하는 개체를 측정하는 `HELP_CLASSPROFILE` 호출 코드를 삽입한다.

3. Instrumented 코드가 30번 더 호출되면. 측정한 Profile 정보를 통해 Tier 1로 최종적으로 승격된다.

업데이트된 내용으로 인해 측정 코드로 인한 오버헤드가 감소하였고 .NET팀에 의하면 실제로 메서드 10~20% 만이 Tier 1에 도달하게 된다고 하니. 결과가 궁금하면 위 원본 링크를 꼭 참조하길 바란다.

### Dynamic PGO 관련 추가 내용

- [ReadyToRun](https://learn.microsoft.com/en-us/dotnet/core/deploying/ready-to-run) (미리 Jit 컴파일을 수행하여 최적화 하는 경우) 옵션을 통해 컴파일된 코드도 최적화는 가능하지만 기본 IL 코드를 최적화 하는 것에 비해 성능이 안좋다고 한다.

- 인라인화된 코드는 프로필 측정을 하지 않는다고 한다. Dynamic PGO 적용을 원하면 해당 함수에 `[MethodImpl(MethodImplOptions.NoInlining)]` 애트리뷰트를 추가하여 인라인을 막을 수 있다.

- 반복문 같은 경우는 다음 코드 호출 시기까지 기다릴 수 없기 때문에 [OSR(On Stack Replacement)](https://devblogs.microsoft.com/dotnet/announcing-dotnet-7-preview-4/#on-stack-replacement-aka-osr)기능을 통해 반복 횟수를 체크하고 런타임에 최적화된 코드로 점프할 수 있도록 해준다고 한다. 이 경우 Tier 1로 승격되는 경우에는 반복문 코드만 변경될 수 있다고 한다.
