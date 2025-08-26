import { Switch, Route } from "wouter";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router />
    </div>
  );

}

export default App;
