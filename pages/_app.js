import "../styles/globals.css";
import "../styles/home.css";
import "../styles/footer.css";
import "../styles/header.css";
import "../styles/article-card.css";
import "../styles/header-carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layouts";
import "../styles/about.css";
import "../styles/HomePage-card.css";
import "../styles/announcements.css";
import "../styles/article.css";
import "../styles/ImageGrid.css";
import "../styles/HeadNavbarDrawer.css";

let data = {
  menus: [
    {
      type: "About",
      links: [
        ["About-mbm", "Infrastructure", "Student-activities"],
        ["About-mbm", "Infrastructure", "Student-activities"],
      ],
    },
    {
      type: "Departments",
      links: [
        [
          "CS-IT",
          "Electronics",
          "Mechanical",
          "PI",
          "Mining",
          "Civil",
          "Petrolium",
        ],
      ],
    },
    {
      type: "Tpo",
      links: [
        ["Why MBM", "Tpo-team", "Placement-procedure"],
        ["Why MBM", "Tpo-team", "Placement-procedure"],
        ["Why MBM", "Tpo-team", "Placement-procedure"],
      ],
    },
    { type: "Tpo1", links: [["Why MBM", "Tpo-team", "Placement-procedure"]] },
    { type: "Tpo2", links: [["Why MBM", "Tpo-team", "Placement-procedure"]] },
    { type: "Tpo3", links: [["Why MBM", "Tpo-team", "Placement-procedure"]] },
  ],
  globalVariables: {
    deanEmail: "deanmbm@jnvu.edu.in",
    collegeTitle: "MBM University",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout globalVariables={data.globalVariables} menus={data.menus}>
      <Head>
        <title>MBM University</title>
        <meta name="description" content="MBM University" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
