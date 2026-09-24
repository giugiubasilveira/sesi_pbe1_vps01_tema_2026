const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const arquivo = "dados.json";

function lerDados() {
    const dados = fs.readFileSync(arquivo, "utf8");
    return JSON.parse(dados);
}

function salvarDados(dados) {
    fs.writeFileSync(arquivo, JSON.stringify(dados, null, 4));
}

// GET - consultar todos os equipamentos
app.get("/equipamentos", (req, res) => {
    const dados = lerDados();

    res.json(dados);
});

// GET - consultar equipamento por ID
app.get("/equipamentos/:id", (req, res) => {
    const dados = lerDados();

    const id = Number(req.params.id);

    const equipamento = dados.find(item => item.id === id);

    if (!equipamento) {
        return res.status(404).json({
            mensagem: "Equipamento não encontrado"
        });
    }

    res.json(equipamento);
});

// POST - cadastrar equipamento
app.post("/equipamentos", (req, res) => {
    const dados = lerDados();

    const novoEquipamento = {
        id: dados.length > 0 ? Math.max(...dados.map(item => item.id)) + 1 : 1,
        local: req.body.local,
        equipamento: req.body.equipamento,
        consumo_kwh: Number(req.body.consumo_kwh),
        mes_referencia: req.body.mes_referencia,
        status: req.body.status
    };

    dados.push(novoEquipamento);

    salvarDados(dados);

    res.status(201).json(novoEquipamento);
});

// PUT - atualizar equipamento
app.put("/equipamentos/:id", (req, res) => {
    const dados = lerDados();

    const id = Number(req.params.id);

    const indice = dados.findIndex(item => item.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Equipamento não encontrado"
        });
    }

    dados[indice] = {
        id: id,
        local: req.body.local,
        equipamento: req.body.equipamento,
        consumo_kwh: Number(req.body.consumo_kwh),
        mes_referencia: req.body.mes_referencia,
        status: req.body.status
    };

    salvarDados(dados);

    res.json(dados[indice]);
});

// DELETE - excluir equipamento
app.delete("/equipamentos/:id", (req, res) => {
    const dados = lerDados();

    const id = Number(req.params.id);

    const novoDados = dados.filter(item => item.id !== id);

    if (novoDados.length === dados.length) {
        return res.status(404).json({
            mensagem: "Equipamento não encontrado"
        });
    }

    salvarDados(novoDados);

    res.json({
        mensagem: "Equipamento excluído com sucesso"
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});