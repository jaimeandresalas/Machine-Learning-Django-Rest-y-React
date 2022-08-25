import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import { connect } from 'react-redux';
import { useEffect } from "react";
import Alert from "components/alert";
import { loadWeb3 } from "redux/actions/web3";

const FullWidthLayout = ({ children, loadWeb3 }) => {
  
  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem('account')) {
        loadWeb3()
      }
    }
    fetchData();
  }, []);
 
 
  return (
    <div>
      <Navbar />
      <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7x1 mx-auto">
          {children}
        </div>
      </div>
      <Footer/>
      <Alert/>
    </div>
  )
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
  loadWeb3,
})(FullWidthLayout);