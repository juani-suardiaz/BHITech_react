function NovedadItem (props) {

    return (

        <article className="cajaNovedad">
            <div className="tituloNovedad">{props.titulo}</div>
            <div className="subtituloNovedad">{props.subtitulo}</div>
            <div className="textoNovedad" dangerouslySetInnerHTML={{__html: props.contenido}} />
            <div className="fechaNovedad">{props.fecha}</div>
        </article>

    )

}

export default NovedadItem;