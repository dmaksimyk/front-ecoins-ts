/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useBackPage from './useBackPage';
import useNextPage from './useNextPage';

const useNavigation = () => {
  const nextPage = useNextPage();
  const backPage = useBackPage();

  return {
    nextPage,
    backPage,
  };
};

export default useNavigation;
