import homeImg from '../../Assets/Images/undraw_complete_design_re_h75h.svg';
import { Form } from '../../Components/Form';

import './styles.scss';

export const Home = () => {
  return (
    <section>
      <div className="container-home">
        <div className="container-text">
          <h1>
            <span>Inscreva-se agora</span>
            <br /> na Newslatter!
          </h1>
          <p>Fique por dentro de todas as nossas atualizações.</p>
        </div>
        <div className="container-img">
          <img src={homeImg} alt="figura de uma mulher" />
        </div>
      </div>
      <Form />
    </section>
  );
};
