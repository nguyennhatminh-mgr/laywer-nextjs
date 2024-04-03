"use server";

export const addTodo = async (e: any) => {
  console.log(e);
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
  return data;
};
