import React from 'react';
import Input from "../moleculas/input";
import Button from "../moleculas/button";

const SearchBar = () => {
    return <div>
        <Input placeholder="project name"/>
        <Input placeholder="log parameters"/>
        <Button text="Search" onClick={() => {}}/>
    </div>;
}

export default SearchBar;