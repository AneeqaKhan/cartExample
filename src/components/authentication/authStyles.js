import { fontFamilies } from '../../themes/font';
import { Dimension } from '../../ui-kit'
export default {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderBottomColor: 'red', // to do colors
    borderColor:'red',
    backgroundColor: '#FFFFFF',
    borderRadius: Dimension(12),
    borderWidth: Dimension(4),
    width: Dimension(688),
    height: Dimension(100),
    marginBottom: Dimension(50),
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    borderBottomColor: 'red',
    fontSize: Dimension(35),
    // fontFamily: fontFamilies.regular, to do in case of custom Fonts 
  },
  submitBtnStyle: {
    alignSelf: 'center'
  },
  inputIcon: {
    marginLeft: Dimension(30),
    justifyContent: 'center',
  },
  buttonContainer: {
    height: Dimension(113),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },
};
