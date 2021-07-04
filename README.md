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

- 스냅샷 테스트를 실행시키면 jest는 기본적으로 `__snaphost__` 폴더를 생성하며 그 안에서 스냅샷 파일들을 관리합니다. 하지만 이 방식은 너무 많은 스냅샷 폴더를 생성하기 때문에 폴더 구조가 너무 복잡해집니다. 따라서 테스트 파일과 같은 위치에서 extension만 다르게 하는 방식으로 관리하는 것이 좋다고 생각합니다. 이를 위해서 jest에서 설정을 해줘야합니다. 구체적으로 설정하는 방법은 코드를 확인하거나 <a href="https://jestjs.io/docs/configuration#snapshotresolver-string">링크</a>를 확인하세요.
