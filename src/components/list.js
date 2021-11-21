import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

const List = ({ items, removeItem }) => {
  const [isComplete, setisComplete] = useState(false);
  return (
    <div className="task-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="task-item">
            <p className={`${isComplete ? 'complete-task' : 'not-complete'}`}>{title}</p>
            <div>
              <button
                type="button"
                className="complete-btn"
                onClick={() => setisComplete(!isComplete)}
              >
                <BsCheck2Circle />
              </button>
              <button type="button" className="edit-btn">
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
