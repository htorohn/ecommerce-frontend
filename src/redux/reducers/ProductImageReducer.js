import {
    SET_MAIN_IMAGE
} from '../actions/types';

const INITIAL_STATE = {
    current_image: {},
    thumbnailImages: []
    
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_MAIN_IMAGE:
            return {
                ...state,
                current_image: action.payload
            }
        default:
            return state
    }
}