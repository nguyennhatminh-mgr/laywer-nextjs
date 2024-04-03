"use client";

import { addTodo } from "../action";

const ProfilePage = () => {
  return (
    <>
      <h2>Server Actions Demo</h2>
      <div>
        <div>
          <label htmlFor="todo">Todo</label>
          <div>
            <input
              id="todo"
              name="text"
              type="text"
              placeholder="What needs to be done?"
              required
            />
          </div>
        </div>
        <div>
          <button
            onClick={async (e) => {
              const data = await addTodo({ text: "test" });
              console.log(data);
            }}
          >
            Add Todo
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
