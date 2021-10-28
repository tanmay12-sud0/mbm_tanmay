import HomeCarousel from "../components/UI/HomeCarousel";

function Home() {
  return ( 
    <>   
      <div className="Home-content"> 
        <HomeCarousel images={["https://mbm.ac.in/wp-content/uploads/2021/01/banner2.png", "https://mbm.ac.in/wp-content/uploads/2021/01/banner3.png"]}/>
      </div>
    </>  
  )
}

export default Home;