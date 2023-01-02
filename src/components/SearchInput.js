import'../css/SearchInput.css'
import{useState} from 'react'

function SearchInput() {

    const[query,setQuery]=useState('')
    const searchMovie=()=>{
        alert('검색!');
        window.location.href=`/search?query=${query}&ie=utf8&sm=top_hty`;
        //http://localhost:3000/search?query=hello&ie=utf8&sm=top_hty
    }

    const EnterSearchInput = (e) => {
        if(e.keyCode === 13) {
            searchMovie();
        }
    }

    const inputChange=(e)=>{
        console.log(e.target.value);
        setQuery(e.target.value);
    }

    return (
        <div id='search-input'>
            <input type='text' onChange={inputChange} onKeyDown={EnterSearchInput}/>
            <button onClick={searchMovie}>검색</button>
        </div>
    )
}

export default SearchInput;