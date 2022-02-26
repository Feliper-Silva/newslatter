import './styles.scss';

export const Form = () => {
  return (
    <form>
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="Email" />
      <button type="button">Enviar </button>
    </form>
  );
};
