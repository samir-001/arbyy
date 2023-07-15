import { useLocation } from "react-router";

const Artilce = (props)=>{
const Location  = useLocation()
const data = Location.state.data

        return(
            <>
                <div className="article-view">
                    <div className="container">


                <div className="article-view__title">
                    {data.title}
                </div>

                <div>
                    {data.content}
                </div>
            </div>
                    </div>
            </>
    )
}
export default Artilce