import { Container, DivCount } from "./style"

type TitleProps = {
    name: string
    number: number
}

const Title = ({name, number}: TitleProps) => {
    return(
        <Container>
            <h1>{name}</h1>
            <DivCount>
                <h3>{number}</h3>
            </DivCount>
        </Container>
    )
}

export default Title