import Button from "../styles/Button";
import Container from "../styles/Container";

export default function About() {
    return (
        <Container>
            <p>Aplicacion del juego Tic-Tac-Toe o tres en linea desarrollado en React. Este programa ha sido realizado como proposito de desarrollo de práctica y desarrollo personal</p>
            <span>GITHUB: </span><a href="https://github.com/raybuken/tic-tac-toe">Pulsa aquí</a>
            <br />
            <br />
            <Button onClick={() => window.location.reload()}>Volver al inicio</Button>
        </Container>
    )
}