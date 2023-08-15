import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBookAction } from '../../redux/actions/books/booksAction';

const AddBook = () => {

  // use dispatch
  const dispatch = useDispatch();

   // Access the createBookReducer state from the Redux store
   const createBookState = useSelector((state) => state.bookCreated);
   const { loading, success, book, error } = createBookState;

  //Get the user id from store
  const [bookData, setBookData] = useState({
    category: "",
    title: "",
    author: "",
    coverImageUrl: "",
    amazonLink: "",
  });
  
const handleChange = (e) => {
  setBookData({...bookData, [e.target.name]: e.target.value});
};
  

  // handle submit form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    dispatch(createBookAction(bookData));
    // reset form after submission
    setBookData({
      category: "",
      title: "",
      author: "",
      coverImageUrl: "",
      amazonLink: "",
    });
  };

 

  return (
    <div className='row container-height'>
       <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <div className='text-center'>
            <button 
                type='button'
                className='btn btn-primary'
                data-toggle='modal'
                data-target='#exampleModal'>
                Click to add Book
            </button>
          </div>

          <div
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Create Book
                  </h5>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body'>
                  <h1 className='text-center'>Add Book</h1>
                  <form onSubmit={handleFormSubmit}>
                    <fieldset>
                      <div className='form-group'>
                        <select value={bookData.category} name='category' onChange={handleChange} className='form-control' required>
                          <option defaultValue='Select a category'>Select a category</option >
                          <option value='Programming'>Programming</option >
                          <option value='Science & Technology'>Science & Technology</option>
                          <option value='art and design'>Art & Design</option>
                          <option value='religion'>Religion</option>
                          <option value="Children's Books">Children's Books</option>
                          <option value='Literature & Fiction'>Literature & Fiction</option>
                          <option value='Mystery & Suspense'>Mystery & Suspense</option>
                          <option value='Biography & Memoirs'>Biography & Memoirs</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>Author </label>
                        <input
                          value={bookData.author}
                          onChange={handleChange}
                          type='text'
                          name='author'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder='Author name'
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>title</label>
                        <input
                          value={bookData.title}
                          onChange={handleChange}
                          name='title'
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Book title'
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>Book cover</label>
                        <input
                          value={bookData.coverImageUrl}
                          onChange={handleChange}
                          name='coverImageUrl'
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='book cover Url'
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>Amazon Link</label>
                        <input
                          value={bookData.amazonLink}
                          onChange={handleChange}
                          name='amazonLink'
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='amazon Link'
                          required
                        />
                      </div>
                      <button type='submit' className='btn btn-warning m-auto'>
                        Create Book
                      </button>
                    </fieldset>
                  </form>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-danger'
                    data-dismiss='modal'>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {loading && <p>Loading...</p>}
        {!loading && success && <p> {book} Book created successfully!</p>}
        {!loading && !success && error && <p>Error: {error}</p>}
      </div>

    </div>
  );
};

export default AddBook;