import React from "react";

const Paginator = React.memo(({ totalPic, picPerPage, paginatePage }) => {
  const pages = Array.from(
    { length: Math.ceil(totalPic / picPerPage) },
    (_, i) => (
      <li onClick={() => paginatePage(i + 1)} key={i}>
        {i + 1}
      </li>
    )
  );
  return <ul>{pages}</ul>;
});

export default Paginator;
