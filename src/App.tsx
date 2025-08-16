import { Switch, Route } from "wouter";
import Home from "./pages/home";
import Challenges from "./pages/challenges";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/challenges" component={Challenges} />
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
