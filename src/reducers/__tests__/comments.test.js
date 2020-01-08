import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it("handles actions of type Save Comment", () => {
    const action = {
        type: SAVE_COMMENT,
        payload: "New Comment"
    }

    expect(commentsReducer([], action)).toEqual(["New Comment"])
})

it("handles action with unknown type", () => {
    const commentReducer = commentsReducer([], "ADFADF");

    expect(commentReducer).toEqual([]);
})