import  {FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";

import {Skeleton} from "../components";

const SinglePizzaInfo: FC = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const [fullPizza, setFullPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const {request} = useHttp();

  useEffect(() => {
      request(`https://62a1d4dfcc8c0118ef562de2.mockapi.io/items/${id}`)
      .then(res => setFullPizza(res))
      .catch(() => {
        alert('pizza could not fetch');
        navigate('/');
      })
  },[]);

    return ( 
      (!fullPizza) ? <Skeleton/> :
         < div className="container pizza-block" >
               < img 
                 className="pizza-block__image"
                 src={fullPizza.imageUrl}
                 alt="Pizza"
                />
                <h4 className="pizza-block__title">{fullPizza.title}</h4>
                <div className="pizza-block__price">
                  от{fullPizza.price} ₽
                </div>           
         </div > 
    )
}
export default SinglePizzaInfo;



