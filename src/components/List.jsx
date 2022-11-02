import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos.js";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <StListContainer>
      <h2>Belum selesai</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <StLink to={`/personaltaskthree/${todo.id}`} key={todo.id}>
                  <div>Cek Detail</div>
                </StLink>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <StDialogFooter>
                  <StButton
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    Hapus
                  </StButton>
                  <StButton
                    borderColor="green"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "Batal" : "Selesai"}
                  </StButton>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
      <h2 className="list-title">Selesai</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <StLink to={`/personaltaskthree/${todo.id}`} key={todo.id}>
                  <div>Cek Detail</div>
                </StLink>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <StDialogFooter>
                  <StButton
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    Hapus
                  </StButton>
                  <StButton
                    borderColor="green"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "Batal" : "Selesai"}
                  </StButton>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
    </StListContainer>
  );
};

export default List;

const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid white;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
  margin-bottom: 20px
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
