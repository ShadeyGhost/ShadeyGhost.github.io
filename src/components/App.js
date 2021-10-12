import Navbar from "./Navbar";
import PageHeader from "./PageHeader";
import Socialicons from "./Socialicons";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
  return (
    <>
      <Navbar />
      <Socialicons />
      <PageHeader />
    </>
  );
}

export default App;
