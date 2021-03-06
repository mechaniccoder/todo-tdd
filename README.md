# todo-tdd

TDD로 Todo앱을 만들어보면서 리액트에서 테스트를 작성하는 것에 익숙해지자.

# 기술 스택

- TypeScript
- React
- Redux Toolkit
- Jest
- Testing Library

# 배운점

### 리액트 컴포넌트 내부 함수 테스트

- 리액트 컴포넌트 내부에 선언된 함수를 테스트할 수는 없습니다. 테스트 파일에서 함수를 mocking해서 props로 넘기거나 다른 모듈에서 불러온 함수를 실행시키지 않는 이상 말이죠.
  이럴 경우에는 인터페이스를 테스트하는 방식으로 작성하거나 함수의 오퍼레이션을 다른 모듈로 빼서 모듈을 mocking하는 방식으로 테스트 코드를 작성해야 합니다.

### 스냅샷 파일 관리

- 스냅샷 테스트를 실행시키면 jest는 기본적으로 `__snaphost__` 폴더를 생성하며 그 안에서 스냅샷 파일들을 관리합니다. 하지만 이 방식은 너무 많은 스냅샷 폴더를 생성하기 때문에 폴더 구조가 너무 복잡해집니다. 따라서 테스트 파일과 같은 위치에서 extension만 다르게 하는 방식으로 관리하는 것이 좋다고 생각합니다. 이를 위해서 jest에서 설정을 해줘야합니다. 구체적으로 설정하는 방법은 코드를 확인하거나 <a href="https://jestjs.io/docs/configuration#snapshotresolver-string">링크</a>를 확인하세요.

### 라우터 관련 테스트

- react를 사용하면 대부분은 `react-router-dom`이라는 패키지를 사용합니다. 라우팅과 관련된 컴포넌트를 테스트하려면 라우터 컴포넌트로 감싸야만 합니다. 예를 들어, `Link`라는 컴포넌트를 사용하는 컴포넌트를 테스트 파일에서 렌더링하면 에러가 발생합니다. 라우터 컴포넌트로 감싸져 있지 않았기 때문에 라우팅과 관련된 기능을 활용할 수 없기 때문이죠. 저는 `BrowserRouter` 컴포넌트로 감싸서 테스트했고 `renderWithRouter`라는 함수를 모듈에 선언해서 사용하면 라우팅과 관련된 컴포넌트를 테스트 파일에서 렌더링할때 훨씬 더 깔끔하게 테스트를 작성할 수 있습니다.

### Babel관련 설정

- 테스트파일에서 jsx문법을 사용하려면 `@babel/preset-react`를 설치해야하며 타입스크립트 문법을 사용하기 위해서는 `@babel/preset-typescript`를 설정해야합니다. 참고로, NextJS에선 `next/babel`에서 이를 모두 지원하기 때문에 `.babelrc`파일에 `next/babel`만 설정해주면 모든 문법을 사용할 수 있습니다.

### 테스트파일 절대경로 설정

- 상대경로가 너무 깊어지면 모듈을 import할때 매우 더러워지기 때문에 바벨, tsconfig.json에서 절대경로를 설정한다. 하지만 테스트 파일을 위한 절대경로는 따로 설정해줘야 한다. 당연히 jest.config.js에서 설정을 해야하며 아래와 같이 경로의 alias를 설정해 줄 수 있다.

```js
moduleNameMapper: {
    '^components/(.*)': '<rootDir>/components/$1',
    '^hooks/(.*)': '<rootDir>/hooks/$1',
  },

```

맨 앞을 나타내는 정규표현식인 `^`를 처음에는 안 써줬었는데 계속 path를 못 찾는 에러가 발생했다. `^`를 써주니 $1 그룹도 잘 찾고 에러없이 테스트 파일을 실행시킬 수 있었다.

### createAsyncThunk 테스트 방법

- redux toolkit에서는 비동기를 위해 createAsyncThunk라는 편리한 api를 제공한다. 그러나 이를 테스트하는 방법을 알기위해서 굉장히 애를 먹었다. 드디어 테스트하는 방법을 알아냈고 이를 기록해놓으려 한다. 비동기 테스트를 하기 위해서 난 redux-mock-store 라이브러리를 활용했다. 비동기 작업이 시작되면 크게 두가지 시나리오를 가진다.

첫번째, pending -> fulfilled pending -> rejected이다. 따라서 이 두가지 시나리오에 대해 맞는 액션이 dispatch되었는지를 확인해주면 된다. thunk 작업 중간에 실제 api를 호출하는 경우가 있는데 이 함수를 jest로 mocking해주자.

실제로 어떻게 테스트 코드를 작성하는지 확인하려면 `UserSlice.test.ts`를 참고하면 된다.
