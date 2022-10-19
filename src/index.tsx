import ReactDOM from "react-dom/client";
import App from "./app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Theme } from "./components/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <Theme>
      <App />
    </Theme>
  </QueryClientProvider>
);
