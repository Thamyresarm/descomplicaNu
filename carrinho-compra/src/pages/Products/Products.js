import { Col, Container, Row } from 'react-bootstrap';
import { CardContainer } from '../../container/Card/Card';
import { useAppContext } from '../../store/AppContext';
import { useEffect, useState } from 'react';
import { saveProductInCartType } from '../../store/types';
import { Notification } from '../../components/Notification/Notification';
import { fetchProductsAction } from '../../store/action';

function Products() {
    const { state, dispatch } = useAppContext();
    const [showFeedback, setShowFeedback] = useState(false);

    useEffect(() => {
        fetchProductsAction(dispatch)
    }, []);

    useEffect(() => {
        if (state.type === saveProductInCartType) {
            setShowFeedback(true);
        }
    }, [state.type]);

    return (
        <>
            {showFeedback && (
                <Notification
                    message="Produto adicionado ao carrinho"
                    onClose={
                        () => {
                            setShowFeedback(false);
                        }
                    }
                />
            )}
            <Container fluid>
                <div className='container-fluid text-center p-2'>
                    <h2 className="display-4">Conheça nossos produtos</h2>
                    <p>Produtos para todos os tipos de cabelos</p>
                </div>
                <Row>
                    {state.products.map(
                        (product) => {
                            return (
                                <Col xs={12} md={3}>
                                    <CardContainer
                                        id={product.id}
                                        image={product.image}
                                        title={product.title}
                                        description={product.description}
                                        value={product.value}
                                    />
                                </Col>
                            )
                        }
                    )}
                </Row>
            </Container>
        </>
    );
}

export default Products; 