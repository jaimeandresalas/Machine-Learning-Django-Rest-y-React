import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import { connect } from 'react-redux';
import Alert from "components/alert";

const FullWidthLayout = ({children}) => {
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

})(FullWidthLayout);