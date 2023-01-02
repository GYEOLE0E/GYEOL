import'../css/SearchResult.css';
import { useEffect } from 'react';
import queryString from 'query-string';

function SearchResult() {
    //componentsDidMount - 클래스형
    useEffect(() => {//hook방식
        console.log(window.location);//Object
        console.log(window.location.href);
        //http://localhost:3000/search?query=hello&ie=utf8&sm=top_hty
        console.log(window.location.search);
        //?query=hello&ie=utf8&sm=top_hty
        //query=hello&ie=utf8&sm=top_hty
        //query=hello, ie=utf8, sm=top_hty
        const queryObj = queryString.parse(window.location.search);
        console.log(queryObj); //{ie:"utf8", query:"hello", sm:"top_hty"}
        console.log(queryObj.query);//"hello"
    },[])
    return (
        <div id='search-result'>
            결과
        </div>
    )
}

export default SearchResult;