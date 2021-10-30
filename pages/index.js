import HomeCarousel from "../components/UI/HomeCarousel";
import Highlights from "../components/UI/Highlights";
// import Layout from "../components/layouts";
import MainBody from "../components/UI/MainBody";
import Links from "../components/UI/Links";
import BreadcrumbComponent from "../components/UI/BreadcrumbComponent";

function Home() {
  return (
    <>
      <div className="Home-content home-display">
        <HomeCarousel
          images={[
            "https://mbm.ac.in/wp-content/uploads/2021/01/banner2.png",
            "https://mbm.ac.in/wp-content/uploads/2021/01/banner3.png",
          ]}
        />
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
                <div className="d-flex mt-5">
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
