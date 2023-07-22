import { Col, Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ListGroupBS from 'react-bootstrap/ListGroup';
import { useEffect } from "react";
import { fetchCartAction, fetchProductsAction, fetchSubTotal } from "../../store/action";
import { useAppContext } from "../../store/AppContext";
import ProductCart from "../../components/ProductCart/ProductCart";
import { Link } from "react-router-dom";


function Cart() {
    const { state, dispatch } = useAppContext();

    useEffect(() => {
        fetchSubTotal(dispatch);
        fetchCartAction(dispatch);
        fetchProductsAction(dispatch)
    }, []);

    console.log(state.cart)
    return (
        <Container>
            <ListGroupBS variant="flush">
                {state.cart.map(
                    (product) => {                        
                        console.log(state)
                        const productSelected = state.products.find((productList) => productList.id == product.id);
                        return (

                            <ProductCart
                                id={product.id}
                                image={productSelected.image}
                                title={productSelected.title}
                                value={productSelected.value}
                                qtd={product.qtd}
                            />
                        )
                    }
                )}
                <ListGroupBS.Item as="li">
                <Table>
                    <tbody>
                        <tr>
                            <td> <Button variant="primary"><Link className="nav-link" to="/products">Continue comprando</Link></Button></td>
                            <td><strong>SUBTOTAL:</strong><p> R$ {state.subtotal}</p></td>                            
                        </tr>
                    </tbody>
                </Table>
                    
                </ListGroupBS.Item>
            </ListGroupBS>
        </Container>
    );
}

export default Cart;