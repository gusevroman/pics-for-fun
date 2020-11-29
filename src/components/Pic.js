const Pic = ({ id, url, loading, error }) => {
  return (
    <>
      {loading ? (
        <p>Pics loading...</p>
      ) : error ? (
        <p>Error, try again, maybe later</p>
      ) : (
        <p>
          <img key={id} src={url} alt="pic" />
        </p>
      )}
    </>
  );
};

export default Pic;
