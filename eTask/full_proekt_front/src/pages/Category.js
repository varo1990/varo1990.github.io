import React from 'react';
import Wrapper from "../components/Wrapper";
import Categories from "./Categories";
import TaskCategory from "../components/TaskCategory";

function Category(props) {
  return (
    <Wrapper>
      <div className="content">
        <Categories/>
      </div>

    </Wrapper>
  );
}

export default Category;