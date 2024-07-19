import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Loader = ({ loading }) => {
  return (
    <>
      <ClipLoader
        cssOverride={override}
        color="#4ee3ac"
        loading={loading}
        size={150}
      />
    </>
  );
};

export default Loader;