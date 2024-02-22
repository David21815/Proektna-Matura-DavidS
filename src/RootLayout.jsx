import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { useLocation } from 'react-router-dom';

function RootLayout() {
  const location = useLocation();
  const { pathname } = location;

  let renderedComponent = null;

  if (pathname !== "/quiz") {
    renderedComponent = <Footer />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
      {renderedComponent}
    </>
  );
}

export default RootLayout;