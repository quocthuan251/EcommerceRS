import CONSTANTS from '../constants';

const initialState = {
  listCategory: [],
  listProduct: [],
  pending: false,
  error: false
};

const homeDataReducer = (state = initialState, action) => {
	switch (action.type) {
    case CONSTANTS.GET_LIST_CATEGORY:
			return {
				...state,
        pending: true
			};
		case CONSTANTS.GET_LIST_CATEGORY_SUCCEED:
			return {
				...state,
        listCategory: [...action.payload],
        pending: false,
        error: false
			};

    case CONSTANTS.GET_LIST_CATEGORY_FAILED:
      return {
        ...state,
        pending: false,
        error: true
      };

    case CONSTANTS.GET_RECOMMEND_PRODUCT:
      return {
        ...state,
        pending: true
      };

    case CONSTANTS.GET_RECOMMEND_PRODUCT_SUCCEED:
      return {
        ...state,
        listProduct: [...action.payload],
        pending: false,
        error: false
      };

    case CONSTANTS.GET_RECOMMEND_PRODUCT_FAILED:
      return {
        ...state,
        pending: false,
        error: true
      };

		default:
			return state;
	}
};

export default homeDataReducer;