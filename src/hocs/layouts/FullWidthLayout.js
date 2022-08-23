import NavBar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import { connect } from 'react-redux';
import Alert from "components/alert";

const FullWidthLayout = ({children}) => {
  return (
    <div>
      <NavBar/>
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