import React from "react";
import "./paginator.scss";

const Paginator = React.memo(({ totalPic, picPerPage, paginatePage }) => {
  const pages = Array.from(
    { length: Math.ceil(totalPic / picPerPage) },
    (_, i) => (
      <li onClick={() => paginatePage(i + 1)} key={i}>
        {i + 1}
      </li>
    )
  );
  return <ul className="paginator">{pages}</ul>;
});

export default Paginator;
