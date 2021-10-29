import Layout from '../components/layouts'
import '../styles/globals.css';
import "../styles/home.css";
import "../styles/footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const menus=[
  {type: "About", links: ["About-mbm", "Infrastructure", "Student-activities"]},
  {type: "Departments", links: ["CS-IT", "Electronics", "Mechanical", "PI", "Mining", "Civil", "Petrolium"]},
  {type: "Tpo", links: ["Why MBM", "Tpo-team", "Placement-procedure"]},
  {type: "Tpo1", links: ["Why MBM", "Tpo-team", "Placement-procedure"]},
  {type: "Tpo2", links: ["Why MBM", "Tpo-team", "Placement-procedure"]},
  {type: "Tpo3", links: ["Why MBM", "Tpo-team", "Placement-procedure"]},
  // using static menus 
]

function MyApp({ Component, pageProps }) {
  return <Layout menus={menus}><Component {...pageProps} /></Layout>
}

export default MyApp
