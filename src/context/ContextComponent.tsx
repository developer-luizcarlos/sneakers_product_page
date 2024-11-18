/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ReactNode,createContext,useReducer } from "react";
import ModalClass,{ ModalState,ModalAction } from "./classes/ModalClass/ModalClass";
import MobileMenuClass,{ MenuState,MenuAction } from "./classes/MobileMenuClass/MobileMenuClass";

interface Props {
  children: ReactNode;
}

interface ContextType {
  modalState: ModalState;
  modalReducer: React.Dispatch<ModalAction>;
  menuState: MenuState;
  menuReducer: React.Dispatch<MenuAction>;
}

export const GlobalContext = createContext<ContextType | null>(null);

export default function ContextComponent({ children }: Props) {
  const [modalState,modalReducer] = useReducer(ModalClass.modalReducer,ModalClass.modalState);
  const [menuState,menuReducer] = useReducer(MobileMenuClass.menuReducer,MobileMenuClass.menuState);

  return (
    <GlobalContext.Provider value={{ modalState,modalReducer,menuState,menuReducer }}>
      {children}
    </GlobalContext.Provider>
  );
}