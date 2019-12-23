import React from 'react'

const Search=({search,searchchange})=>{
    return(
        <div className='pa2'>
            <input className='pa3 ba b--black bg-lightest-blue' type='search' placeholder="Search robots" onChange={searchchange}/>
            
        </div>
        
    )
}
export default Search;