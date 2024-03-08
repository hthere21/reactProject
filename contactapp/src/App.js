import "./App.css";
import Header from "./componets/Header";
import { useEffect, useState } from "react";
import { getContacts } from "./api/COntactService";
import { Routes, Route, Navigate } from "react-router-dom";
import ContactList from "./componets/ContactList";

function App() {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState({});

  const getAllContacts = async (page = 0, size = 10) => {
    try {
      setCurrentPage(page);
      const { data } = await getContacts(page, size);
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleModal = (show) => {
    console.log("I was click");
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <>
      <Header toggleModal={toggleModal} nbOfContacts={data.totalElements} />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to={"/contacts"} />} />
            <Route
              path="/contacts"
              element={
                <ContactList
                  data={data}
                  currentPage={currentPage}
                  getAllContacts={getAllContacts}
                />
              }
            />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
