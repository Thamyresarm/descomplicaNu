export const getProducts = async () => {
    return [
        {
            'id': '123',
            'image': 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/517345-500-500/widi-care-juba-blend-de-oleos-vegetais.jpg?v=638027567851030000',
            'title': 'JUBA BLEND DE ÓLEOS VEGETAIS 60ML - WIDI CARE',
            'description': 'O Juba Blend de Óleos Vegetais, possui fórmula exclusiva que umecta os fios altamente ressecados e ajuda nos tratamentos intensivos para essas necessidades.',
            'value': 38.99

        },
        {
            'id': '456',
            'image': 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8rc8zoZO2amdTN4iVCteDaixrgVaDkPWcZAJLV3Lpui0HGD2VJOMkVyTbXYUUBvYRB1CSlLFnJPoa2eaONejqJdLkxA6dZ7kcrx6N4Zb8EPA7uYf1Nt5R3g&usqp=CAc',
            'title': 'ENCRESPANDO A JUBA CREME DE PENTEAR - 500ML - WIDI CARE',
            'description': 'A linha de tratamento JUBA foi especialmente desenvolvida para as necessidades dos cabelos cacheados (3A, 3B e 3C) e crespos (4A, 4B e 4C), proporcionando brilho, definição e hidratação aos fios.',
            'value': 54.95
        },
        {
            'id': '789',
            'image': 'https://cdn.awsli.com.br/800x800/82/82188/produto/21635804/bbae7c50ff.jpg',
            'title': 'SUPER COMBO COMPLETO ENCRESPANDO A JUBA - WIDI CARE',
            'description': 'Esse COMBO contém: Juba Co-wash - 500ml - Widi Care Encrespando a JUBA Creme de Pentear - 500ml - Widi Care Juba Mousse Criador de Cachos - 200ml - Widi Care Máscara Hidro-Nutritiva JUBA 500g - Widi Care Higienizando a JUBA Shampoo 500ml - Widi Care Modelando a JUBA Geleia Seladora 300g - Widi Care Revitalizando a JUBA Bruma Hidratante 300ml - Widi Care',
            'value': 345.15
        },
        {
            'id': '1012',
            'image': 'https://cdn.awsli.com.br/600x700/2510/2510499/produto/184520851/d5acf303dc.jpg',
            'title': 'COMBO ETNIK BRASIL - RECONSTRUÇÃO - WIDI CARE',
            'description': 'Este combo é composto por: Etnik Brasil - Shampoo Hidratante 300ml - Widi Care Etnik Brasil - Condicionador Hidratante 300ml - Widi Care Etnik Brasil - Máscara Reconstrutora 300g - Widi Care',
            'value': 100.45
        },
    ]
}

export const getCart = async () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

export const getSubTotal = async () => {
    const cart = await getCart();
    let subtotal = 0;

    cart.map(
        (product) => {
            console.log(product.qtd )
            console.log(product.value )
            console.log(subtotal)
           subtotal = subtotal + (product.qtd * product.value)            
        }
    );

    return subtotal;
}

export const saveProductInCart = async (productId, value) => {

    const cart = await getCart();
    let selectedProduct = {
        id: productId,
        qtd: 1,
        value: value
    };
    let newProd = 'S';

    cart.map(
        (product) => {
            if (product.id == productId) {
                newProd = 'N';
                product.qtd += 1;
                console.log('repetido')
            }
        }
    );
    if (newProd == 'S') {
        cart.push(selectedProduct);
    }
    console.log(cart)

    localStorage.setItem('cart', JSON.stringify(cart));

    return cart;
}

export const deleteProductFromCartType = async (productId) => {

    let cart = await getCart();

    cart.map(
        (product) => {
            if (product.id === productId) {
                product.qtd -= 1;
            }
        }
    );

    cart = cart.filter((prod) => prod.qtd > 0)

    localStorage.setItem('cart', JSON.stringify(cart));

    return cart;
}
