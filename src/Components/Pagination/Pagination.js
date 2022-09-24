import * as React from "react";

export default function CustomPagination({ page, setPage }) {
  const paginationData = [1, 2, 3];
  return (
    <div
      style={{
        display: "flex",
        cursor: "pointer",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",

      }}
    >
      <div
        style={{
          border: "1px solid #eee",
          display: "flex",
          cursor: "pointer",
          width: "200px",
          marginTop: "50px",
        }}
      >
        <div
          onClick={() => setPage(page === 1 ? page : page - 1)}
          style={{
            padding: "5px 10px",

            color: `${page === 1 ? "#d8cdcd" : ""}`,
          }}
        >
          Prev
        </div>
        {paginationData.map((item) => {
          return (
            <div
              style={{
                padding: "5px 10px",
                background: `${item === page ? "#418bca" : ""}`,
              }}
              onClick={() => setPage(item)}
            >
              {item}
            </div>
          );
        })}
        <div
          onClick={() =>
            setPage(page === paginationData.length ? page : page + 1)
          }
          style={{
            padding: "5px 10px",
            color: `${page === paginationData.length ? "#d8cdcd" : ""}`,
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
}
