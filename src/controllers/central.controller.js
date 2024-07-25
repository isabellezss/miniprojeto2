import { centrais } from '../database/centralDatabase.js';
import { Central } from '../models/central.models.js';

export const getCentral = (req, res) => {
    res.status(200).send(centrais);
}

export const createCentral = (req, res) => {
    const newCentral = req.body;

    const formattedData = new Central(
        newCentral.name,
        newCentral.endereco,
        newCentral.telefone,
    );

    centrais.push(formattedData);

    res.status(201).send(`A central ${formattedData.name} foi criada com sucesso!`);
}
