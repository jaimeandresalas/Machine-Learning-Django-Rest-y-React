import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import { connect } from 'react-redux';
import Alert from "components/alert";

const FullWidthLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
      <Alert/>
    </div>
  )
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(FullWidthLayout);