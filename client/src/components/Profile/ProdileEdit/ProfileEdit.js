import { useEffect } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useForm } from "../../../hooks/useForm";
import { useService } from "../../../hooks/useService";
import { authServiceFactory } from "../../../services/authService";

export const ProfileEdit = ({
    onProfileEditSubmit
}) => {


    const { values, changeHandler, onSubmit, changeValues } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
    }, onProfileEditSubmit);

 

    return (

        <form
            // method="post" 
            onSubmit={onSubmit}>
            <div className="row">
                <div className="col-12 col-lg-4">
                    <input
                        value={values.firstName}
                        onChange={changeHandler}
                        name="firstName"
                        type="text"
                        minLength="2"
                        className="form-control"
                        placeholder="Име"
                        required
                    />
                </div>
                <div className="col-12 col-lg-4">
                    <input
                        value={values.lastName}
                        onChange={changeHandler}
                        name="lastName"
                        type="text"
                        minLength="2"
                        className="form-control"
                        placeholder="Фамилия"
                        required
                    />
                </div>
                <div className="col-12 col-lg-4">
                    <input
                        value={values.email}
                        onChange={changeHandler}
                        name="email"
                        type="email"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Имейл"
                        required
                    />
                </div>
                <div className="col-12 col-lg-4">
                    <input
                        value={values.password}
                        onChange={changeHandler}
                        name="password"
                        type="password"
                        min="6"
                        className="form-control"
                        placeholder="Парола"
                        required
                    />
                </div>
                <div className="col-12 col-lg-4">
                    <input
                        value={values.repeatPassword}
                        onChange={changeHandler}
                        name="repeatPassword"
                        type="password"
                        className="form-control"
                        placeholder="Повтори парола"
                        required
                    />
                </div>

                <div className="col-12 text-center">
                    <input className="btn delicious-btn mt-30" type="submit" value="Регистрация" />
                </div>
            </div>
        </form>


        // <div className="contact-form-area">

        //     <form action="#" method="post">
        //         <div className="row">
        //             <div className="col-12 col-lg-12">
        //                 <input type="text" className="form-control" id="name" placeholder="Име" />
        //             </div>
        //             <div className="col-12 col-lg-12">
        //                 <input type="email" className="form-control" id="email" placeholder="Имейл" />
        //             </div>

        //             <div className="col-12 text-center">
        //                 <button className="btn delicious-btn mt-30" type="submit">Изпрати</button>
        //             </div>
        //         </div>
        //     </form>

        // </div>
    )
}