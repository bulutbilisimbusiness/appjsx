import { configureStore } from '@reduxjs/toolkit';
import reducers from './index'; // Reducer'larınızın birleştirildiği yer

const store = configureStore({
  reducer:reducers
  // middleware ve diğer store ayarlarını buraya ekleyebilirsiniz
});

export default store;
