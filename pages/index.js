import HomeCarousel from "../components/UI/HomeCarousel";
import Highlights from "../components/UI/Highlights";

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
        <Highlights />
      </div>
    </>
  );
}

export default Home;
