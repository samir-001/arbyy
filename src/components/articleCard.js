const ArticleCard = ({title,content})=>{
    return(
        <div className="article-card">
            <h4 className="article-card__title"> {title}</h4>
            <p className="article-card__content"> {content}</p>
            <div className="article-card__control">
                <div className="form-btn-danger">delete</div>
                <div className="form-btn-success">edit</div>
            </div>
        </div>
    )
}
export default ArticleCard