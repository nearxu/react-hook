
import { useContext } from 'react';

import defaultContext from './context'

const useAlert = context => useContext(context || defaultContext);

export default useAlert;