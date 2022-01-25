import {
  SET_CATEGORIES,
  SET_CATEGORIES_ERROR,
  SET_CATEGORIES_LOADING,
} from "../actionTypes";
import { baseUrl } from "../../apis/baseUrl";

const setCategories = (payload) => {
  return { type: SET_CATEGORIES, payload };
};

const setCategoriesError = (payload) => {
  return { type: SET_CATEGORIES_ERROR, payload };
};

const setCategoriesLoading = (payload) => {
  return { type: SET_CATEGORIES_LOADING, payload };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(setCategoriesLoading(true));
    dispatch(setCategoriesError(null));
    try {
      const { data: categories } = await baseUrl.get("/categories");
      dispatch(setCategories(categories.response));
    } catch (err) {
      dispatch(setCategoriesError(err.message));
    } finally {
      dispatch(setCategoriesLoading(false));
    }
  };
};

export const addCategory = (formData) => {
  return async (dispatch, getState) => {
    dispatch(setCategoriesLoading(true));
    dispatch(setCategoriesError(null));
    try {
      const {data: category} = await baseUrl.post('/categories', formData)
      const { categoryReducer } = getState()
      const { categories } = categoryReducer
      const newCategories = [...categories, category]

      dispatch(setCategories(newCategories))
      return category
    } catch (err) {
      dispatch(setCategoriesError(err.message));
    } finally {
      dispatch(setCategoriesLoading(false));
    }
  }
}

export const deleteCategory = (id) => {
  return async (dispatch, getState) => {
    dispatch(setCategoriesLoading(true));
    dispatch(setCategoriesError(null));

    try {
      const { data } = await baseUrl.delete(`/categories/${id}`)

      const { categoryReducer } = getState()
      const { categories } = categoryReducer
      const newCategories = categories.filter(el => el.id !== id)
      dispatch(setCategories(newCategories))
      
      return data

    } catch (err) {
      dispatch(setCategoriesError(err.message));
    } finally {
      dispatch(setCategoriesLoading(false));
    }
  }
}