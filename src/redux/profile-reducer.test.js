import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

 let State = {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post.', likesCount: 11},
                {id: 3, message: 'It\'s my second post.', likesCount: 11},
                {id: 4, message: 'Go on rolling.', likesCount: 11},
            ]
        }

it('Posts length should be 5', () => {
    let action = addPostActionCreator("Test mess")
    let newState = profileReducer(State, action)
    expect(newState.posts.length).toBe(5)
});

it("Message should be", () => {
    let action = addPostActionCreator("Inalienable")
    let newState = profileReducer(State, action)
    expect(newState.posts[4].message).toBe("Inalienable")
})

it("after deleting, length of messages should decrement", () => {
    let action = deletePost(1)
    let newState = profileReducer(State, action)
    expect(newState.posts.length).toBe(3)
})