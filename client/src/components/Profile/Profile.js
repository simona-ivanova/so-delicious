import './Profile.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';


export const Profile = () => {

    const { userId, userFirstName, userLastName, userEmail } = useAuthContext();
    // const data = JSON.parse(localStorage.getItem('favourites'));
    // console.log(data);

    return (
        <>

            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="breadcumb-text text-center">
                            <h2>Профил</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-area">
                <div className="container">
                    <div className="row area">
                        <div className="col-12 col-md-6 info">

                            <div className="wrapper">
                                <p><strong>Име:</strong> {userFirstName}</p>
                                <p><strong>Фамилия:</strong> {userLastName}</p>
                                <p><strong>Имейл:</strong> {userEmail}</p>

                                <Link to={`/profile/${userId}/edit`} className="btn delicious-btn mt-20 custom-button" >Редактирай</Link>
                            </div>

                        </div>

                        <div className="col-12 col-md-6 favourites">
                            <div className="wrapper">
                                {/* <Link to={`/profile/${userId}/favouriteList`} className="btn delicious-btn mt-20 custom-button" >Любими</Link> */}
                            </div>
                            <div className="wrapper">
                                <Link to={'/logout'} className="btn delicious-btn mt-20 logout-button" >Изход</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};