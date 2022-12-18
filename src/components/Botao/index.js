import styles from './Botao.module.css'

export default function Botao({ href, alt, children}) {
  return (
    <a 
      className={styles.botao}
      target="_blank" 
      href={href} 
      alt={alt}
    >
      {children}
    </a>
  )
}