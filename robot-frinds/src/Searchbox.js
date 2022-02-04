const Searchbox =({searchchange}) =>{
    return (
        <div>
            <input type='search' placeholder='Search for Robots' className="bg-lightest-blue" onChange={searchchange}></input>
        </div>
    )
}


export default Searchbox