import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, fetchTodos } from "../../redux/reducers/todoReducer";

const Todo = () => {
    const [newTodo, setNewTodo] = useState('')
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    const inputTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const sendForm = () => {
        if (newTodo.trim() !== '') {
            const todo = {
                title: newTodo,
                completed: false
            };
            dispatch(addTodo(todo))
            setNewTodo('')
        }
    }

    const clickDeleteTodo = (todo) => {
        dispatch(deleteTodo(todo.id))
    }

    return (
        <div>
            <h2>TodoList</h2>
            <input type="text" onChange={inputTodo} value={newTodo} placeholder={'Add new Todo...'} />
            <button className={'btn'} onClick={sendForm}>Добавить</button>

            <div>
                {todos && (
                    <ul>
                        {todos.map(t =>
                            <li key={t.id}>
                                {t.title}
                                <button onClick={() => clickDeleteTodo(t)}>Удалить</button>
                            </li>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Todo;

// Сначала импортируются необходимые зависимости, такие как React, useEffect, useState,
// useDispatch и useSelector из библиотеки react-redux, а также addTodo, deleteTodo и
// fetchTodos из todoReducer.
//
// Внутри компонента Todo используются хук useState для создания состояния newTodo, в
//  котором будет храниться текущее значение новой задачи, и хук useSelector, чтобы получить
//  список задач из Redux хранилища.
//
// Затем используется хук useDispatch, чтобы получить функцию dispatch, которая позволяет
// отправлять действия в Redux хранилище.
//
// Внутри useEffect используется dispatch(fetchTodos()), чтобы при загрузке компонента отправить
// запрос на получение списка задач с помощью функции fetchTodos из todoReducer.
//
// Функция inputTodo просто обновляет состояние newTodo при изменении значения в поле ввода.
//
// Функция sendForm вызывается при отправке формы добавления новой задачи. Она проверяет, что
// новая задача не пустая, создает объект todo с заголовком из newTodo и флагом completed, и
//  затем отправляет это действие с помощью dispatch(addTodo(todo)). После этого состояние
//   newTodo обнуляется.
//
// Функция clickDeleteTodo вызывается при нажатии на кнопку "Удалить" для конкретной задачи.
// Она отправляет действие удаления задачи с помощью dispatch(deleteTodo(todo.id)), передавая
//  идентификатор задачи для удаления.
//
// Возвращаемый JSX-код содержит поле ввода для добавления новой задачи, список задач с
// возможностью удаления каждой задачи и кнопку "Добавить".
//
// Используется условная отрисовка, чтобы показывать список задач только в том случае, если
// todos не равно null или undefined.
//
// Каждая задача в списке отображается в элементе li с кнопкой "Удалить", которая вызывает
// функцию clickDeleteTodo для удаления соответствующей задачи.
//
// Компонент Todo экспортируется по умолчанию для использования в других частях приложения.