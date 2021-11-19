<<<<<<< HEAD
// import HomeCarousel from "../components/UI/HomeCarousel";
=======
import CustomCarousel from "../components/UI/CustomCarousel";
>>>>>>> a16abb0c08e08697c9a4cedccab54c09a2656572
import Highlights from "../components/UI/Highlights";
// import Layout from "../components/layouts";
import MainBody from "../components/UI/MainBody";
import Links from "../components/UI/Links";
import BreadcrumbComponent from "../components/UI/CustomBreadcrumb";

function Home() {
  return (
    <>
      <div className="Home-content home-display">
        <div className="m-md-5 m-2">
          <div container className="col-12 mt-5 ">
            <BreadcrumbComponent />
            <div className="row d-flex mr-5 ml-5">
              <div className="d-flex col-md-8 col-12">
                <MainBody />
              </div>
              <div
                className="d-flex col-md-4 col-12  "
                style={{ flexDirection: "column" }}
              >
                <div className="d-flex ">
                  <Highlights />
                </div>
                <div
                  className="col-md-4 col-12 flex-column"
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
      </div>
    </>
  );
}

export default Home;
