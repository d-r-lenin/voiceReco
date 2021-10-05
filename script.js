const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const r = new speechRecognition();

const utt = new window.SpeechSynthesisUtterance();
s = window.speechSynthesis;
s.getVoices()

r.continuous = true;
r.interimResults = true;

r.onresult = result =>{
    console.log(result);
    if (result.results[result.resultIndex][0].transcript == 'how are you'){
        speakOut('fine. and you');
        console.log('fine');
        return
    }
    if (result.results[result.resultIndex][0].transcript == 'hello') {
        speakOut('hello dear, how are you');
        console.log('dear');
        return
    }
    if (result.results[result.resultIndex][0].transcript == 'fine') {
        speakOut('yes you are fine. you little peace of shit.');
        console.log('fine');
        return
    }
    console.log(result.results[result.resultIndex][0].transcript)
    speakOut(result.results[result.resultIndex][0].transcript);
}

r.onerror = e =>{
    speakOut("error occoured. " + e.message + " "+ e.error +". please try again later.")
}

r.onstart = () => {
    console.log("listing...");
}

r.onend = ()=>{
    console.log('stoped');
}


function listen() {
    r.start();
}

const speakOut = message =>{
    utt.text = message;
    utt.rate = 1;
    utt.pitch = 1;
    utt.volume = 1;

    window.speechSynthesis.speak(utt);
}

setTimeout(() => {
    const voices = s.getVoices();
    const voice = voices.filter(a => {
        if (a.name === "Microsoft Zira - English (United States)")
            return true
    })[0];
    utt.voice = voice;
}, 4000);
