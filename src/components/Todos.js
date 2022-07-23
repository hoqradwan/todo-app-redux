import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getAllTodos } from '../services/actions/todosAction';

const Todos = () => {
    const {isLoading, todos, error} = useSelector(state => state)

    const dispatch = useDispatch();
    useEffect(()=>{
dispatch(getAllTodos())
    },[])
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Todos App</h1>
            {isLoading && <h2>LOADING....</h2>}
            {error && <h2>{error.message}</h2>}

            <section >
            {todos && todos.map(todo => {
                const {id, title} = todo;
           return <article key={todo.id}>
            <h4>{id}</h4>
            <h4>{title}</h4>
           </article>
})}
            </section>
          
        </div>
    );
};

export default Todos;