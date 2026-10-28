import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Redesign, {Comparison} from "./redesign/Redesign";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Comparison} />
      <Route path="/b" component={Comparison} />
      <Route path="/c" component={Comparison} />
      <Route path="/c/concept-01/:page?" component={Redesign} />
      <Route path="/c/concept-02/:page?" component={Redesign} />
      <Route path="/c/concept-03/:page?" component={Redesign} />
      <Route path="/c/concept-04/:page?" component={Redesign} />
      <Route path="/c/concept-05/:page?" component={Redesign} />
      <Route path="/c/concept-06/:page?" component={Redesign} />
      <Route path="/c/concept-07/:page?" component={Redesign} />
      <Route path="/c/concept-08/:page?" component={Redesign} />
      <Route path="/c/concept-09/:page?" component={Redesign} />
      <Route path="/c/concept-10/:page?" component={Redesign} />
      <Route path="/c/concept-11/:page?" component={Redesign} />
      <Route path="/c/concept-12/:page?" component={Redesign} />
      <Route path="/b/concept-01/:page?" component={Redesign} />
      <Route path="/b/concept-02/:page?" component={Redesign} />
      <Route path="/b/concept-03/:page?" component={Redesign} />
      <Route path="/b/concept-04/:page?" component={Redesign} />
      <Route path="/b/concept-05/:page?" component={Redesign} />
      <Route path="/b/concept-06/:page?" component={Redesign} />
      <Route path="/b/concept-07/:page?" component={Redesign} />
      <Route path="/b/concept-08/:page?" component={Redesign} />
      <Route path="/b/concept-09/:page?" component={Redesign} />
      <Route path="/b/concept-10/:page?" component={Redesign} />
      <Route path="/b/concept-11/:page?" component={Redesign} />
      <Route path="/b/concept-12/:page?" component={Redesign} />
      <Route path="/concept-01/:page?" component={Redesign} />
      <Route path="/concept-02/:page?" component={Redesign} />
      <Route path="/concept-03/:page?" component={Redesign} />
      <Route path="/concept-04/:page?" component={Redesign} />
      <Route path="/concept-05/:page?" component={Redesign} />
      <Route path="/concept-06/:page?" component={Redesign} />
      <Route path="/concept-07/:page?" component={Redesign} />
      <Route path="/concept-08/:page?" component={Redesign} />
      <Route path="/concept-09/:page?" component={Redesign} />
      <Route path="/concept-10/:page?" component={Redesign} />
      <Route path="/concept-11/:page?" component={Redesign} />
      <Route path="/concept-12/:page?" component={Redesign} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
