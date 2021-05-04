import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import {Users} from "./Users";
import { useSelector } from "react-redux";
import { getIsFetching } from "../../redux/users-selector";

 type UserPagePropsType = {};
 export const UserPage: React.FC<UserPagePropsType> = (props) => {
  const isFetching = useSelector(getIsFetching);
  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users />
    </>
  );
};
