import { datasets } from './components/TextData';
import { Timeline } from './components/ui/timeline';

function App() {
  return (
    <div className='bg-black'>
      <h1 className='text-black'>DINKAR</h1>
      <Timeline data={datasets} />
    </div>
  );
}

export default App;
