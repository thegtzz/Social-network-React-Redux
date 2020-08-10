import React from "react";
import {useSelector} from "react-redux";
import {Friends} from "./Friends";
import {Preloader} from "../common/Preloader/Preloader";
import {getIsFetching} from "../../redux/friends-selectors";


const FriendsContainer: React.FC = (props) => {
    const isFetching = useSelector(getIsFetching)
    return <>
            { isFetching ? <Preloader/> : null }
            <Friends/>
        </>
}
export default FriendsContainer




