import { Homepage } from '../pages/Homepage';
import { Header } from '../components/MainHeader';
import { Footer } from '../components/Footer';
import FixedNavbar from '../components/FixedNavbar';
import { MyDrawer } from '../components/myDrawer';
import { useDrawerToggler } from '../context/DrawerTogglerContext';

export const RootLayout = () => {
  const { isRightAnchor, showDrawer, drawerToggleHandler } = useDrawerToggler();
  const pages = [
    { title: 'Home', href: '#' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Portfolio', href: '#portfolio' },
    { title: 'Blog', href: '#' },
    { title: 'Contact', href: '#contact-us' },
  ];
  return (
    <>
      <FixedNavbar />
      <MyDrawer
        items={pages}
        setShowDrawer={() => drawerToggleHandler(isRightAnchor)}
        showDrawer={showDrawer}
        rightAnchor={isRightAnchor}
      />
      <Header />
      <Homepage />
      <Footer />
    </>
  );
};
