# SIMPLE TALK FRONTEND

## TO DO

- [ ] 배치는 슬랙처럼.
  - [ ] 왼쪽에 네비게이션? 메뉴가 있고, 하단에 인풋을 배치할 것
  - [ ] 프로토 타입을 완성하면, 메뉴에서 친구 이름을 드래그&드롭하여 한 화면에 여러 채팅창 열 수 있게 할 것
- [ ] HeaderLogo
  - [ ] max-width가 768px이면 로고 자리에 Menu toggler 넣어도 될 듯
    - [ ] [이거](https://ant.design/components/menu/#components-menu-demo-inline-collapsed)
- [ ] Notifications
  - [ ] Request Friend
  - [ ] Accept Friend
  - [ ] Remove Friend

## BUG

- [ ] 로그인을 하지 않은 상태에서 홈으로 가면 에러
  - [ ] 타입 어썰션으로 auth의 null값을 강제로 AuthResponse로 바꿔서 destructuring을 한 게 문제인 듯
- [ ] Logout이 제대로 안됨
