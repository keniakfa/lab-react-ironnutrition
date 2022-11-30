import { Divider, Input } from 'antd';
import { useState } from 'react';


function Search(props) {
    const {searchFoods} =  props
    const [search , setSearch] =useState('')

    const handleSearch = e =>{
        setSearch(e.target.value)
        searchFoods(e.target.value)

    }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={e =>setSearch(e.target.value)} />
    </>
  );
}

export default Search;