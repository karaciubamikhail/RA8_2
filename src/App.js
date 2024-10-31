import logo from './logo.svg';
import useJsonFetch from './hooks/useJsonFetch';

function CallCustomHook({ url, opts }) {
  const [data, isLoading, hasError] = useJsonFetch(url, opts);
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h1>{isLoading && 'Is Loading'}</h1>
      <h1>{hasError && 'Has Error'}</h1>
    </div>
  );
}
function App() {
  return (
    <div>
      <CallCustomHook url={'http://localhost:7070/data'}/>
      <CallCustomHook url={'http://localhost:7070/error'}/>
      <CallCustomHook url={'http://localhost:7070/loading '}/>
    </div>
  );
}

export default App;
