const coHereUrl = 'https://api.cohere.ai/generate';
const token = process.env.REACT_APP_COHERE_TOKEN;
const basePrompt = "Buscar un emoji para cada palabra clave de estas frases:\n\n-\"Se me quitan las ganas😢, de verdad \"\n-\"Se me quitan las ganas, de verdad\"\n--\n-\"Vaya mierda de día hoy\"\n-\"Vaya mierda 💩 de día hoy \"\n--\n-\"Me GUSTA el sushi con amigos\"\n-\"Me GUSTA el sushi 🍣 con amigos\"\n--\n-\"Soy un experto en Linux.\"\n-\"Soy un experto en Linux 🐧\"\n--\n-\"El mejor RECURSO para encontrar tu FUENTE para PROGRAMAR.\"\n-\"El mejor RECURSO 🔧 para encontrar tu FUENTE 🔤 para PROGRAMAR🤖.\"\n--\n-\"Amo a mi jerbo!.\"\n-\"Amo a mi jerbo 😻\"\n--\n-\"Los cacahuetes me encantan!\"\n-\"Los cacahuetes 🥜 me encantan\"\n--\n-\"Al fin me llegó mi Xbox! no puedo más de la felicidad!\"\n-\"Al fin 🎮 mi Xbox! no puedo más de la felicidad!\"\n--\n-\"Me fui a visitar a mis abuelos.\"\n-\"Me fui a visitar 🌹 mis abuelos\"\n--\n-\"El instagram genera adicción así como otras redes sociales\"\n-\"El instagram 📱 genera adicción, así como otras redes sociales 🐦\"\n--";
const baseDataRaw = {
    "model": "command-xlarge-nightly",
    "max_tokens": 74,
    "temperature": 0.7,
    "k": 0,
    "p": 0.75,
    "frequency_penalty": 0.2,
    "presence_penalty": 0.22,
    "stop_sequences": [],
    "return_likelihoods": "NONE"
};

const addEmojis = (sentence) => {
    const dataRaw = { ...baseDataRaw, prompt: `${basePrompt}\n-"${sentence}"\n-` };
    return fetch(coHereUrl, {
        method: 'POST',
        headers: {
            'Authorization': `BEARER ${token}`,
            'Content-Type': 'application/json',
            'Cohere-Version': '2022-12-06'
        },
        body: JSON.stringify(dataRaw)
    }).then((data) => data.json());
};

const iaService = { addEmojis };

export default iaService;