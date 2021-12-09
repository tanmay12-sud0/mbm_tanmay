import "../styles/globals.css";
import "../styles/home.css";
import "../styles/footer.css";
import "../styles/header.css";
import "../styles/article-card.css";
import "../styles/header-carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layouts";
import "../styles/about.css";
import "../styles/announcements.css";
import "../styles/article.css";

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
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
