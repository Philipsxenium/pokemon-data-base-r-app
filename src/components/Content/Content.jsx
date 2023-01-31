import React from 'react';
import cl from './content.module.css'
import List from "./List/List";

const Content = () => {
    return (
        <div className={cl.content}>
            <form>
                <input type="text" placeholder='Search'/>
                <select name="" id="">
                    <option>Release Date</option>
                    <option>Descending</option>
                </select>
                <select name="" id="">
                    <option>Descending</option>
                    <option>Release Date</option>
                </select>
            </form>
            <List/>
        </div>
    );
};

export default Content;