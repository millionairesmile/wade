import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
