import React from "react";
function home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div>
              <img
                style={{ border: "3px solid rgba(55,63,80,1)" }}
                src="https://th.bing.com/th/id/OIP.wUk9lMqzmr9pthy8K3NHGwHaE2?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
          </div>
          <div className="col-7">
            <h1>
              <span
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                MBM
              </span>{" "}
              <span
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                UNIVERSITY
              </span>
            </h1>
            <p style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              sit sed, architecto consequuntur eveniet laudantium eum rerum,
              aliquid soluta doloremque ipsa beatae provident quis distinctio
              hic cumque illum dolores asperiores officiis fugit culpa fuga!
              praesentium quo iusto sapiente, repudiandae nisi. Veritatis
              accusamus placeat atque cum. Ipsum commodi, earum ipsa iste
              dolores ad, maxime nulla soluta neque dolore hic quos molestiae
              vero eligendi similique ducimus. Delectus necessitatibus eius sint
              at, nobis beatae accusamus ab autem natus consectetur unde nihil
              expedita deserunt sunt sit velit quasi quidem, a quibusdam non
              alias officiis voluptatibus provident! Porro, exercitationem
              maiores.
            </p>
            <div className="col-12">
              <div className="row d-flex">
                <div className="col-4">
                  <li style={{ listStyleType: "none", color: "#29425f" }}>
                    &gt; History of MBM
                  </li>
                </div>
                <div className="col-4">
                  <li style={{ listStyleType: "none", color: "#29425f" }}>
                    &gt; Campus & Infra
                  </li>
                </div>
                <div className="col-4">
                  <li style={{ listStyleType: "none", color: "#29425f" }}>
                    &gt; Photo Gallary
                  </li>
                </div>
                <div className="col-4">
                  <li style={{ listStyleType: "none", color: "#29425f" }}>
                    &gt; Vision & Mission
                  </li>
                </div>
                <div className="col-4">
                  <li style={{ listStyleType: "none", color: "#29425f" }}>
                    &gt; Program Offered
                  </li>
                </div>
                <div className="col-4">
                  <li style={{ listStyleType: "none", color: "#29425f" }}>
                    &gt; Frequent Question
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
