const rotas = new Map([["privacidade", "/privacidade/"], ["termos", "/termos/"], ["termos-personal", "/termos-personal/"], ["excluir-conta", "/excluir-conta/"], ["suporte", "/suporte/"]]);
const destino = rotas.get(location.hash.slice(1));
if (destino) location.replace(destino);
