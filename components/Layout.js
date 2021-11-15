import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
