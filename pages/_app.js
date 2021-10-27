import Layout from '../components/layouts'
import '../styles/globals.css';

const menus={
  about: ["about-college", "infrastructure", "student-activities"],
  departments: ["CS-It", "Electronics", "Mechanical", "PI", "Mining", "Civil", "petrolium"],
  tpo: ["why MBM", "tpo-team", "placement-procedure"]
  // using static menus 
}

function MyApp({ Component, pageProps }) {
  return <Layout menus={menus}><Component {...pageProps} /></Layout>
}

export default MyApp
