/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ReactNode,createContext,useReducer } from "react";
import ModalClass,{ ModalState,ModalAction } from "./classes/ModalClass/ModalClass";

interface Props {
  children: ReactNode;
}

interface ContextType {
  modalState: ModalState;
  modalReducer: React.Dispatch<ModalAction>;
}

export const GlobalContext = createContext<ContextType | null>(null);

export default function ContextComponent({ children }: Props) {
  const [modalState,modalReducer] = useReducer(ModalClass.modalReducer,ModalClass.modalState);

  return (
    <GlobalContext.Provider value={{ modalState,modalReducer }}>
      {children}
    </GlobalContext.Provider>
  );
}