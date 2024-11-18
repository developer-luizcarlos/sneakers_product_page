export type MenuState = { isClosed: boolean; };
export type MenuAction = | { type: "OPEN"; } | { type: "CLOSED"; };

export default class MobileMenuClass {
  static menuState: MenuState = { isClosed: true };

  static menuReducer(state: MenuState,action: MenuAction) {
    switch(action.type) {
      case "OPEN":
        return {
          isClosed: false,
        };
      case "CLOSED":
        return {
          isClosed: true,
        };
    }
  }
}