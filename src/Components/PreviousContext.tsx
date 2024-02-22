import { FC, createContext, useContext, useState } from "react";

interface PreviousContextType {
  previous: string;
  setPrevious: (previous: string) => void;
}

const PreviousContext = createContext<PreviousContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const usePrevious = () => {
  const context = useContext(PreviousContext);
  if (!context) {
    throw new Error("usePrevious must be used within a PreviousProvider");
  }
  return context;
};

export const PreviousProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [previous, setPrevious] = useState<string>("");

  return (
    <PreviousContext.Provider value={{ previous, setPrevious }}>
      {children}
    </PreviousContext.Provider>
  );
};
