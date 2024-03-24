

export async function GET(request, context) {
    const word = context.params.word;
    const lang = context.params.lang;
    console.log(lang);
    
    if (lang != 'ru-ru' && lang != 'en-en') 
        return new Response('Incorrect language');

    const res: {head: {}, def: [object]} = await fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${process.env.YANDEXAPI}&lang=${lang}&text=${word}`)
        .then(r => {return r.json()});

    return new Response((res.def.length > 0).toString());
}
