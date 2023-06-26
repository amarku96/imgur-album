import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import ImageGallery from './component/ImageGallery';
import ImageDetails from './component/ImageDetails';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageGallery />} />
          <Route path="/:id" element={<ImageDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
