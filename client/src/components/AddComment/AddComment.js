import { useForm } from "../../hooks/useForm";

export const AddComment = ({
    onCommentSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-left">
                        <h3>Остави коментар</h3>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="contact-form-area">
                        <form onSubmit={onSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <textarea
                                        name="comment"
                                        className="form-control"
                                        id="comment"
                                        cols="30"
                                        rows="10"
                                        placeholder="Съобщение"
                                        value={values.comment}
                                        onChange={changeHandler}>
                                    </textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn delicious-btn mt-30" type="submit">Публикувай</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};