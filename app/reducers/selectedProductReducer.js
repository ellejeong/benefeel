import react from 'react';

import SELECT_PRODUCT from 'APP/app/constants';

export default selectedProductReducer (state = null, action) {
	switch(action.type) {
		case SELECT_PRODUCT: {
			return action.selectedProduct
		}
	}
}
