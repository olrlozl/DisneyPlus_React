# React로 Disney Plus App 만들기

## 🔷 Create React App

- 리액트 앱을 만들 폴더 생성 → 터미널 실행 → `npx create-react-app ./`
- Create-React-App 을 사용해서 리액트를 설치하면, Babel이나 Webpack 설정이 이미 다 되어있기 때문에 많은 시간이 걸리지 않고 리액트 앱을 시작 가능

## 🔷 Axios

- 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
- 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 Ajax와 더불어 사용
- 모듈 설치: `npm install axios --save`
- 사용 예시: `axios.get('https://api.themoviedb.org/3/trending/all/week')`
- Axios 인스턴스화 하는 이유: 중복된 부분을 계속 입력하지 않아도 되기 때문

## 🔷 Async와 Await

- Promise { <pending> } : 비동기 작업이 처리중임을 나타내며, 결과값이 아직 반환되지 않았음을 의미
- pending 뜻: 현안의, 남아있는, 계류중인, 미결
- Pending 상태가 아닌, 결과값을 받은 이후에 값을 처리하기 위한 방법 2가지

  1. Async Request 와 .then()

     비동기 요청이 완료된 후, then() 메서드를 사용하여 결과 처리

     ```jsx
     productModel.create(req.body).then((response) => {
       console.log("response", response);
       res.status(201).json(response);
     });
     ```

  2. Async와 Await

     비동기 작업을 동기적인 코드처럼 작성

     ```jsx
     exports.createProduct = async (req, res, next) => {
       const response = await productModel.create(req.body);
       console.log("response", response);
       res.status(201).json(response);
     };
     ```

## 🔷 Single Page Application (SPA)

- 리액트는 SPA이기 때문에 하나의 index.html 템플릿 파일을 갖고 있음
- 이 하나의 템플릿에 자바스크립트를 이용해서 다른 컴포넌트를 이 index.html 템플릿에 넣으므로 페이지를 변경해주게 됨
- 이 때 이 **React Router Dom** 라이브러리가 새 컴포넌트로 라우팅/탐색을 하고 렌더링하는데 도움을 주게 됨

## 🔷 React Router Dom

- React Router DOM을 사용하면 웹 앱에서 동적 라우팅 구현 가능
- 라우팅이 실행 중인 앱 외부의 구성에서 처리되는 기존 라우팅 아키텍처와 달리
  React Router DOM은 앱 및 플랫폼의 요구 사항에 따라 컴포넌트 기반 라우팅을 용이하게 함\
- 설치: `npm install react-router-dom --save`

### 🔸 React Router 설정

- 설치가 완료된 후 가장 먼저 할 일은 앱 어디에서나 React Router를 사용할 수 있도록 하는 것
- 이렇게 하려면 src 폴더에서 index.js 파일을 열고 react-router-dom에서 **BrowserRouter**를 가져온 다음 루트 구성 요소(App 구성 요소)를 그 안에 래핑

1. **BrowserRouter로 루트 컴포넌트 감싸주기**

   - **BrowserRouter**
     - HTML5 History API(pushState, replaceState 및 popstate 이벤트)를 사용하여 UI를 URL과 동기화된 상태로 유지해줌
     - **HTML5의 History API를 사용하여 페이지를 새로고침하지 않고도 주소를 변경할 수 있도록 해줌**

2. **여러 컴포넌트 생성 및 라우트 정의하기**

   - **Routes**
     - Routes는 앱에서 생성될 모든 개별 경로에 대한 컨테이너/상위 역할
     - Route로 생성된 자식 컴포넌트 중에서 매칭되는 첫번째 Route를 렌더링
   - **Route**
     - Route 는 단일 경로를 만드는 데 사용됨. 두 가지 속성을 취함.
     - **path**에 원하는 컴포넌트의 URL 경로를 원하는 대로 지정
       경로 이름이 백슬래시(/)인 컴포넌트는 앱이 처음 로드될 때마다 먼저 렌더링되고, 이는 홈 구성 요소가 렌더링되는 첫 번째 구성 요소가 됨을 의미
     - **element**는 경로에 맞게 렌더링되어야 하는 컴포넌트를 지정

3. **<Link /> 를 이용해 경로를 이동하기**

   - Link 구성 요소는 HTML의 앵커 요소 < a /> 태그와 유사. to 속성을 이용해서 이동하게 되는 경로를 지정.
   - 앱 구성 요소에 나열된 경로 이름을 생성했기 때문에, 링크를 클릭하면 경로를 살펴보고 해당 경로 이름으로 구성 요소를 렌더링

## 🔷 **React Router Dom APIs**

### 🔸 중첩 라우팅(Nested Routes)

- React Router의 가장 강력한 기능 중 하나이므로 복잡한 레이아웃 코드를 어지럽힐 필요가 없음
- 대부분의 레이아웃은 URL의 세그먼트에 연결되며 React Router는 이를 완전히 수용함

### 🔸 Outlet

