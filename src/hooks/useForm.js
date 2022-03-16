import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useForm = (fn) => {
  const [errorExists, setErrorExists] = useState(null);
  const dispatch = useDispatch();

  const validate = (values) => values.every((val) => val.trim().length > 1);

  const submitHandler = (e, ...fields) => {
    e.preventDefault();
    const res = validate(fields);
    if (res) {
      dispatch(fn(true));
      setErrorExists(false);
    } else {
      setErrorExists(true);
    }
  };

  return [errorExists, submitHandler];
};

export default useForm;
