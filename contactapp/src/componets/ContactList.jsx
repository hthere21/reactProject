import React, { useEffect } from "react";
import Contact from "./Contact";

const ContactList = ({ data, currentPage, getAllContacts }) => {
  // useEffect to handle component mount and updates
  useEffect(() => {
    // Here you can perform any side effects you need,
    // such as fetching data or updating the component state
    // based on props changes.
    // For example:
    console.log("Component mounted or updated");

    // If you need to fetch data when the component mounts,
    // you can call the getAllContacts function here.
    // For example:
    // getAllContacts(currentPage);
  }, [currentPage]);

  
  return (
    <main className="main">
      {data?.content?.length === 0 && (
        <div>No Contacts. Please add more contacts</div>
      )}

      <ul className="contact__list">
        {data?.content?.length > 0 &&
          data.content.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
      </ul>

      {data?.content?.length > 0 && data?.totalPages > 1 && (
        <div className="pagination">
          <a
            onClick={() => getAllContacts(currentPage - 1)}
            className={0 === currentPage ? "disabled" : ""}
          >
            &laquo;
          </a>
          {data &&
            [...Array(data.totalPages).keys()].map((page, index) => (
              <a
                onClick={() => getAllContacts(page)}
                className={currentPage === page ? "active" : ""}
                key={page}
              >
                {page + 1}
              </a>
            ))}
          <a
            onClick={() => getAllContacts(currentPage + 1)}
            className={data.totalPages === currentPage + 1 ? "disabled" : ""}
          >
            &raquo;
          </a>
        </div>
      )}
    </main>
  );
};

export default ContactList;
