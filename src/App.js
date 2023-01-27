import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import Table from "./components/Table";


function App() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const onFetchData = async (page) => {
    const API_URL = `https://api.github.com/repos/facebook/react/issues`;
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      setLoading(false);
      const data = await res.json();
      setLoading(false)
      setInfo((prev) => [...prev, ...data]);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    onFetchData(1);
  }, []);  
  return (
    <div className="w-screen  h-auto flex flex-col justify-center bg-primary">
      <Header />
      <main className="h-full mt-36 md:mt-24 overflow-hidden px-0 pt-0 md:p-3">
        <Table loading={loading} data={info}/>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
