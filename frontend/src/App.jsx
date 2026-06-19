import AppShell from './components/layout/AppShell.jsx';
import { useRoute } from './hooks/useRoute.js';
import About from './pages/About.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import ListingPage from './pages/ListingPage.jsx';
import Notes from './pages/Notes.jsx';
import NotFound from './pages/NotFound.jsx';
import Roadmaps from './pages/Roadmaps.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Tutorials from './pages/Tutorials.jsx';
import UserDashboard from './pages/UserDashboard.jsx';

const routeConfig = {
  home: <Home />,
  tutorials: <Tutorials />,
  notes: <Notes />,
  login: <Login />,
  signup: <Signup />,
  resources: <ListingPage title="Developer" accent="Resources" subtitle="Explore curated guides, cheatsheets, toolkits and development configs." type="resources" />,
  roadmaps: <Roadmaps />,
  about: <About />,
  contact: <Contact />,
  dashboard: <UserDashboard />,
  admin: <AdminDashboard />,
};

export default function App() {
  const path = useRoute();
  const active = path.replace('/', '') || 'home';
  const page = routeConfig[active] || <NotFound />;

  if (active === 'login' || active === 'signup') {
    return page;
  }

  return <AppShell active={active}>{page}</AppShell>;
}
