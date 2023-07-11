import multiparty from 'multiparty'
import { resolve } from 'styled-jsx/css';

export default async function HandleUpload(req, res) {
    const form = new multiparty.Form();
    const {fields, files} = await new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
            if(err) reject(err);
            resolve({fields, files});
        });
    })
    console.log(files.file.length);
    console.log(fields);
    res.json("OK")
}

// Configuration de bodyParser pour empecher de transformer la requete en json
export const config = {
    api: {bodyParser: false},
}