

        const botao = document.getElementById('busca');


        // Adiciona o evento de clique ao botão
        botao.addEventListener('click', () => {

            const inputNome = document.getElementById('nome');
            const nome = inputNome.value;
    
            fetch(`https://api.agify.io?name=${nome}`)
                .then(response => response.json())
                .then(data => {
                console.log(data)

                document.querySelector('.nome').textContent = data.name;
                document.getElementById('idade').textContent = data.age;

            })
            .catch(error => console.error("Erro ao consultar a API:", error));

        });

