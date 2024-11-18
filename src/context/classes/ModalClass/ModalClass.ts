export type ModalState = { isVisible: boolean; };
export type ModalAction = | { type: "SHOW"; } | { type: "HIDDEN"; };

export default class ModalClass {
  static modalState: ModalState = { isVisible: false };

  static modalReducer(state: ModalState,action: ModalAction): ModalState {
    switch(action.type) {
      case "SHOW":
        return {
          isVisible: true,
        };
      case "HIDDEN":
        return {
          isVisible: false,
        };
      default:
        return state;
    }
  }
}