import './CreateRecipe.css';
import { useState } from 'react';

export const CreateRecipe = (
  onCreateRecipeSubmit,
) => {

  const [values, setValues] = useState({
    title: '',
    category: '',
    imageUrl: '',
    cookingTime: '',
    serving: '',
    ingredients: '',
    steps: '',
  });

  const onChangeHandler = (e) => {
    setValues(state => ({ ...state, [e.target.name]: e.target.value }))
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreateRecipeSubmit(values);
  }

  // const [ingredients, setIngredients] = useState([''])

  // const handleChange = (value, index) => {
  //   const newIngredient = ingredients.map((ingredientItem, ingredientIndex) => {
  //     return ingredientIndex === index ? value : ingredientItem
  //   })
  //   setIngredients(newIngredient)
  // }

  // const [steps, setSteps] = useState([''])

  // const handleChangeStep = (value, index) => {
  //   const newStep = steps.map((stepItem, stepIndex) => {
  //     return stepIndex === index ? value : stepItem
  //   })
  //   setIngredients(newStep)
  // }

  return (
    <div className="page page-create-recipe">
      <section className="u-clearfix u-section-1" id="sec-3c2d">
        <div className="u-clearfix u-sheet u-sheet-1">
          <h2 className="u-text u-text-default u-text-palette-2-light-1 u-text-1"> Създ​аване на рецепта </h2>
          <div className="u-expanded-width-sm u-expanded-width-xs u-form u-form-1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">
            <form action="https://forms.nicepagesrv.com/v2/form/process"
              className="u-clearfix u-form-spacing-22 u-form-vertical u-inner-form"
              style={{ padding: 15 }}
              name="form"
              onSubmit={onSubmit}>

              <div className="u-form-group u-form-name u-label-top u-form-group-1">
                <label htmlFor="name-3b9a" className="u-label u-text-palette-2-light-1 u-label-1">Заглавие</label>
                <input
                  value={values.title}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Enter a title"
                  id="name-3b9a"
                  name="title"
                  className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-14 u-text-palette-2-light-1"
                  required="" />
              </div>

              <div className="u-form-group u-form-select u-label-top u-form-group-2">
                <label htmlFor="select-5256" className="u-label u-text-palette-2-light-1 u-label-2">Категория</label>
                <div className="u-form-select-wrapper">
                  <select id="select-5256" name="category" className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-14 u-text-palette-2-light-1">
                    <option value="Закуски" data-calc="">Закуски</option>
                    <option value="Салати" data-calc="">Салати</option>
                    <option value="Супи" data-calc="">Супи</option>
                    <option value="Предястия" data-calc="">Предястия</option>
                    <option value="Основни ястия" data-calc="">Основни ястия</option>
                    <option value="Десерти" data-calc="">Десерти</option>
                    <option value="Хляб" data-calc="">Хляб</option>
                  </select>
                  <svg className="u-caret u-caret-svg u-text-palette-2-light-1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" xmlSpace="preserve"><polygon className="st0" points="8,12 2,4 14,4 "></polygon></svg>
                </div>
              </div>

              <div className="u-form-group u-form-url u-label-top u-form-group-3">
                <label htmlFor="url-d7b8" className="u-label u-text-palette-2-light-1 u-label-3">Снимка</label>
                <input
                  value={values.imageUrl}
                  onChange={onChangeHandler}
                  type="url"
                  pattern="^((https?|ftp)://)?[^\s/$.?#]*\.[^\s]*$"
                  placeholder="Enter your image"
                  id="url-d7b8"
                  name="imageUrl"
                  className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-14 u-text-palette-2-light-1"
                  required="" />
              </div>

              <div className="u-form-group u-form-number u-form-number-layout-number u-form-partition-factor-2 u-label-top u-form-group-4">
                <label htmlFor="number-1622" className="u-label u-text-palette-2-light-1 u-label-4">Време на приготвяне (мин.)</label>
                <div className="u-input-row" data-value="0">
                  <input
                    value={values.cookingTime}
                    onChange={onChangeHandler}
                    // min="0"
                    // max="100"
                    step="1"
                    type="number"
                    placeholder=""
                    id="number-1622"
                    name="cookingTime"
                    className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-14 u-text-palette-2-light-1" />
                </div>
              </div>

              <div className="u-form-group u-form-number u-form-number-layout-number u-form-partition-factor-2 u-label-top u-form-group-5">
                <label htmlFor="number-3d14" className="u-label u-text-palette-2-light-1 u-label-5">Порции</label>
                <div className="u-input-row" data-value="0">
                  <input
                    value={values.serving}
                    onChange={onChangeHandler}
                    // min="0"
                    // max="100"
                    step="1"
                    type="number"
                    placeholder=""
                    id="number-3d14"
                    name="serving"
                    className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-14 u-text-palette-2-light-1" />
                </div>
              </div>

              {/* <div className="u-form-group u-form-textarea u-label-top u-form-group-6">
                <label htmlFor="textarea-1f45" className="u-label u-text-palette-2-light-1 u-label-6">Продукти</label>
                <input
                  value={values.ingredients}
                  onChange={onChangeHandler}
                  rows="4"
                  cols="50"
                  id="textarea-1f45"
                  name="ingredients"
                  className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-14 u-text-palette-2-light-1"
                  required="required"
                  type="text" />
              </div> */}
{/* 
              <div className="u-form-group u-form-textarea u-label-top u-form-group-6">
              <label htmlFor="textarea-1f45" className="u-label u-text-palette-2-light-1 u-label-6">Продукти:</label>
                <button className="btn-add"
                  onClick={() => {
                    setIngredients([...ingredients, ''])
                  }}>
                  +
                </button>
                {
                  ingredients.map((item, index) => {
                    return <div style={{ display: 'flex' }}>
                      <input value={item} onChange={(e) => handleChange(e.target.value, index)} className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-14 u-text-palette-2-light-1"/>
                      <button
                        onClick={() => {
                          const newarr = ingredients.filter((i, j) => {
                            return index !== j
                          })
                          console.log(newarr)
                          setIngredients(newarr)
                        }}
                      >
                        Изтрий
                      </button>
                    </div>
                  })
                }
              </div>

              <div className="u-form-group u-form-textarea u-label-top u-form-group-6">
              <label htmlFor="textarea-1f45" className="u-label u-text-palette-2-light-1 u-label-6">Стъпки:</label>
                <button
                  onClick={() => {
                    setSteps([...steps, ''])
                  }}
                >
                  Добави
                </button>
                {
                  steps.map((item, index) => {
                    return <div style={{ display: 'flex' }}>
                      <input value={item} onChange={(e) => handleChangeStep(e.target.value, index)} className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-14 u-text-palette-2-light-1"/>
                      <button
                        onClick={() => {
                          const newarr = steps.filter((i, j) => {
                            return index !== j
                          })
                          console.log(newarr)
                          setSteps(newarr)
                        }}
                      >
                        Изтрий
                      </button>
                    </div>
                  })
                }
              </div> */}

              {/* <div className="u-form-group u-form-textarea u-label-top u-form-group-7">
                <label htmlFor="textarea-341b" className="u-label u-text-palette-2-light-1 u-label-7">Стъпки</label>
                <input
                  value={values.steps}
                  onChange={onChangeHandler}
                  rows="4"
                  cols="50"
                  id="textarea-341b"
                  name="steps"
                  className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-14 u-text-palette-2-light-1"
                  required="required"
                  type="text" />
              </div> */}

              <div className="u-align-left u-form-group u-form-submit u-label-top u-form-group-8">
                <a href="#" className="u-border-1 u-border-palette-2-light-1 u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-2-light-1 u-radius-50 u-text-hover-white u-text-palette-2-light-1 u-white u-btn-1">създай</a>
                <input type="submit" value="Създай" className="u-form-control-hidden" />
              </div>
            

              {/* <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
              <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
              <input type="hidden" value="" name="recaptchaResponse" />
              <input type="hidden" name="formServices" value="e4a9a16928184301e069cf5ec2ea4020" /> */}
            </form>
          </div>
          {/* <span className="u-file-icon u-icon u-text-palette-2-light-1 u-icon-1" data-href="https://nicepage.com">
            <img src="images/3416075-92c11093.png" alt="" />
          </span>
          <span className="u-file-icon u-icon u-text-palette-2-light-1 u-icon-2" data-href="https://nicepage.com">
            <img src="images/3416075-92c11093.png" alt="" />
          </span> */}
          {/* <span className="u-file-icon u-icon u-text-palette-2-light-1 u-icon-3" data-href="https://nicepage.com">
            <img src="images/3416075-92c11093.png" alt="" />
          </span>
          <span className="u-file-icon u-icon u-text-palette-2-light-1 u-icon-4" data-href="https://nicepage.com">
            <img src="images/2976286-505222d6.png" alt="" />
          </span> */}
        </div>
      </section>
    </div>
  )
};