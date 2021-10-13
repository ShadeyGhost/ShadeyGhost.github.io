import Navbar from "./Navbar";
import Socialicons from "./Socialicons";
import PageHeader from "./PageHeader";
import About from "./About";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
  return (
    <>
      <Navbar />
      <Socialicons />
      <PageHeader />
      <About />
    </>
  );
}

export default App;
