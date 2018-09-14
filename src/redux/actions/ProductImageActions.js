import {
    SET_MAIN_IMAGE
} from '../actions/types';

export const setMainImage = (image_url) => {
    //console.log("image url", image_url)
    return (dispatch) => {
        dispatch({ type: SET_MAIN_IMAGE, payload: image_url })
    }
}