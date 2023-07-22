import Carousel from "../../components/Carousel/Carousel";

function Home() {
    return (
        <>
            <Carousel />
            <div className="container-fluid bg-light text-center p-2">
                <h2 class="display-4">Bem vinda ao Hair Style</h2>
                <p>Procedimentos químicos, sol, vento e poluição são os grandes vilões dos fios. Por isso, adotar uma rotina de
                    cuidados com o cabelo, seja ele oleoso, misto ou seco, é essencial para manter as madeixas saudáveis,
                    brilhosas e bonitas, não é mesmo? </p>
                <p>Além de lavá-las com um xampu específico e selar os fios com condicionador, existem alguns cuidados extras
                    que você pode adotar no dia a dia para ajudar no crescimento dos fios. Isso porque os cabelos longos nunca
                    saem de moda. Eles oferecem uma grande versatilidade de penteados, dando um aspecto descolado ao visual.</p>
                <p>Estamos aqui para te ajudar!!!</p>
                <p> Aqui temos algumas dicas e produtos para manter uma rotina de cuidados com o cabelo e deixá-lo sempre
                    lindo e hidratado.</p>
                <p>Confira!</p>
            </div>
        </>
    );
}

export default Home;