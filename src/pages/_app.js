import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import {Provider as AuthProvider} from "next-auth/client"


const MyApp = ({ Component, pageProps }) => {
  return (
    // here we use Authprovider to use authntication all  over the app
    <AuthProvider session={pageProps.session}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </AuthProvider>
  )
}

export default MyApp
