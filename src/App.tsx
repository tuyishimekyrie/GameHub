import Layout from "./components/Layout";

const App = () => {
  console.log(import.meta.env.VITE_APP_API_KEY); // Use import.meta.env instead of process.env
  return (
    <div className="bg-slate-900 text-slate-100">
      <Layout />
    </div>
  );
};

export default App;
