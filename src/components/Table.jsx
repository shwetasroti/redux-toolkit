import React from "react";

function Table({ data, remove, type }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">{type === "user" ? "Name" : "Title"}</th>
          <th scope="col">{type === "user" ? "Username" : "Content"}</th>
          <th scope="col">Option</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.fname || row.title}</td>
                <td>{row.lname || row.body}</td>
                <td>
                  <button
                    className="btn btn-light"
                    onClick={(e) => {
                      remove(row.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Table;
