import { TypedUseSelectorHook, useDispatch } from "react-redux"
import type { Dispatch, State } from '../store'
import { useSelector } from "react-redux";

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<State> = useSelector