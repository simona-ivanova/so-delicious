import styles from "./AddComment.module.css";
import { useForm } from "../../hooks/useForm";

export const AddComment = ({
    onCommentSubmit,
}) => {
    const { values, changeHandler, onSubmitComment, errors } = useForm({
        comment: ''
    }, onCommentSubmit);
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="text-left">
                        <h3>Остави коментар</h3>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className={styles["contact-form-area"]}>
                        <div className={styles["comment"]}>
                        <form onSubmit={onSubmitComment}>
                            <div className="row">
                                <div className="col-12">
                                    <textarea
                                        name="comment"
                                        className={styles["form-control"]}
                                        id="comment"
                                        cols="30"
                                        rows="10"
                                        placeholder="Съобщение"
                                        value={values.comment}
                                        onChange={changeHandler}>
                                    </textarea>
                                    {errors.comment && <span>{errors.comment}</span>}
                                </div>
                                <div className="col-12">
                                    <button className="btn delicious-btn mt-20" type="submit">Публикувай</button>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};