import React, { useState } from 'react';
import StarRating from './StarRating.jsx';
import Characteristics from './Characteristics.jsx';
import productChar from './productChar.js';
import CharList from './CharList.jsx';
import '../styles/style.css';

const AddReview = () => {

  const [formData, setFormData] = useState({
    overallRating: '',
    recommendProduct: '',
    size: '',
    width: '',
    comfort: '',
    quality: '',
    length: '',
    fit: '',
    reviewSummary: '',
    reviewBody: '',
    nickname: '',
    email: ''
  });

  const [feedback, setFeedback] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
    });
  }

  const validate = formData => {
    const { overallRating, recommendProduct, size, width, comfort, quality, length, fit, reviewSummary, reviewBody, nickname, email } = formData;
    const errors = {};

    if (!reviewSummary) errors.reviewSummary = "Please fill out Review Summary";
    if (!reviewBody) errors.reviewBody = "Please fill out review body.";
    if (!nickname) errors.nickname = "Please fill out nickname.";
    if (!email) errors.email = "Please fill out email.";
    return errors;
  }

  const fileSelectedHandler = (event) => {
  }

  const handleFormSubmission = (event) => {
    event.preventDefault();
    const errors = validate(formData);
    setErrors(errors);
    if(Object.keys(errors).length === 0) {
      setFormData({
        overallRating: '',
        recommendProduct: '',
        size: '',
        width: '',
        comfort: '',
        quality: '',
        length: '',
        fit: '',
        reviewSummary: '',
        reviewBody: '',
        nickname: '',
        email: ''
      });
      setFeedback('Thanks for your review!');
    }
  }

  return (
    <div className="new-review">
      <form className="new-review-form" onSubmit={handleFormSubmission}>
        {Object.values(errors).map(error => (
          <h6 key={error}>{error}</h6>
        ))}
        <h2>Write A Review!</h2>

        <h2 className="center deep-purple-text">{feedback}</h2>

        <fieldset>
          <legend>Overall Rating</legend>
          <div className="field">
            <StarRating handleChange={handleChange} />
          </div>
          <div className="field">
          <p>Would you recommend this product to others?</p>
            <label>
              <input
              type="radio"
              name="recommendProduct"
              value={true}
              onChange={handleChange}
              checked={formData.recommendProduct === 'true'}
              />
              <span>Yes</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="recommendProduct"
              value={false}
              onChange={handleChange}
              checked={formData.recommendProduct === 'false'}
              />
              <span>No</span>
            </label>
          </div>
        </fieldset>
        <div>
          <CharList handleChange={handleChange} char={productChar} />
        </div>
        <fieldset>
          <legend>Review Message</legend>
          <div className="field">
            <label htmlFor="reviewSummary">Review Summary</label>
            <textarea
              name="reviewSummary"
              id="reviewSummary"
              className="materialize-textarea"
              value={formData.reviewSummary}
              onChange={handleChange}>
            </textarea>
          </div>
          <div className="field">
            <label htmlFor="reviewBody">Review Summary</label>
            <textarea
              name="reviewBody"
              id="reviewBody"
              className="materialize-textarea"
              value={formData.reviewBody}
              onChange={handleChange}>
            </textarea>
          </div>
        </fieldset>
        <fieldset>
          <legend>Your Info</legend>
          <div className="field">
            <label htmlFor="nickname">What is your Nickname?</label>
            <textarea
              name="nickname"
              id="nickname"
              className="materialize-textarea"
              value={formData.nickname}
              onChange={handleChange}>
            </textarea>
          </div>
          <div className="field">
            <label htmlFor="email">What is your Email?</label>
            <textarea
              name="email"
              id="email"
              className="materialize-textarea"
              value={formData.email}
              onChange={handleChange}>
            </textarea>
          </div>
        </fieldset>
        <fieldset>
          <legend>Upload Photos</legend>
          <div className="field">
            <input
            type="file"
            onChange={fileSelectedHandler} />
          </div>
        </fieldset>

        <div className="submit-field">
          <button className="submit-button">Submit Review</button>
        </div>
      </form>
    </div>
  )
}
export default AddReview;