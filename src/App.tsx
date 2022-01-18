import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./config/queryClient";
import HelloWorld from "./components/helloWorld";
import Parent from "./components/Parent";
import { StoreProvider } from "./store/store";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HelloWorld />} />
          <Route path="parent" element={<Parent />}>
            <Route path="child-1" element={<div>Child 1</div>} />
            <Route path="child-2" element={<div>Child 2</div>} />
          </Route>
        </Routes>
      </Router>
    </StoreProvider>
  </QueryClientProvider>
);

export default App;
