import React from 'react'

function Search({handleInput, search}) {
    return (
        <section className="searchbox-wrap">
            <input 
                className="searchbox" 
                type="text" 
                placeholder="So what movie do you want to watch today?" 
                onChange={handleInput}
                onKeyPress={search}
            />
        </section>
    )
}

export default Search
