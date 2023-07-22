import Card from "../../components/Card/Card";
import { useAppContext } from "../../store/AppContext";
import { saveProductInCartAction } from "../../store/action";

export const CardContainer = (props) => {
    const {dispatch} = useAppContext();

    const handleClick = (productId, value) => {
       // console.log(productId);
        saveProductInCartAction(dispatch, productId, value);
        //dispatch(selectProductAction())
    }
    return (
        <Card {...props} onClick={handleClick}/>
    )
}