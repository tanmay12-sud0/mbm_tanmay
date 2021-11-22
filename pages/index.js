// import HomeCarousel from "../components/UI/HomeCarousel";
// import Highlights from "../components/UI/Highlights";
// import Layout from "../components/layouts";
import MainBody from "../components/UI/MainBody";
// import Links from "../components/UI/Links";
import BreadcrumbComponent from "../components/UI/CustomBreadcrumb";

function Home() {
  return (
    <>
      <div className="Home-content home-display">
        <div
          className=" d-flex "
          style={{
            color: "white",
            background: "#29425f",
            paddingLeft: "30px",
            paddingRight: "30px",
            alignItems: "center",
          }}
        >
          <div
            className=" d-flex "
            style={{ flex: 1, width: "100%", alignItems: "center" }}
          >
            <BreadcrumbComponent />
            <div>Who We Are</div>
          </div>

          <div className=" d-flex " style={{ justifyContent: "flex-end" }}>
            ..a story of legacy, excellence and diversity
          </div>
        </div>
        <div className="m-md-5 m-2">
          <div className="row d-flex mr-5 ml-5">
            <div className="d-flex  col-12">
              <MainBody />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
