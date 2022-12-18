import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
import styles from './Sinopse.module.css'
import NaoEncontrada from 'pages/NaoEncontrada'
import { useEffect, useState } from 'react'
import Botao from 'components/Botao'

export default function Sinopse() {
  const [video, setVideo] = useState()
  const parametros = useParams()

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/rodrigues14/cinetag-api/videos?id=${parametros.id}`)
    .then(resposta => resposta.json())
    .then(dados => {
      setVideo(...dados)
    })
  }, [])

  if (!video) {
    return <NaoEncontrada />
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Sinopse</h1>
      </Titulo>
      <section className={styles.container}>
        <div>
          <p>
            {video.sinopse}
          </p>
          <img src={video.capa} />
        </div>
        <Botao alt={video.titulo} href={video.link}>
          Ver trailer
        </Botao>
      </section>
    </>
  )
}