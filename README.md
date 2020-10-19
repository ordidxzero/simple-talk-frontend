# SIMPLE TALK FRONTEND

# UPDATE NOTE

- 1.0.0
  - 프로토타입 완성
- 1.1.0
  - 프로젝트 폴더 구조 변경
  - login되지 않았을 때 home으로 가면 발생하는 에러 해결
- 1.1.1
  - redux action을 모두 모아서 hook으로 만듦
- 1.1.2
  - 미묘한 로그아웃 버그 해결

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

- [ ] 채팅이 올 때마다 useScrollToBottom은 잘 작동하지만, 처음 마운트 될 땐 작동하지 않음.. 아마 data를 불러 오기 전에 실행되기 때문에 그런 듯
