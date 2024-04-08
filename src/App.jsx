import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  // "all", "men", "women", "by-age", "by-name"

  function handleFilterChange(filter) {
    setActiveFilter(filter);
  }

  let filteredUsers = users;

  if (activeFilter === "men") {
    filteredUsers = users.filter((user) => user.gender === "male");
  } else if (activeFilter === "women") {
    filteredUsers = users.filter((user) => user.gender === "female");
  } else if (activeFilter === "by-age") {
    filteredUsers = users.slice().sort((a, b) => a.dob.age - b.dob.age);
  } else if (activeFilter === "by-name") {
    filteredUsers = users
      .slice()
      .sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
  }
  // Check the state: if it's "men", populate filteredUsers with male users from the users array

  return (
    <>
      <header>
        <h1>Array function magic</h1>
        <p>{activeFilter}</p>
      </header>
      <main>
        <section className="filter-box">
          <button
            className={activeFilter === "all" ? "highlight" : null}
            onClick={() => {
              handleFilterChange("all");
            }}
            // style={
            //   activeFilter === "all"
            //     ? {
            //         color: "red",
            //         backgroundColor: "black",
            //       }
            //     : undefined
            // }
          >
            All
          </button>
          <button
            onClick={() => {
              handleFilterChange("men");
            }}
            style={
              activeFilter === "men"
                ? {
                    color: "red",
                    backgroundColor: "black",
                  }
                : undefined
            }
          >
            Men
          </button>
          <button
            onClick={() => {
              handleFilterChange("women");
            }}
            style={
              activeFilter === "women"
                ? {
                    color: "red",
                    backgroundColor: "black",
                  }
                : undefined
            }
          >
            Women
          </button>
          <button
            onClick={() => {
              handleFilterChange("by-age");
            }}
            style={
              activeFilter === "by-age"
                ? {
                    color: "red",
                    backgroundColor: "black",
                  }
                : undefined
            }
          >
            By age
          </button>
          <button
            onClick={() => {
              handleFilterChange("by-name");
            }}
            style={
              activeFilter === "by-name"
                ? {
                    color: "red",
                    backgroundColor: "black",
                  }
                : undefined
            }
          >
            By name
          </button>
        </section>
        <section className="card-list">
          {filteredUsers.map((user) => {
            return <Card key={user.email} user={user} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
