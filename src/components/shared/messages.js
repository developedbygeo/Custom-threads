import { CheckLg } from '@styled-icons/bootstrap/CheckLg';
import { ErrorCircle } from '@styled-icons/boxicons-regular/ErrorCircle';
import { InformationCircle } from '@styled-icons/heroicons-outline/InformationCircle';

export const messages = {
  successMessage: (
    <p className="success msg">
      You can now check out!
      <CheckLg />
    </p>
  ),
  errorMessage: (
    <p className="error msg">
      Error: All fields are required <ErrorCircle className="small-svg" />
    </p>
  ),
  initialMessage: (
    <p className="tip msg">
      Please fill all the fields to proceed <InformationCircle className="small-svg" />
    </p>
  ),
};
