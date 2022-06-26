
import '../styles/index.css'
import { TransactionContext, TransactionProvider } from '../context/TransactionContext'

function MyApp({ Component, pageProps }) {
  return <TransactionProvider>
  <Component {...pageProps} />
</TransactionProvider>
}

export default MyApp