import React from 'react';

 function Pagenation({page,totalPages,setSearchparams,query}) {


    return(

        <div className="container my-3">
            <div className="card card-body">
                <div className="d-flex justify-content-between align-items center">

                <button
                    onClick={() => setSearchparams({ q: query, page: page > 1 ? page - 1 : 1 })}
                    disabled={page <= 1}// son sayfada geri gidemez disabled olur
                    className="btn btn-primary"
                >
                    PREVIOUS
                </button>



                <span style={{ alignSelf: "center" }}>
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={() => setSearchparams({ q: query, page: page < totalPages ? page + 1 : totalPages })}
                    disabled={page >= totalPages}// son sayfada ileri gidemez disabled olur
                    className="btn btn-primary"
                >
                    NEXT
                </button>


                </div>
            </div>
        </div>
    )


}

export default Pagenation;
