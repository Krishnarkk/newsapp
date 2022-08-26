import React,{useEffect,useState,useRef} from 'react'
import axios from 'axios'
import './News.css'
import Loader from './Loader';
import { motion } from "framer-motion"

const News = () => {
    const[news,setNews]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');
  const[loading,setLoading]=useState(false)
    const InputRef=useRef();
    useEffect(()=>{
        getNews();
    },[])

    const getNews=async()=>{
        setLoading(true);
        const response=await axios.get(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`);
        setNews(response.data.hits);
        setLoading(false)
      }
    const handleSearch=(e)=>{
        setSearchTerm(e.target.value)

    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        getNews();
    }
    const handleClear=()=>{
        setSearchTerm("")
        InputRef.current.focus()
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className="formSection">
        <input type="text" placeholder='Search...' value={searchTerm} ref={InputRef} onChange={handleSearch} />
        <button type='submit'>Search</button>
        <button onClick={handleClear}>Clear</button>
        </form>
        {loading?(<div className='load'><Loader/></div>):(
        <div className="header">
      {
        news.map((data)=>
           <motion.div key={data.objectID}  className="subBox"
            animate={{
              y:10,
              opacity:1,
             
            }}
            initial={
              {
                opacity:0
              }
            }
            transition={{
              duration:2,
              type:'tween'

            }}
            
            >

            <h3> <a  href={data.url}>{data.title}</a></h3>
            <p>By :{data.author}</p>

          </motion.div>
        )
      }
      </div>)}
    </div>
  )
}

export default News