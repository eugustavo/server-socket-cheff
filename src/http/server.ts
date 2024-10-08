import { serverHttp } from './app'
import './websocket'

serverHttp.listen(3333, () => console.log('Server is running on port 3333'))
