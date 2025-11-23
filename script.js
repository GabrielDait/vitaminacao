const produtos = [
  { ean: "7898569765071", nome: "VITAMINA D3 7.000 UI C/30 CAP", fabricante: "ALTHAIA", premiacao: 5 },
  { ean: "7898569765149", nome: "VITAMINA D3 10.000 UI C/ 30 CAP", fabricante: "ALTHAIA", premiacao: 5 },
  { ean: "7898687734096", nome: "VITAMINA D3 15.000UI C/ 10 CAP", fabricante: "ALTHAIA", premiacao: 5 },
  { ean: "7898569765828", nome: "VITAMINA D3 50.000 UI C/10 CAP", fabricante: "ALTHAIA", premiacao: 5 },
  { ean: "7897947604803", nome : "REDUBIO QUITOSANA CIMED C/ 60 CAPS", fabricante: "CIMED", premiacao: 5},
  { ean: "7897947617605", nome : "SUPLEMENTO LAVITAN ZMA C/ 30 CAPS", fabricante: "CIMED", premiacao: 5},
  { ean: "7897947617599", nome : "SUPLEMENTO LAVITAN ZMA C/ 30 CAPS", fabricante: "CIMED", premiacao: 5},
  { ean: "7897947600782", nome : "LAVITAN LUTEINA CAPS FR C/ 60", fabricante: "CIMED", premiacao: 5},
  { ean: "7897947620261", nome : "LAVITAN DI-MAGNESIO MALATO FR X 60CPRV", fabricante: "CIMED", premiacao: 5},
  { ean: "7897947620582", nome : "SUPLEMENTO LAVITAN VIT E C/30CP", fabricante: "CIMED", premiacao: 5},
  { ean: "7897947600294", nome: "LAVITAN IMUNIDADE CDZCE C/30 CP", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947600928", nome: "LAVITAN VIT 50+ COMP REV FR 60", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947601024", nome: "SUPLEMENTO LAVITAN CALCIO + VIT D C/60 COMP", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947601154", nome: "LAVITAN MELATONINA 0.21MG CP PT 150 MOR", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947601178", nome: "LAVITAN MELATONINA 0,21MG CP PT 150 MAR", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947601420", nome: "LAVITAN 50+ MULHER COMP REV X 60", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947605053", nome: "LAVITAN KIDS CIMED C/60 CP MASTIGAVEIS", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947606913", nome: "SUPLEMENTO LAVITAN OMEGA C/ 60 CAPS", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947607705", nome: "LAVITAN VIT CALCIO + D3 COMP FR C/60", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947607750", nome: "OMEGA 3 LAVITAN 1000 MG C/ 120 CAPS", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947612358", nome: "SUPLEMENTO LAVITAN MEMORIA C/60 CP REV", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947614338", nome: "LAVITAN KIDS SABOR TUTTI FRUTTI", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947615090", nome: "LAVITAN CRANBERRY 30 CP", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947615106", nome: "SUP LAVITAN COLAGENO CIMED TIPO II C/ 30 CAP", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947615441", nome: "SUP PRIMULA LAVITAN FEMME C/ 60 CAPS", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947616172", nome: "SUPLEMENTO LAVITAN CALCIO MDK C/30 CPR", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947616509", nome: "LAVITAN SUPER FORMULA HOMEM 60 CAPS", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947617315", nome: "LAVITAN VIT 50+ MULHER COMP REV FR 60", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947619548", nome: "LAVITAN OMEGA COMPLEX CAP GEL PT X 30 SF", fabricante: "CIMED", premiacao: 5 },
  { ean: "7897947618008", nome: "KIT LAVITAN FAMILHAO AZ ORI+AZ MULH+CAB", fabricante: "CIMED", premiacao: 10 },
  { ean: "7897947618015", nome: "KIT LAVITAN FAMILHAO AZ ORI+AZ MULH+MELA", fabricante: "CIMED", premiacao: 10 },
  { ean: "7897947607996", nome: "SUPLEMENTO LAVITAN CABELOS E UNHAS 30 CAPS", fabricante: "CIMED", premiacao: 5 },
  { ean: "7893454141831", nome: "OSSOTRAT PLUS FR C/60 CPR REV", fabricante: "DELTA", premiacao: 5 },
  { ean: "7893454714516", nome: "SUPLEMENTO OSSOTRAT D C/60 CP", fabricante: "DELTA", premiacao: 5 },
  { ean: "7899095203792", nome: "MIRACALCIO CITRATO MALATO 30CPD GEO", fabricante: "GEOLAB", premiacao: 5 },
  { ean: "7896331707045", nome: "CALCIODEX MDK 1.250MG 60CPD KLH", fabricante: "KLEY HERTZ", premiacao: 5 },
  { ean: "7898593052437", nome: "VITAMINA K2 MENAQUINONA 60CPS", fabricante: "MAXINUTRI", premiacao: 5},
  { ean: "7898593052765", nome: "CONDRIGEN HA C/30 MAXINUTRI", fabricante: "MAXINUTRI", premiacao: 5 },
  { ean: "7898593053366", nome: "VITAMINA B12 MAXINUTRI C/ 60 CAP", fabricante: "MAXINUTRI", premiacao: 5 },
  { ean: "7898593053397", nome: "CURCUMA GOLDEN 60CAPS-MAXINUTRI", fabricante: "MAXINUTRI", premiacao: 5 },
  { ean: "7898593053571", nome: "CALCIUM MAXX +D3 C/60CP", fabricante: "MAXINUTRI", premiacao: 5 },
  { ean: "7898927980375", nome: "SUPLEMENTO MAXINUTRI NUTRICAP C/ 60 CAP", fabricante: "MAXINUTRI", premiacao: 5 },
  { ean: "7898593052802", nome: "CONDRIGEN PACK L3 P2 3X30CAP MXT", fabricante: "MAXINUTRI", premiacao: 10 },
  { ean: "7898593052406", nome: "NUTRICAPS MULHER C/ 60 CAP", fabricante: "MAXINUTRI", premiacao: 5 },
  { ean: "7896023727795", nome: "POLIVITAMINICO MULHER MULTI NUTRI C/ 60 CP", fabricante: "SUPRACORP", premiacao: 5 },
  { ean: "7896023701207", nome: "SUPRACORP CABELOS E UNHAS C/ 60 CAP", fabricante: "SUPRACORP", premiacao: 5 },
  { ean: "7896023727818", nome: "POLIVITAMINICO HOMEM MULTI NUTRI C/60 CP", fabricante: "SUPRACORP", premiacao: 5 },
  { ean: "7896023727825", nome: "POLIVITAMINICO 50+ MULTI NUTRI C/60 CP", fabricante: "SUPRACORP", premiacao: 5 },
  { ean: "7896023708671", nome: "SUPRACORP CLOR DE MAGNESIO PA 60CPD CTR", fabricante: "SUPRACORP", premiacao: 5 },
  { ean: "7896023703249", nome: "SUPRACORP COLAG ULTRA TIPO II 30CAP CTR", fabricante: "SUPRACORP", premiacao: 10 },
  { ean: "7896023719165", nome: "KIT SUPRACORP OMEGA 3 1000MG 300CAP CTR", fabricante: "SUPRACORP", premiacao: 15 }
];

