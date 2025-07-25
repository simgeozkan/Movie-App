import React from "react";

function Loading() {
  return (
    <div className="d-flex flex-column align-items-center py-4">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-2">Yükleniyor...</p>
    </div>
  );
}

export default Loading;