- 자식 경로 요소를 렌더링하려면 부모 경로 요소에서 <Outlet>을 사용해야 함
- 이렇게 하면 하위 경로가 렌더링될 때 중첩된 UI가 표시될 수 있음
- 부모 라우트가 정확히 일치하면 자식 인덱스 라우트를 렌더링하거나 인덱스 라우트가 없으면 아무것도 렌더링하지 않음
- react-router-dom에서 가져와서 사용

### 🔸 useNavigate

- 경로를 바꿔줌
- navigate('/home') ⇒ localhost:3000/home 으로 이동
- navigate에 `replace: true`를 사용하면 navigate에 적힌 주소로 넘어간 후 뒤로 가기를 하더라도 방금의 페이지로 돌아오지 않고 메인 페이지 ("/")로 돌아오게 됨
- `replace: false`가 기본 값이며 뒤로 가기가 가능하게 됩니다.

- 실제 넷플릭스 사이트에 가서 검색어를 입력하면 여러 번 입력하고 뒤로 가기를 누르면 검색어 바로 뒷자리로 이동하는 게 아닌 검색을 시작하기 전 페이지로 뒤로 가게 됨
- 그렇게 구현하기 위해서는 위에 처럼 replace 옵션을 사용해줘야 함
- 이 소스 코드는 history를 쌓을 때 첫 번째 글자일 때만 쌓고 그다음 글자부터는 안 쌓게 함
- 그래서 여러 글자를 쓰고 뒤로 가기를 한번 누르면 처음 글자 쓰기 전 history로 가게 됨

### 🔸 useParams

- useParams Hooks는 <Route path>와 일치하는 현재 URL에서 동적 매개변수의 키/값 쌍 객체를 반환
- `:style` 문법을 path 경로에 사용하였다면 useParams()로 읽을 수 있음
- ex) `:invoiceId`가 무엇인지 알기위해 useParams를 사용

### 🔸 useLocation

- 이 Hooks를 이용해서 현재 URL 정보를 가져올 수 있음
- 이 Hooks 는 현재 위치 객체를 반환
- 이것은 현재 위치가 변경될 때마다 일부 side effect를 수행하려는 경우에 유용

### 🔸 useRoutes

- <Routes>와 기능적으로 동일하지만 <Route> 요소 대신 JavaScript 객체를 사용하여 경로를 정의
- 이러한 객체는 일반 <Route> 요소와 동일한 속성을 갖지만 JSX가 필요하지 않음

## 🔷 **useDebounce Custom Hooks**

### 🔸 Debounce

- debounce function 은 사용자가 미리 결정된 시간 동안 타이핑을 멈출 때까지 keyup 이벤트의 처리를 지연시킴
- 이렇게 하면 UI 코드가 모든 이벤트를 처리할 필요가 없고 서버로 전송되는 API 호출 수도 크게 줄어듦
- 입력된 모든 문자를 처리하면 성능이 저하되고 백엔드에 불필요한 로드가 추가됨

1. hooks 폴더 안 useDebounce.js 파일에 useDebounce Hooks 생성

2. useDebounce 적용

## 🔺 **Styled Component**

- Css-in-JS라고 하는 Javascript 파일 안에서 CSS를 처리 할 수 있게 해주는 대표적인 라이브러리
- https://styled-components.com/docs/basics
- 설치 방법: `npm install --save styled-components`

## 🔺 Positon CSS

| static   | 기본값, 다른 태그와의 관계에 의해 자동으로 배치되며 위치를 임의로 설정해 줄 수 없음 |
| -------- | ----------------------------------------------------------------------------------- |
| relative | 요소 자기 자신을 기준으로 배치 (원래 있던 위치를 기준으로 좌표를 지정)              |
| absolute | 부모(조상) 요소를 기준으로 배치 (절대 좌표와 함께 위치를 지정 가능)                 |

부모 요소에 position: static이 아닌것이 있으면 그것을 기준으로 배치
하지만 position: static이 아닌 것이 없다면 body를 기준으로 배치 |
| fixed | 스크롤과 상관없이 항상 문서 최 좌측 상단을 기준으로 좌표를 고정
(스크롤이 있을 때 스크롤을 내리면 해당 요소도 같이 내려감) |
| sticky | 스크롤 영역 기준으로 배치 |

## 🔺 미디어 쿼리 (@media)

- 화면 해상도, 기기 방향 등의 조건으로 HTML에 적용하는 스타일을 전환할 수 있는 CSS3의 속성
- 반응형 웹 디자인에서는 미디어 쿼리를 사용해 적용하는 스타일을 기기마다(화면 크기마다) 전환 가능
- `@media (min-width: 1000px) { }` 1000px보다 클 때
- `@media (min-width: 751px) and (max-width: 999px) { }` 751px보다 크고 999px보다 작을 때
- `@media (max-width: 750px) { }` 750px보다 작을 때

## 🔺 Iframe

- 유튜브 비디오를 가져오기 위해서 사용
- HTML Inline Frame 요소이며, inline frame의 약자

## 🔺 **Grid CSS**

- Flexible Box는 단순한 1차원 레이아웃을 제공 (행 Row 또는 열 Column 하나씩)
- 이에 비해 CSS Grid는 2차원(행과 열)의 레이아웃 시스템을 제공 (행 Row 과 열 Column 같이)
- CSS Grid는 CSS 모듈
