import React, {useState} from 'react';

const CommentForm = () => {
  const [formData, setFormDate] = useState({
    rating: ``,
    reviewText: ``
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setFormDate({...formData, [name]: value});
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          <input onChange={handleFieldChange} className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
          <label className="rating__label" htmlFor="star-1">Rating 1</label>

          <input onChange={handleFieldChange} className="rating__input" id="star-2" type="radio" name="rating" value="2"/>
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input onChange={handleFieldChange} className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked/>
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input onChange={handleFieldChange} className="rating__input" id="star-4" type="radio" name="rating" value="4"/>
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input onChange={handleFieldChange} className="rating__input" id="star-5" type="radio" name="rating" value="5"/>
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input onChange={handleFieldChange} className="rating__input" id="star-6" type="radio" name="rating" value="6"/>
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input onChange={handleFieldChange} className="rating__input" id="star-7" type="radio" name="rating" value="7"/>
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input onChange={handleFieldChange} className="rating__input" id="star-8" type="radio" name="rating" value="8" defaultChecked/>
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input onChange={handleFieldChange} className="rating__input" id="star-9" type="radio" name="rating" value="9"/>
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input onChange={handleFieldChange} className="rating__input" id="star-10" type="radio" name="rating" value="10"/>
          <label className="rating__label" htmlFor="star-10">Rating 10</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={handleFieldChange} className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text" />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

export default CommentForm;
