import PropTypes from 'prop-types';

const FormatoCards = ({photo,superHost,type,rating,title,beds}) => {
    
    return (

      <div className='C-padre'>
            <div className="card-body" >
                    <img src={photo} className="card-img-top" alt="img de casa" />
                <div className="card card-group">
                    <section className="container cont-details">
                        {superHost ? <label className="card-text host">SUPER HOST</label> : null} 
                        <label className="card-text">{type}</label>{beds && superHost ? <label className="card-text">.{beds} beds</label> : null}
                        <div className="rating">
                        <span className=" star material-symbols-outlined">star</span>
                        <label className="card-text">{rating}</label>
                        </div>
                    </section>
                    <div className="card-title">{title}</div>
                </div>
            </div>
      </div>
    );
  };
// En este código,  importo PropTypes y luego defino las validaciones para cada prop en el componente FormatoCards utilizando FormatoCards.propTypes.
// Con estas validaciones, me aseguro de que las props esperadas en el componente FormatoCards sean proporcionadas y que tengan el tipo correcto. 
// Si alguna prop falta o tiene el tipo incorrecto, ESLint me mostrará un mensaje de advertencia en tiempo de desarrollo.
  FormatoCards.propTypes = {
    photo: PropTypes.string.isRequired,
    superHost: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    beds: PropTypes.number,
  }
  
  
  export default FormatoCards;

/* 

PropTypes.string.isRequired: Esto asegura que la prop sea de tipo string y que sea requerida, es decir, el componente generará un error si la prop no se proporciona.

PropTypes.bool.isRequired: Esto asegura que la prop sea de tipo boolean (true o false) y que sea requerida.

PropTypes.number.isRequired: Esto asegura que la prop sea de tipo número y que sea requerida.

PropTypes.number: Esto asegura que la prop sea de tipo número, pero no es requerida. Si no se proporciona, no generará errores.
  
*/



  