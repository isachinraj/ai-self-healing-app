import styles from './Button.module.css';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, onClick, type = 'button' }: Props) => (
  <button className={styles.btn} onClick={onClick} type={type}>
    {children}
  </button>
);

export default Button;
