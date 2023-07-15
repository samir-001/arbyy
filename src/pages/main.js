const MainDashboard = ()=>{
    const global = {
        "عدد المقالات":{num:0,color:"#ff6200c0"},
        "عدد الرسائل":{num:0,color:"#ffae00e1"},
        "عدد التعليقات":{num:0,color:"#00e0b4b2"},
        "عدد الاعجابات":{num:0,color:"#00e1ffb4"},
    } 
    const types = {
        "نجدة طوارئ":{num:0,color:"#ff6200c0"},
        "عنوانين":{num:0,color:"#ffae00e1"},
        "مواقع الكترونية":{num:0,color:"#00e0b4b2"},
        "راقام موبايل":{num:0,color:"#00e1ffb4"},
    } 
    const inner ={
        "طلبات التعديل":{num:0,color:"#ff6200c0"},
        "كلمات جديدة":{num:0,color:"#ffae00e1"},
        "البلاغات":{num:0,color:"#00e0b4b2"}
        
    }
    const requests = Object.keys(inner).map((item ,index)=>{
        return(
            <div key={index}  className=" badge">
                <div  style={{backgroundColor:inner[item].color}} className="badge__icon"></div>
                <div className="badge__Content">
                    <p className="badge__title">{item}</p>
                    <p className="badge__text">{inner[item].num}</p>
                    
                </div>
            </div>
        )
    })
    const statistic = Object.keys(global).map((item ,index)=>{
        return(
            <div  className=" badge">
                <div key={index} style={{backgroundColor:global[item].color}} className="badge__icon"></div>
                <div className="badge__Content">
                    <p className="badge__title">{item}</p>
                    <p className="badge__text">{global[item].num}</p>
                    
                </div>
            </div>
        )
    })
    const typesContnet = Object.keys(types).map((item ,index)=>{
        return(
            <div key={index}  style={{backgroundColor:types[item].color,color:"white",border:"none"}}  className=" badge">

                <div className="badge__Content">
                    <p className="badge__title">{item}</p>
                    <p className="badge__text">{types[item].num}</p>
                    
                </div>
            </div>
        )
    })
    return(
        <div className="main-dash-board">
            <div className="statistic">
                <h3 className="statistic__title">احصائيات</h3>
                <div className="statistic__content">
                    {statistic}
                </div>
            </div>
            <div className="statistic">
            <h3 className="statistic__title">طلبات</h3>
            <div className="statistic__content">
                    {requests}
                </div>
            </div>

            <div className="article-types">
            <div className="statistic">
            <h3 className="statistic__title">انواع المقالات</h3>
            <div className="statistic__content">
                    {typesContnet}
                    {typesContnet}
                    {typesContnet}
                    {typesContnet}
                    {typesContnet}
                    {typesContnet}
                </div>
            </div>
            </div>
        </div>
    )
}
export default MainDashboard