import Footer from './Footer';
import Head from './Head';
import NavBar from './NavBar';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head title="Casey Bradford" />
    <NavBar />
    {children}
    <Footer />
  </>
);

export default Layout;
