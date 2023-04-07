export const ProfileEdit = () => {
    return (<div className="contact-form-area">
        <div className="col-6">
        <form action="#" method="post">
            <div className="row">
                <div className="col-12 col-lg-12">
                    <input type="text" className="form-control" id="name" placeholder="Име" />
                </div>
                <div className="col-12 col-lg-12">
                    <input type="email" className="form-control" id="email" placeholder="Имейл" />
                </div>

                <div className="col-12 text-center">
                    <button className="btn delicious-btn mt-30" type="submit">Изпрати</button>
                </div>
            </div>
        </form>
    </div>
    </div>
    )
}