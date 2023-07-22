function About() {
    return (
            <div className="container text-center px-5"> 
                       <h2 className="display-4">Quem Somos</h2>
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img className="img-fluid rounded-circle" src="img/mulheres/quemsomos.jpg" alt="..." />
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h3>Mulheres...</h3>
                            <p>Somos mulheres como você, que precisa trabalhar, cuidar da casa e ainda precisa cuidar de si
                                mesma.</p>
                            <p>Por isso que criamos esse site, nosso objetivo vai alem de vendas de produtos, queremos
                                ajudar a cada uma identificando a necessidade específica dos seus fios e assim lhe sugerir o
                                melhor cronograma capilar. </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default About;