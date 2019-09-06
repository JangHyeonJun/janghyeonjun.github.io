---
layout: single

title: "문자열 자르기"
categories:
  - Language
tags:
  - [C++, sstream, string, split]

---

- ## [C++] string 클래스 함수 (find, substr, erase) 를 통해 자르기

  - 자르고 싶은 문자열에서 구분자(delimiter)를 find함수를 통해 찾고 옮겨 담는 형식으로 구현하였습니다.
- 인터넷 상에 문자열 나누기 코드는 여러 종류가 있으니 취향에 맞게 골라서 사용하시면 됩니다. 제가 짠 코드의 경우, string 라이브러리만 사용하면 된다는 장점이 있습니다.
  
  ```
  #include <iostream>
	#include <string>
  using namespace std;
int main()
  {
  	string s1 = "apple/grape/pear";
  	string s2;
  	char delimiter = '/';
  	while (!s1.empty())
  	{
  		if (s1.find(delimiter) != string::npos)
  		{
  			s2 = s1.substr(0, s1.find(delimiter));
  			s1.erase(s1.begin(), s1.begin() + s2.length() + 1);
  		}
  		else
  		{
  			s2 = s1;
  			s1.clear();
  		}
  		cout << s2 << endl;
  	}
  }
  ```
  
  
  
- ## [C++] String Stream(sstream) 을 통해 자르기

  - C++ 에서 사용하는 모든 입출력은 `ios_base` 를 기반 클래스로 하며 입출력에 사용되는 데이터를 커다란 하나의 스트림(stream)으로 묶어 스트림 버퍼에 저장해 놓은 후, 사용자가 요청할 때마다 ***n***바이트 씩 꺼내서 입력하거나 출력을 하게 된다. 

  - 우리가 자주 사용하는 `std::cin` 과 `std::cout` 또한 `istream` 과 `ostream`이라는 클래스의 객체 중 하나입니다.
  - 이러한 `cin`과 `cout` 에 들어가는 stream 을 우리가 string 으로 직접 만들어서 사용할 수 있는 클래스가 바로 `stringstream` 입니다.
  - 아래와 같은 예시를 통해 간단하게 공백이나 '\n' 으로 나누어진 문자열을 나눌 수 있습니다.
	
  >  스트림에 관한 자세한 정보는 [이 사이트](https://modoocode.com/213) 에서 확인 가능합니다.***

  
  
  ```
  #include <iostream>
  #include <string>
  #include <sstream>
  using namespace std;
  int main()
  {
  	string s1 = "apple grape pear";
  	stringstream ss(s1);
  	string s2;
  	// 만약 ss 에 아무것도 담겨있지 않다면 s2 에는 NULL 이 들어간다.
  	while(ss >> s2)
  	{
  		cout << s2 << endl;
  	}
  }
  ```
  
  
  
  
  
  