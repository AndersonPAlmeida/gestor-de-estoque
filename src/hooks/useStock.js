import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";

export function useStock() {
  return useContext(StockContext)
}