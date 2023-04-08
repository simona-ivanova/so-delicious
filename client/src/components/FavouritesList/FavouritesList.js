// import { useState } from "react";
// import { FavouritesListItem } from "./FavouritesListItem/FavouritesListItem";

// export const FavouritesList = () => {
//     const data = JSON.parse(localStorage.getItem('favourites'));
//     console.log(data[0]);



//     return (



//         < div className="receipe-post-area section-padding-40" >

//             <section className="best-receipe-area">
//                 <div className="container">

//                     <div className="row">

//                     {data.map(x =>
//                                 <FavouritesListItem key={x._id} {...x} />
//                             )}

//                         {data.length === 0 && (
//                             <div className="no-recipes">
//                                 <p>No recipes yet!</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </section>
//         </div >
//     );
// };