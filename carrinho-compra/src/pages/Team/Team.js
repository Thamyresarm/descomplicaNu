function Team() {
    return (
        <>
            <div className="container text-center px-5">
                <h2 className="display-4">Nosso Time</h2>
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5"><img className="img-fluid rounded-circle" src="img/mulheres/mulher1.jpg" alt="..." />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <h3>Jaqueline Vianna</h3>
                            <p>Negra de 30 anos e dos cabelos crespos, sei o quanto é difícil manter o cabelo saudável e
                                fazer todo o restante que o universo nos exige.</p>
                            <p>Porém com o tempo aprendi essa mágica e estou aqui para compartilhar com vocês.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img className="img-fluid rounded-circle" src="img/mulheres/mulher2.jpg" alt="..." />
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h3>Larissa Machado</h3>
                            <p>Branca de 25 anos e loira não natural, gosto de me manter loira e sabemos o quanto a química
                                destrói os nossos fios.</p>
                            <p>Estou aqui para passar todos os conhecimento que tenho e buscar cada vez mais também.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Team;