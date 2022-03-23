import { HiOutlineInformationCircle } from 'react-icons/hi';
import { BiErrorCircle } from 'react-icons/bi';
import { BsCheckLg } from 'react-icons/bs';

export const messages = {
  successMessage: (
    <p className="success msg">
      You can now check out!
      <BsCheckLg />
    </p>
  ),
  errorMessage: (
    <p className="error msg">
      Error: All fields are required <BiErrorCircle className="small-svg" />
    </p>
  ),
  initialMessage: (
    <p className="tip msg">
      Please fill all the fields to proceed <HiOutlineInformationCircle className="small-svg" />
    </p>
  ),
};
