import ListGroupBS from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useAppContext } from '../../store/AppContext';
import { deleteProductFromCartType, saveProductInCartAction } from '../../store/action';



function ProductCart({ id, image, title, value, qtd }) {
    const { dispatch } = useAppContext();

    const handleClickAdd = (productId) => {
        console.log(productId);
        saveProductInCartAction(dispatch, productId);
    }

    const handleClickDelete = (productId) => {
        console.log(productId);
        deleteProductFromCartType(dispatch, productId);
    }

    return (
            <ListGroupBS.Item as="li">
                <Table>
                    <tbody>
                        <tr>
                            <td><img width={100} variant="top" src={image} /></td>
                            <td>{title}</td>
                            <td><Button variant="primary" onClick={() => handleClickDelete(id)}>-</Button>
                                <span className="text-muted">{qtd} </span>
                                <Button variant="primary" onClick={() => handleClickAdd(id)}>+</Button></td>
                            <td><span className="text-muted"> R$ {qtd * value} </span></td>
                        </tr>
                    </tbody>
                </Table>
            </ListGroupBS.Item>
    );
}

export default ProductCart;