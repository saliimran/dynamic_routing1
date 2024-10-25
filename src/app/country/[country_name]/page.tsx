import Link from "next/link";

export default function CountryName ({params}:{params:{country_name:string}}){
 
    type Country = {
        name:string;
        population:number;
        capital:string
    }

    let countries:Country[]  = [
    
    {
        name : "Pakistan",
        population : 24100000,
        capital:"Islamabad" 
    } 
    ,

    
    {
        name : "Bangladesh",
        population : 21500000,
        capital:"Dhaka" 
    },

    
    {
        name : "India",
        population : 124000000,
        capital:"Dehli" 
    },

    
    {
        name : "Iran",
        population : 4100000,
        capital:"Tehran" 
    },

    
   { name : "Palestine",
    population : 700000,
    capital:"Jeruselum" 
     }

    ]

    let country : any = countries.find(
        (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
      );

    
    
      if (!countries){
        return(
            <h1>Country not Found!</h1>
        )
    }


    else { 
        return(
            <>
                <div>
                    <h1>Country Name:{country.name}</h1>
                    <h1>Population:{country.population}</h1>
                    <h1>Capital:{country.capital}</h1>
                    <Link href="/country">Back to the Country list</Link>
                </div>
            </>
        )
    }



}