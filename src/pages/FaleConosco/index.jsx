import styled from "styled-components"

const FaleConoscoContainer = styled.section`
    width: 100vw;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
`

const FormularioContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`

const InputsContainer = styled.div`
    display: flex;
    
    flex-direction: column;
`

const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Titulo = styled.p`
    font-weight: 700;
    font-size: 20px;
`

const InputText = styled.input`
    width: calc(100% - 50px);
    max-width: 549px;
    background-color: #F5F5F5;
    color: #878787;
    border-radius: 8px;
    padding: 12px;
    font-size: 12px;
    border: none;
    margin-bottom: 5px;
`

const InputsCheckboxContainer = styled.div`
    max-width: 494px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    label {
        margin-right: 30px;
    }
`

const InputTextArea = styled.input`
    max-width: 549px;
    background-color: #F5F5F5;
    color: #878787;
    padding: 15px;
    height: 176px;
    border-radius: 8px;
    border: none;
`

function FaleConosco(){
    return (
        <FaleConoscoContainer>
            <FormularioContainer>
                <InputsContainer>
                    <Titulo>Fale conosco</Titulo>
                    
                    <div>
                        <InputText type="text" placeholder="Seu nome"/>
                        <InputText type="text" placeholder="Seu e-mail para contato"/>
                        <InputText type="text" placeholder="Seu telefone com DDD"/>
                        <InputText type="text" placeholder="Seu CPF"/>
                    </div>
                    
                    <p>Categoria:</p>
                    <InputsCheckboxContainer>
                        <div><label><input type="checkbox" /> Dúvidas</label></div>
                        <div><label><input type="checkbox" /> Problema com pedido</label></div>
                        <div><label><input type="checkbox" /> Reclamação</label></div>
                        <div><label><input type="checkbox" /> Sugestão</label></div>
                        <div><label><input type="checkbox" /> Elogios</label></div>
                        <div><label><input type="checkbox" /> Outro</label></div>
                    </InputsCheckboxContainer>
                    
                    <InputTextArea type="textarea" placeholder="Sua mensagem..." />
                    
                </InputsContainer>
                <div>
                    <img src="/assets/fale-conosco.png" />
                </div>
            </FormularioContainer>
            <FAQContainer>
                <Titulo>Ajuda - FAQ</Titulo>
                
                <p>QUEM SOMOS
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

                <p>Por que existimos?</p>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>

                <p>O que a gente faz?</p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            
                <p>QUEM SOMOS
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

                <p>Por que existimos?</p>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>

                <p>O que a gente faz?</p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                
            </FAQContainer>
        </FaleConoscoContainer>
    )
}

export default FaleConosco