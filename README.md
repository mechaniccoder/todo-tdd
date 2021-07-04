# todo-tdd
TDD로 Todo앱을 만들어보면서 리액트에서 테스트를 작성하는 것에 익숙해지자.

# 기술 스택
- TypeScript
- React
- Redux Toolkit
- Jest
- Testing Library

# 배운점
- 리액트 컴포넌트 내부에 선언된 함수를 테스트할 수는 없습니다. 테스트 파일에서 함수를 mocking해서 props로 넘기거나 다른 모듈에서 불러온 함수를 실행시키지 않는 이상 말이죠. 
이럴 경우에는 인터페이스를 테스트하는 방식으로 작성하거나 함수의 오퍼레이션을 다른 모듈로 빼서 모듈을 mocking하는 방식으로 테스트 코드를 작성해야 합니다.
