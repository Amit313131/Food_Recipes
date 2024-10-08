import React, { useEffect, useState } from 'react'

const Meal = () => {
    const [mealData, setmealData] = useState([]);
    const [Area, setArea] = useState('Indian');
    const [inputData, setInputData] = useState('');
    useEffect(() => {
        const fetchDataFromAPI = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`)
            const data = await api.json();
            console.log("my data", data.meals);
            setmealData(data.meals);
        }
        fetchDataFromAPI();

    }, [Area]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
        );
        const data = await api.json();
        console.log("search data = ", data.meals);
        setmealData(data.meals);
        setInputData('');
      };

    return (
        <>

            <div className="my-3" style={{ width: "1000px", margin: "auto" }}>
                <div className="mx-auto text-center">
                    <button onClick={() => setArea("indian")} type="button" className="btn btn-outline-primary mx-3" >Indian</button>
                    <button onClick={() => setArea("american")} type="button" className="btn btn-outline-secondary mx-3">American</button>
                    <button onClick={() => setArea("canadian")} type="button" className="btn btn-outline-success mx-3">Canadian</button>
                    <button onClick={() => setArea("chinese")} type="button" className="btn btn-outline-danger mx-3">Chinese</button>
                    <button onClick={() => setArea("Thai")} type="button" className="btn btn-outline-warning mx-3">Thai</button>
                    <button onClick={() => setArea("Russian")} type="button" className="btn btn-outline-info mx-3">Russian</button>
                    <button onClick={() => setArea("british")} type="button" className="btn btn-outline-light mx-3">British</button>
                   

                </div>
            </div>

            <form onSubmit={submitHandler} className="mx-auto text-center my-3" >
                <input value={inputData} onChange={(e) => setInputData(e.target.value)} type="text" placeholder='Search' style={{borderRadius:'50px'}}  />
            </form>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                textAlign:'center',
                width:'1500px',
                margin:'auto'
            }}>
                {mealData.map((data) => <div key={data.idMeal} style={{maxWidth:'280px',textAlign: 'center' }}>
                    <div style={{padding:'10px', maxWidth:'280px'}}>
                        <img src={data.strMealThumb} alt="" style={{
                            width: '220px',
                            borderRadius: '10px',
                            border: '2px solid yellow',
                           


                        }} />
                    </div>
                    <h5 className="meal-name">{data.strMeal}</h5>
                </div>)}
            </div>
        </>
    )
}

export default Meal
