import react from 'react';

import { SELECT_PRODUCT } from 'APP/app/constants';

export default selectProduct = product => ({
	type: SELECT_PRODUCT,
	selectedProduct: product
});
