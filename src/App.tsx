import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Jokes from "./components/Jokes";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Jokes />
    </QueryClientProvider>
  );
}

export default App;
