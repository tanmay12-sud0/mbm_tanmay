import CustomCarousel from "../components/UI/CustomCarousel";
import Highlights from "../components/UI/Highlights";
// import Layout from "../components/layouts";
import MainBody from "../components/UI/MainBody";
import Links from "../components/UI/Links";
import BreadcrumbComponent from "../components/UI/CustomBreadcrumb";

function Home() {
  return (
    <>
      <div className="Home-content home-display">
        <CustomCarousel
          images={[
            "https://mbm.ac.in/wp-content/uploads/2021/01/banner2.png",
            "https://mbm.ac.in/wp-content/uploads/2021/01/banner3.png",
          ]}
        />
        <div className="container mt-5">
          <div container className="col-12">
            <BreadcrumbComponent />
            <div className="row d-flex">
              <div className="d-flex col-md-8 col-12">
                <MainBody />
              </div>
              <div
                className="d-flex col-md-4 col-12 flex-column"
              >
                <div className="d-flex ">
                  <Highlights />
                </div>
                <div className="d-flex">
                  <Links />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
