import Footer from './Footer';
import Head from './Head';
import NavBar from './NavBar';

type LayoutProps = {
  children?: React.ReactNode;
  title: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <>
    <Head title={title} />
    <NavBar />
    {children}
    <Footer />
  </>
);

export default Layout;
