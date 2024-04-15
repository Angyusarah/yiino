import Footer from "./Footer";
import Header from "./Header";

const Container = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col pt-6">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Container;
