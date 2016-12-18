import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postComponent, updateComponent } from 'actions/components'
import ComponentDialog from 'components/ComponentDialog'

const mapStateToProps = (state) => {
  return {}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({postComponent, updateComponent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentDialog)
