export const Search = () => {
    return (
    
        <div className="search-wrapper">
  
            <div className="close-btn"><i className="fa fa-times" aria-hidden="true"></i></div>
    
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="#" method="post">
                            <input type="search" name="search" placeholder="Type any keywords..." />
                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};