const searchInput = document.getElementById('searchInput');

// Variável para armazenar o Laboratório ativo atualmente (inicia com o primeiro do HTML)
let activeLab = 'ALTHAIA'; 

// Função para abrir a aba correspondente
window.openLab = function(evt, labId) {
    var i, tabcontent, tablinks;

    // 1. Determina o nome do Laboratório para filtragem (trata o caso do KLEY HERTZ)
    activeLab = (labId === 'KLEY-HERTZ') ? 'KLEY HERTZ' : labId;
    
    // 2. Esconde todo o conteúdo das abas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('active');
    }

    // 3. Remove a classe 'active' de todos os botões
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }

    // 4. Mostra o conteúdo da aba atual e adiciona a classe 'active' ao botão clicado
    document.getElementById(labId).classList.add('active');
    evt.currentTarget.classList.add('active');
    
    // 5. Renderiza os produtos na nova aba ativa
    renderProducts();
}

// Função de renderização que agora filtra por Laboratório e pela busca
function renderProducts() {
    const filtro = searchInput.value.toLowerCase();
    
    // 1. Encontra o ID do tbody que precisa ser preenchido (usa o ID do HTML)
    const tableId = `productTable-${activeLab.replace(' ', '-')}`; 
    const productTable = document.getElementById(tableId);

    // Limpa todas as tabelas, exceto a ativa (para evitar dados duplicados ao alternar)
    document.querySelectorAll('tbody[id^="productTable-"]').forEach(tbody => {
        if (tbody.id !== tableId) {
            tbody.innerHTML = '';
        }
    });

    // Se a tabela ativa não for encontrada, interrompe
    if (!productTable) return; 

    // 2. Filtra primeiro pelo Laboratório (Fabricante) ativo
    const produtosDoLaboratorio = produtos.filter(p => p.fabricante === activeLab);
    
    // 3. Filtra os resultados da busca dentro daquele Laboratório
    const filtrados = produtosDoLaboratorio.filter(p => {
        const matchNome = p.nome.toLowerCase().includes(filtro);
        const matchEAN = p.ean.includes(filtro);
        // Busca só precisa checar Nome e EAN, pois já filtramos por Fabricante
        return matchNome || matchEAN;
    });

    // 4. Popula o tbody específico
    productTable.innerHTML = '';
    filtrados.forEach(prod => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${prod.ean}</td>
          <td>${prod.nome}</td>
          <td>${prod.fabricante}</td>
          <td>R$ ${prod.premiacao.toFixed(2)}</td>
        `;
        productTable.appendChild(row);
    });
}

// Sua função e eventos de guia e modo noturno
function mostrarGuia() {
    const guia = document.getElementById("guia-container");
    // O seu botão 'Ver Guia de Venda' esconde/mostra a div do guia
    guia.style.display = guia.style.display === "none" || guia.style.display === "" ? "block" : "none";
}

searchInput.addEventListener('input', renderProducts);

document.getElementById("toggleDarkMode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Garante que os produtos do primeiro Laboratório sejam carregados ao iniciar
renderProducts();
