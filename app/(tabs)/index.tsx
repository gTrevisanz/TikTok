import { Routes } from '../../src/routes';
import{ StatusBar} from 'react-native'

export default function App() {
  return ( 
  <>
  <Routes />
  <StatusBar backgroundColor={"transparent"} barStyle={'light-content'} translucent={true}/>
 </>
  )
}
