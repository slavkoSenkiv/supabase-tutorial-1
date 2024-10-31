import { useState } from 'react';
import supabase from '../config/supabaseClient';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [rating, setRating] = useState('');
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !method || !rating) {
      setFormError('Please fill in all the fields correctly');
      return;
    }
    const { data, error } = await supabase
      .from('smoothies')
      .insert([{ title, method, rating }])
      .select();
    // inserting rows always as array of objects - .insert([{}, {}, {}]);
    // adding 3 rows would mean an array with 3 objects
    // adding select at the end of query is a workaround to make navigate(/) work properly

    if (error) {
      console.log(error);
      setFormError('Please fill in all the fields correctly.');
    }
    if (data) {
      setFormError(null);
      // in case user got an error in previous form submition,
      // and now filled the data correctly - we have to remove this error now
      navigate('/'); // to redirect to homepage
    }
  };

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="method">Method:</label>
        <textarea
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>
          <i className="material-icons">check</i>
          Create Smoothie Recipe
        </button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Create;
