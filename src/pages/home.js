import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { getArticles } from '../reducers/articles/getArticles';
import { Link } from 'react-router-dom';
const Home = ()=>{
  const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getArticles())
},[])
const articlesState = useSelector((state)=>{
  return state.Articles.data
})

var article ;
if(articlesState){
  article = articlesState.map((item )=>{
    return(
      
      <div className='summary-card'>
        <Link to={`/article/${item.Aid}`} state={{data:item}}>
        <div className='summary-card__title'>{item.title}</div>
        <div className='summary-card__content'>{String(item.content).slice(0,30)}</div>
        
      </Link>
      </div>
    )
  })
} 

return(  <div>
 <div className='jumbotron'>
        <img className='image-jumbo' src='./jumbo.jpg' alt="er"/>
      </div>
    <div className='container'>
      <div className=''>
        <p className='title' style={{textAlign:"center",margin:"20px"}}>محرك البحث</p>
      <div className="search-engine" >
          <input type="search" className="search" placeholder="Search..."/>
          <button className="form-btn-success"> بحث</button>
        </div>

      </div>
      <div className='report-section'>
      {article}
      </div>
    </div>    
    </div>
)
}
  

export default Home