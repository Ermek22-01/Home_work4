const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload]}
        case 'REMOVE_TODO':
            return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload)}
        case 'SET_TODOS':
            return { ...state, todos: action.payload }
        default:
            return state
    }
}

export const fetchTodos = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15');
            if (!response.ok) {
                throw new Error('Failed to fetch todos.');
            }
            const todos = await response.json();
            dispatch({ type: 'SET_TODOS', payload: todos });
        } catch (error) {
            console.log(error);
        }
    };
};


export const addTodo = payload => ({type: "ADD_TODO", payload})
export const deleteTodo = payload => ({type: "REMOVE_TODO", payload})
export default todoReducer

//Функция fetchTodos объявлена с использованием ключевого слова export, чтобы можно было
// импортировать и использовать эту функцию в других частях кода.
//
// Внутри функции fetchTodos мы используем ключевое слово async, чтобы указать, что функция
// является асинхронной и будет выполняться асинхронный код.
//
// Функция fetchTodos возвращает другую функцию (функцию-диспетчер), которая будет вызвана позже
// при диспетчеризации действия.
//
// Внутри функции-диспетчера, мы используем try-catch блок для обработки ошибок, которые могут
// возникнуть при выполнении асинхронных операций.
//
// Внутри блока try, мы используем функцию fetch для выполнения GET-запроса к указанному URL-адресу
// API (https://jsonplaceholder.typicode.com/todos?_limit=15).
//
// Мы ждем выполнения запроса, используя ключевое слово await, чтобы ожидать ответа от сервера.
//
// После получения ответа, мы проверяем статус ответа с помощью свойства ok объекта response.
// Если статус не находится в диапазоне 200-299 (успешный статус), мы выбрасываем ошибку.
//
// Если запрос выполнен успешно, мы вызываем метод json() на объекте response, чтобы преобразовать
// полученные данные в формат JSON.
//
// Затем мы используем функцию dispatch, чтобы отправить полученные данные в Redux хранилище
// вместе с действием (action). Мы передаем объект действия с типом 'SET_TODOS' и данными задач
// в поле payload.
//
// В случае возникновения ошибки при выполнении асинхронных операций, ошибка будет перехвачена
// блоком catch, и мы можем обработать ее или вывести сообщение об ошибке в консоль.
//
// Итак, функция fetchTodos выполняет запрос к удаленному серверу, получает список задач и
// отправляет их в Redux хранилище с помощью функции dispatch.