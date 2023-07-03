import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
    todos: todoReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

// Данный код представляет настройку Redux-хранилища, объединение редьюсеров и применение
// промежуточного слоя (middleware).
//
// Сначала импортируются необходимые зависимости, такие как applyMiddleware, combineReducers и
// createStore из библиотеки Redux, а также thunk из библиотеки redux-thunk.
//
// Внутри кода создается корневой редьюсер (rootReducer) с помощью функции combineReducers. В
// данном случае используется только один редьюсер todoReducer, который отвечает за управление
// состоянием списка задач.
//
// Затем создается Redux-хранилище (store) с помощью функции createStore. В аргументах передается
// rootReducer, который объединяет все редьюсеры, и applyMiddleware(thunk), чтобы применить
// промежуточный слой thunk.
//
// Промежуточный слой thunk позволяет нам писать асинхронные действия (асинхронные функции) в
// Redux, такие как запросы к API или другие асинхронные операции.
//
// Созданное хранилище экспортируется по умолчанию для использования в других частях приложения.
//
// Обратите внимание, что в этом коде не показана конфигурация Redux DevTools Extension, но
// вы можете добавить ее, если хотите использовать расширение Redux DevTools для отладки
// вашего приложения.