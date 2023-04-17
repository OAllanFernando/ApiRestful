

        const form = document.querySelector("form");

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const repositorio = document.querySelector("#repositorio").value;
            const dataInicial = document.querySelector("#dataInicial").value;
            const dataFinal = document.querySelector("#dataFinal").value;
            console.log(repositorio + " " + dataInicial + " " + dataFinal);
            buscarCommits(repositorio, dataInicial, dataFinal);

        });

        var pegaLink = "";
        function buscarCommits(repositorio, dataInicial, dataFinal) {
            const url = `https://api.github.com/repos/${repositorio}/commits?since=${dataInicial}&until=${dataFinal}`;
            fetch(url).
                then(response => response.json()).
                then(commits => {
                    //console.log(commits);
                    contarCommits(commits);

                });



        }


        // forks

        function buscaFork() {
            const url = `https://api.github.com/repos/${nome}/${nomeDoRepositorio}/forks`;



            fetch(url).
                then(response => response.json()).
                then(commits => {

                    const fo = document.getElementById("for");
                    fo.innerHTML = commits.length;




                });
        }

        // estrelas

        function buscaEstrela() {
            const url = `https://api.github.com/repos/${nome}/${nomeDoRepositorio}/stargazers`;



            fetch(url).
                then(response => response.json()).
                then(commits => {

                    const fo = document.getElementById("star");
                    fo.innerHTML = commits.length;




                });
        }



        function defineForks(commits) {
            let fork = {};
            commits.forEach(element => {

            })
        }





        // pega datas
        const dataInicial = document.querySelector("#dataInicial").value;
        const dataFinal = document.querySelector("#dataFinal").value;

        // calcula percentual
        function percentual() {
            var tamanho = this.datas.length - 1;
            const primeiraData = this.datas[0];
            const ultimaData = this.datas[tamanho];
            console.log(ultimaData);

        }


        // salva o nome do autor do repositório para salvar no banco
        var nome = "";
        var salvaLink = "";
        var nomeDoRepositorio = "";
        function pegaDados() {
            // pega repositorio
            const repositorio = document.querySelector("#repositorio").value;
            var repositorioQuebrado = repositorio.split("/");

            this.salvaLink = `https://www.github.com/${repositorio}`;

            // pega nome 
            this.nome = repositorioQuebrado[0];
            // pega nome repositorio
            this.nomeDoRepositorio = repositorioQuebrado[1];
            //console.log(nome);


        }

        // pega quantidade de commits
        var totalCommit = 0;

        // pega datas de commits
        var datas = [];

        function contarCommits(commits) {
            const commitsPorDia = {};
            var x = 0;
            commits.forEach(element => {
                const dataCommit = element.commit.author.date.substr(0, 10);
                const message = element.commit.message;



                if (commitsPorDia[dataCommit]) {
                    commitsPorDia[dataCommit].quantidade++;
                    commitsPorDia[dataCommit].mensagens.push({ mensagem: message });
                    this.totalCommit++;
                    datas[x] = commitsPorDia[dataCommit].data;
                    x++;

                } else {
                    this.totalCommit++;
                    commitsPorDia[dataCommit] = { quantidade: 1, data: dataCommit, mensagens: [{ mensagem: message }] };
                    datas[x] = commitsPorDia[dataCommit].data;
                    x++;

                }
            });
            console.log(commitsPorDia);
            const commitsPorDiaArray = Object.keys(commitsPorDia).map(dataCommit => {
                return {
                    data: dataCommit, quantidade: commitsPorDia[dataCommit].quantidade, mensagens: commitsPorDia[dataCommit].mensagens
                };
            });
            console.log("passeiaqui")
            //console.log(datas[0]);
            mostrarTela(commitsPorDiaArray)



        }


        // gera o resumo e define em uma cariavel
        var resumao = "";
        function resumo(commits) {

            commits.forEach(element => {


                this.resumao = resumao + " - Dia " + element.data + " foram realizados " + element.quantidade + " commits. ";


            });

        }








        function mostrarTela(commits) {
            document.querySelector("#dados").style.display = "flex";
            document.querySelector("#msg").style.display = "flex";
            document.querySelector("#msg1").style.display = "flex";
            document.querySelector("#msg2").style.display = "flex";

            const dados = document.querySelector("#dados");

            const tabela = document.createElement("table");
            const cabecalho = document.createElement("thead");
            const data = document.createElement("th");
            const mensagem = document.createElement("th");
            const numero = document.createElement("th");
            const corpo = document.createElement("tbody");


            tabela.appendChild(cabecalho);
            cabecalho.appendChild(data).innerText = 'Data';
            cabecalho.appendChild(numero).innerText = 'Quantidade';
            cabecalho.appendChild(mensagem).innerText = 'Mensagens dos commits';
            tabela.appendChild(corpo);

            console.log(this.datas[0]);
            console.log(this.datas[1]);

            var conta = 1;
            commits.forEach(element => {
                let trow = corpo.insertRow();


                // data 
                const data_coluna = trow.insertCell();
                data_coluna.innerText = element.data;

                //quantidade
                const quantidade_coluna = trow.insertCell();
                quantidade_coluna.innerText = element.quantidade;


                // mensagem

                var contaConta = 0;
                const mensagem_coluna = trow.insertCell();

                element.mensagens.forEach(mensagem => {

                    const listItem = document.createElement("li");
                    mensagem_coluna.appendChild(listItem);
                    listItem.innerText = conta + "." + contaConta + " - " + mensagem.mensagem;

                    contaConta++;

                });
                conta++;







            });

            dados.innerHTML = "";
            dados.appendChild(tabela);


            pegaDados();
            resumo(commits);
            buscaFork();
            buscaEstrela();
            const resumor = document.getElementById("resumo");
            resumor.innerHTML = resumao;
            const linkk = document.getElementById("lin");
            const use = document.getElementById("user");
            linkk.innerHTML = salvaLink;
            use.innerHTML = nome;



        }



        function salvaTudo() {
            const url = "http://localhost:8080/commits"
            const options = {
                method: 'POST',
                body: JSON.stringify({
                    nome: nome,
                    link: salvaLink,
                    commits: totalCommit,
                    mensagem: resumao
                }),
                Headers: {
                    'content-type': 'application/json'
                }
            }




            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                }).catch(error => {
                    console.log("error")
                });
        }


        function CommitSalvos() {
            window.location.replace("./salvos.html");
        }



        function index() {
            window.location.replace("./index.html");
        }