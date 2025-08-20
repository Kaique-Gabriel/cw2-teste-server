export default function handler (req, res) {
    const nome = red.query.nome || "mundo";
    res.status(200).json ({messagem: 'Olá, ${nome}!'});
}
