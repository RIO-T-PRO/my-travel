"use client";

import { TravelProduct, travelProducts } from "@/data/villa";
import React, { createContext, useContext, useEffect, useState } from "react";

type IContext = {
  products: TravelProduct[];
  setProducts: React.Dispatch<React.SetStateAction<TravelProduct[]>>;
};

type Props = {
  children: React.ReactNode;
};

const defaultCartContext: IContext = {
  products: travelProducts,
  setProducts: () => {
    console.warn("CartProvider not found");
  },
};

const AppContext = createContext<IContext>(defaultCartContext);

const AppProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<TravelProduct[]>(travelProducts);

  const value: IContext = {
    products,
    setProducts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

export const useAppContext = () => useContext(AppContext);
