export default function handler (req, res) {
    const nome = req.query.nome || "mundo";
    res.status(200).json ({messagem: 'Olá, ${nome}!'});
}
