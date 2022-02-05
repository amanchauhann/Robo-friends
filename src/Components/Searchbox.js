const Searchbox =({searchchange}) =>{
    return (
        <div>
            <input type='search' placeholder='Search for Robots' className="bg-lightest-blue pd2 ma2" onChange={searchchange}></input>
        </div>
    )
}


export default Searchbox