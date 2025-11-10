import { QueryProvider } from "./QueryProvider";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};
