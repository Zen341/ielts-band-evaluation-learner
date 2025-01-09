var speaking_descriptions = {
    9: ["FC: Fluent with only very occasional repetition or self-correction.",
        "FC: Any hesitation that occurs is used only to prepare the content of the next utterance and not to find words or grammar.",
        "FC: Speech is situationally appropriate and cohesive features are fully acceptable.",
        "FC: Topic development is fully coherent and appropriately extended.",
        "LR: Total flexibility and precise use in all contexts.",
        "LR: Sustained use of accurate and idiomatic language.",
        "GA: Structures are precise and accurate at all times, apart from ‘mistakes’ characteristic of native speaker speech.",
        "P: Uses a full range of phonological features to convey precise and/or subtle meaning.",
        "P: Flexible use of features of connected speech is sustained throughout.",
        "P: Can be effortlessly understood throughout",
        "P: Accent has no effect on intelligibility."],
    8: ["FC: Fluent with only very occasional repetition or self-correction. (lower)",
        "FC: Hesitation may occasionally be used to find words or grammar, but most will be content related.",
        "FC: Topic development is coherent, appropriate and relevant.",
        "LR: Wide resource, readily and flexibly used to discuss all topics and convey precise meaning.",
        "LR: Skilful use of less common and idiomatic items despite occasional inaccuracies in word choice and collocation.",
        "LR: Effective use of paraphrase as required.",
        "GA: Wide range of structures, flexibly used",
        "GA: The majority of sentences are error free",
        "GA: Occasional inappropriacies and non-systematic errors occur. A few basic errors may persist.",
        "P: Uses a wide range of phonological features to convey precise and/or subtle meaning.",
        "P: Can sustain appropriate rhythm. Flexible use of stress and intonation across long utterances, despite occasional lapses.",
        "P: Can be easily understood throughout.",
        "P: Accent has minimal effect on intelligibility."],
    7: ["FC: Able to keep going and readily produce long turns without noticeable effort.",
        "FC: Some hesitation, repetition and/or selfcorrection may occur, often mid-sentence and indicate problems with accessing appropriate language. However, these will not affect coherence.",
        "FC: Flexible use of spoken discourse markers, connectives and cohesive features.",
        "LR: Resource flexibly used to discuss a variety of topics.",
        "LR: Some ability to use less common and idiomatic items and an awareness of style and collocation is evident though inappropriacies occur.",
        "LR: Effective use of paraphrase as required.",
        "GA: A range of structures flexibly used. Error-free sentences are frequent.",
        "GA: Both simple and complex sentences are used effectively despite some errors. A few basic errors persist.",
        "P: Displays all the positive features of band 6, and some, but not all, of the positive features of band 8."],
    6: ["FC: Able to keep going and demonstrates a willingness to produce long turns",
        "FC: Coherence may be lost at times as a result of hesitation, repetition and/or self-correction",
        "FC: Uses a range of spoken discourse markers, connectives and cohesive features though not always appropriately.",
        "LR: Resource sufficient to discuss topics at length.",
        "LR: Vocabulary use may be inappropriate but meaning is clear.",
        "LR: Generally able to paraphrase successfully.",
        "GA: Produces a mix of short and complex sentence forms and a variety of structures with limited flexibility.",
        "GA: Though errors frequently occur in complex structures, these rarely impede communication.",
        "P: Uses a range of phonological features, but control is variable.",
        "P: Chunking is generally appropriate, but rhythm may be affected by a lack of stress-timing and/or a rapid speech rate.",
        "P: Some effective use of intonation and stress, but this is not sustained.",
        "P: Individual words or phonemes may be mispronounced but this causes only occasional lack of clarity",
        "P: Can generally be understood throughout without much effort.",],
    5: ["FC: Usually able to keep going, but relies on repetition and self-correction to do so and/or on slow speech.",
        "FC: Hesitations are often associated with mid-sentence searches for fairly basic lexis and grammar.",
        "FC: Overuse of certain discourse markers, connectives and other cohesive features.",
        "FC: More complex speech usually causes disfluency but simpler language may be produced fluently.",
        "LR: Resource sufficient to discuss familiar and unfamiliar topics but there is limited flexibility.",
        "LR: Attempts paraphrase but not always with success",
        "GA: Basic sentence forms are fairly well controlled for accuracy.",
        "GA: Complex structures are attempted but these are limited in range, nearly always contain errors and may lead to the need for reformulation.",
        "P: Displays all the positive features of band 4, and some, but not all, of the positive features of band 6."],
    4: ["FC: Unable to keep going without noticeable pauses",
        "FC: Speech may be slow with frequent repetition.",
        "FC: Often self-corrects.",
        "FC: Can link simple sentences but often with repetitious use of connectives",
        "FC: Some breakdowns in coherence.",
        "LR: Resource sufficient for familiar topics but only basic meaning can be conveyed on unfamiliar topics.",
        "LR: Frequent inappropriacies and errors in word choice",
        "LR: Rarely attempts paraphrase.",
        "GA: Can produce basic sentence forms and some short utterances are error-free.",
        "GA: Subordinate clauses are rare and, overall, turns are short, structures are repetitive and errors are frequent.",
        "P: Uses some acceptable phonological features, but the range is limited.",
        "P: Produces some acceptable chunking, but there are frequent lapses in overall rhythm.",
        "P: Attempts to use intonation and stress, but control is limited.",
        "P: Individual words or phonemes are frequently mispronounced, causing lack of clarity.",
        "P: Understanding requires some effort and there may be patches of speech that cannot be understood."],
    3: ["FC: Frequent, sometimes long, pauses occur while candidate searches for words.",
        "FC: Limited ability to link simple sentences and go beyond simple responses to questions.",
        "FC: Frequently unable to convey basic message.",
        "LR: Resource limited to simple vocabulary used primarily to convey personal information.",
        "LR: Vocabulary inadequate for unfamiliar topics.",
        "GA: Basic sentence forms are attempted but grammatical errors are numerous except in apparently memorised utterances.",
        "P: Displays some features of band 2, and some, but not all, of the positive features of band 4."],
    2: ["FC: Lengthy pauses before nearly every word.",
        "FC: Isolated words may be recognisable but speech is of virtually no communicative significance.",
        "LR: Very limited resource. Utterances consist of isolated words or memorised utterances.",
        "LR: Little communication possible without the support of mime or gesture.",
        "GA: No evidence of basic sentence forms",
        "P: Uses few acceptable phonological features (possibly because sample is insufficient).",
        "P: Overall problems with delivery impair attempts at connected speech.",
        "P: Individual words and phonemes are mainly mispronounced and little meaning is conveyed.",
        "P: Often unintelligible."],
    1: ["FC: Essentially none.",
        "FC: Speech is totally incoherent.",
        "LR: No resource bar a few isolated words.",
        "LR: No communication possible.",
        "GA: No rateable language unless memorised.",
        "P: Can produce occasional individual words and phonemes that are recognisable, but no overall meaning is conveyed.",
        "P: Unintelligible"],

    // # Add more descriptions for other bands here
}

var speaking_band_categories = ["FC", "LR", "GA", "P"]

// # Descriptions for Writing Task 1
var writing_descriptions = {
    9: ["TR: The prompt is appropriately addressed and explored in depth.",
        "TR: A clear and fully developed position is presented which directly answers the question/s.",
        "TR: Ideas are relevant, fully extended and well supported.",
        "TR: Any lapses in content or support are extremely rare.",
        "TA: All the requirements of the task are fully and appropriately satisfied.",
        "TA: There may be extremely rare lapses in content.",
        "CC: The message can be followed effortlessly",
        "CC: Cohesion is used in such a way that it very rarely attracts attention.",
        "CC: Any lapses in coherence or cohesion are minimal.",
        "CC: Paragraphing is skilfully managed.",
        "LR: Full flexibility and precise use are evident within the scope of the task.",
        "LR: A wide range of vocabulary is used accurately and appropriately with very natural and sophisticated control of lexical features.",
        "LR: Minor errors in spelling and word formation are extremely rare and have minimal impact on communication.",
        "GA: A wide range of structures within the scope of the task is used with full flexibility and control.",
        "GA: Punctuation and grammar are used appropriately throughout.",
        "GA: Minor errors are extremely rare and have minimal impact on communication"],
    8: ["TR: The prompt is appropriately and sufficiently addressed.",
        "TR: A clear and well-developed position is presented in response to the question/s.",
        "TR: Ideas are relevant, well extended and supported.",
        "TR: There may be occasional omissions or lapses in content.",
        "TA: The response covers all the requirements of the task appropriately, relevantly and sufficiently.",
        "TA: Key features are skilfully selected, and clearly presented, highlighted and illustrated.",
        "TA: There may be occasional omissions or lapses in content.",
        "CC: The message can be followed with ease.",
        "CC: Information and ideas are logically sequenced, and cohesion is well managed.",
        "CC: Occasional lapses in coherence or cohesion may occur.",
        "CC: Paragraphing is used sufficiently and appropriately.",
        "LR: A wide resource is fluently and flexibly used to convey precise meanings within the scope of the task.",
        "LR: There is skilful use of uncommon and/or idiomatic items when appropriate, despite occasional inaccuracies in word choice and collocation.",
        "LR: Occasional errors in spelling and/or word formation may occur, but have minimal impact on communication.",
        "GA: A wide range of structures within the scope of the task is flexibly and accurately used.",
        "GA: The majority of sentences are error-free, and punctuation is well managed.",
        "GA: Occasional, non-systematic errors and inappropriacies occur, but have minimal impact on communication."],
    7: ["TR: The main parts of the prompt are appropriately addressed.",
        "TR: A clear and developed position is presented.",
        "TR: Main ideas are extended and supported but there may be a tendency to over-generalise or there may be a lack of focus and precision in supporting ideas/material.",
        "TA: The response covers the requirements of the task.",
        "TA: The content is relevant and accurate – there may be a few omissions or lapses. The format is appropriate.",
        "TA: Key features which are selected are covered and clearly highlighted but could be more fully or more appropriately illustrated or extended.",
        "TA: It presents a clear overview, the data are appropriately categorised, and main trends or differences are identified.",
        "CC: Information and ideas are logically organised and there is a clear progression throughout the response. A few lapses may occur.",
        "CC: A range of cohesive devices including reference and substitution is used flexibly but with some inaccuracies or some over/under use.",
        "LR: The resource is sufficient to allow some flexibility and precision.",
        "LR: There is some ability to use less common and/or idiomatic items.",
        "LR: An awareness of style and collocation is evident, though inappropriacies occur.",
        "LR: There are only a few errors in spelling and/or word formation, and they do not detract from overall clarity",
        "GA: A variety of complex structures is used with some flexibility and accuracy.",
        "GA: Grammar and punctuation are generally well controlled, and error-free sentences are frequent.",
        "GA: A few errors in grammar may persist, but these do not impede communication."],
    6: ["TR: The main parts of the prompt are addressed (though some may be more fully covered than others). An appropriate format is used.",
        "TR: A position is presented that is directly relevant to the prompt, although the conclusions drawn may be unclear, unjustified or repetitive.",
        "TR: Main ideas are relevant, but some may be insufficiently developed or may lack clarity, while some supporting arguments and evidence may be less relevant or inadequate.",
        "TA: The response focuses on the requirements of the task and an appropriate format is used.",
        "TA: Key features which are selected are covered and adequately highlighted. A relevant overview is attempted. Information is appropriately selected and supported using figures/data.",
        "TA: Some irrelevant, inappropriate or inaccurate information may occur in areas of detail or when illustrating or extending the main points.",
        "TA: Some details may be missing (or excessive) and further extension or illustration may be needed.",
        "CC: Information and ideas are generally arranged coherently and there is a clear overall progression.",
        "CC: Cohesive devices are used to some good effect but cohesion within and/or between sentences may be faulty or mechanical due to misuse, overuse or omission.",
        "CC: The use of reference and substitution may lack flexibility or clarity and result in some repetition or error",
        "LR: The resource is generally adequate and appropriate for the task.",
        "LR: The meaning is generally clear in spite of a rather restricted range or a lack of precision in word choice.",
        "LR: If the writer is a risk-taker, there will be a wider range of vocabulary used but higher degrees of inaccuracy or inappropriacy",
        "LR: There are some errors in spelling and/or word formation, but these do not impede communication.",
        "GA: A mix of simple and complex sentence forms is used but flexibility is limited.",
        "GA: Examples of more complex structures are not marked by the same level of accuracy as in simple structures.",
        "GA: Errors in grammar and punctuation occur, but rarely impede communication"],
    5: ["TR: The main parts of the prompt are incompletely addressed. The format may be inappropriate in places.",
        "TR: The writer expresses a position, but the development is not always clear.",
        "TR: Some main ideas are put forward, but they are limited and are not sufficiently developed and/or there may be irrelevant detail.",
        "TR: There may be some repetition.",
        "TA: The response generally addresses the requirements of the task. The format may be inappropriate in places.",
        "TA: Key features which are selected are not adequately covered. The recounting of detail is mainly mechanical. There may be no data to support the description.",
        "TA: There may be a tendency to focus on details (without referring to the bigger picture).",
        "TA: The inclusion of irrelevant, inappropriate or inaccurate material in key areas detracts from the task achievement.",
        "TA: There is limited detail when extending and illustrating the main points",
        "CC: Organisation is evident but is not wholly logical and there may be a lack of overall progression. Nevertheless, there is a sense of underlying coherence to the response.",
        "CC: The relationship of ideas can be followed but the sentences are not fluently linked to each other.",
        "CC: There may be limited/overuse of cohesive devices with some inaccuracy.",
        "CC: The writing may be repetitive due to inadequate and/or inaccurate use of reference and substitution.",
        "LR: The resource is limited but minimally adequate for the task.",
        "LR: Simple vocabulary may be used accurately but the range does not permit much variation in expression.",
        "LR: There may be frequent lapses in the appropriacy of word choice, and a lack of flexibility is apparent in frequent simplifications and/or repetitions.",
        "LR: Errors in spelling and/or word formation may be noticeable and may cause some difficulty for the reader.",
        "GA: The range of structures is limited and rather repetitive.",
        "GA: Although complex sentences are attempted, they tend to be faulty, and the greatest accuracy is achieved on simple sentences.",
        "GA: Grammatical errors may be frequent and cause some difficulty for the reader.",
        "GA: Punctuation may be faulty."],
    4: ["TR: The prompt is tackled in a minimal way, or the answer is tangential, possibly due to some misunderstanding of the prompt. The format may be inappropriate.",
        "TR: A position is discernible, but the reader has to read carefully to find it.",
        "TR: Main ideas are difficult to identify and such ideas that are identifiable may lack relevance, clarity and/or support.",
        "TR: Large parts of the response may be repetitive.",
        "TA: The response is an attempt to address the task.",
        "TA: Few key features have been selected.",
        "TA: The format may be inappropriate.",
        "TA: Key features/bullet points which are presented may be irrelevant, repetitive, inaccurate or inappropriate.",
        "CC: Information and ideas are evident but not arranged coherently, and there is no clear progression within the response.",
        "CC: Relationships between ideas can be unclear and/or inadequately marked. There is some use of basic cohesive devices, which may be inaccurate or repetitive.",
        "CC: There is inaccurate use or a lack of substitution or referencing.",
        "LR: The resource is limited and inadequate for or unrelated to the task. Vocabulary is basic and may be used repetitively.",
        "LR: There may be inappropriate use of lexical chunks (e.g. memorised phrases, formulaic language and/or language from the input material).",
        "LR: Inappropriate word choice and/or errors in word formation and/or in spelling may impede meaning.",
        "GA: A very limited range of structures is used.",
        "GA: Subordinate clauses are rare and simple sentences predominate.",
        "GA: Some structures are produced accurately but grammatical errors are frequent and may impede meaning.",
        "GA: Punctuation is often faulty or inadequate"],
    3: ["TR: No part of the prompt is adequately addressed, or the prompt has been misunderstood.",
        "TR: No relevant position can be identified, and/or there is little direct response to the question/s.",
        "TR: There are few ideas, and these may be irrelevant or insufficiently developed.",
        "TA: The response does not address the requirements of the task (possibly because of misunderstanding of the data/diagram/situation).",
        "TA: Key features/bullet points which are presented may be largely irrelevant",
        "TA: Limited information is presented, and this may be used repetitively.",
        "CC: There is no apparent logical organisation. Ideas are discernible but difficult to relate to each other.",
        "CC: Minimal use of sequencers or cohesive devices. Those used do not necessarily indicate a logical relationship between ideas.",
        "CC: There is difficulty in identifying referencing",
        "LR: The resource is inadequate (which may be due to the response being significantly underlength).",
        "LR: Possible over-dependence on input material or memorised language.",
        "LR: Control of word choice and/or spelling is very limited, and errors predominate. These errors may severely impede meaning.",
        "GA: Sentence forms are attempted, but errors in grammar and punctuation predominate (except in memorised phrases or those taken from the input material). This prevents most meaning from coming through.",
        "GA: Length may be insufficient to provide evidence of control of sentence forms."],
    2: ["TR: The content is barely related to the prompt",
        "TR: No position can be identified.",
        "TR: There may be glimpses of one or two ideas without development.",
        "TA: The content barely relates to the task.",
        "CC: There is little relevant message, or the entire response may be off-topic.",
        "CC: There is little evidence of control of organisational features",
        "LR: The resource is extremely limited with few recognisable strings, apart from memorised phrases.",
        "LR: There is no apparent control of word formation and/or spelling.",
        "GA: There is little or no evidence of sentence forms (except in memorised phrases)."],
    1: ["TR: Responses of 20 words or fewer",
        "TR: The content is wholly unrelated to the prompt.",
        "TR: Any copied rubric must be discounted",
        "TA: Responses of 20 words or fewer.",
        "TA: The content is wholly unrelated to the task.",
        "TA: Any copied rubric must be discounted.",
        "CC: Responses of 20 words or fewer",
        "CC: The writing fails to communicate any message and appears to be by a virtual non-writer",
        "LR: Responses of 20 words or fewer",
        "LR: No resource is apparent, except for a few isolated words.",
        "GA: Responses of 20 words or fewer",
        "GA: No rateable language is evident."]
    // # Add more descriptions for other bands here
}

var writing_band_categories = ["TR", "TA", "CC", "LR", "GA"]

// the default setting is an object with keys from speaking_band_categories and writing_band_categories
// how to write each key, from speaking it start with "S_" then the value
// writing start with "W_" then the value
// the default value is 1
var getStoredExamSettings = () => localStorage.getItem("exam_settings") ?
    JSON.parse(localStorage.getItem("exam_settings")) :
    {
        // S_FC: 1,
        // S_LR: 1,
        // S_GA: 1,
        // S_P: 1,
        // W_TR: 1,
        // W_TA: 1,
        // W_CC: 1,
        // W_LR: 1,
        // W_GA: 1
        "Band 1": 1,
        "Band 2": 1,
        "Band 3": 1,
        "Band 4": 1,
        "Band 5": 1,
        "Band 6": 1,
        "Band 7": 1,
        "Band 8": 1,
        "Band 9": 1
    }

var setStoredExamSettings = settings => localStorage.setItem("exam_settings", JSON.stringify(settings))

var getPreferredSetting = () => {
    const storedSettings = getStoredExamSettings()
    if (storedSettings) {
        return storedSettings
    }
}

var exam_types = ["Speaking", "Writing"]
var getExamType = () => {
    const storedType = localStorage.getItem("exam_type")
    if (storedType) {
        return storedType
    }
    return "Speaking"
}
var setExamType = type => localStorage.setItem("exam_type", type)
var deleteExamType = () => localStorage.removeItem("exam_type")
deleteExamType()

var exam_question_types = ["Band to Description", "Description to Band"]
var getExamQuestionType = () => {
    const storedType = localStorage.getItem("exam_question_type")
    if (storedType) {
        return storedType
    }
    return "Band to Description"
}
var setExamQuestionType = type => localStorage.setItem("exam_question_type", type)
var deleteExamQuestionType = () => localStorage.removeItem("exam_question_type")
deleteExamQuestionType()


// used to mirror the settings band freqency to make sure the amount of bands appears as intended randomly
var current_question_freq = {}
var getAQuestionBand = () => {
    // make sure the current question frequency is not empty
    if (JSON.stringify(current_question_freq) == "{}") {
        current_question_freq = getPreferredSetting()

        // remove the band that has a value of 0
        for (const key in current_question_freq) {
            if (current_question_freq[key] == 0) {
                delete current_question_freq[key]
            }
        }
    }


    // get a random key and value from current_question_freq
    const keys = Object.keys(current_question_freq)
    const key = keys[Math.floor(Math.random() * keys.length)]
    const value = current_question_freq[key]
    // when choosing, the value of the key will be decreased by 1
    current_question_freq[key] = value - 1
    // if the value is 0, remove the key from the object
    if (current_question_freq[key] === 0) {
        delete current_question_freq[key]
    }

    return `${key}`.replace("Band ", "")
}

// get a random value from the array, the excludeArr is intended to make sure the value does not appear again
var getRandomValueFromArray = (arr, excludeArr) => {
    let randomIndex = Math.floor(Math.random() * arr.length)
    let result = arr[randomIndex]
    if (excludeArr) {
        while (excludeArr.includes(result)) {
            randomIndex = Math.floor(Math.random() * arr.length)
            result = arr[randomIndex]
        }
    }
    return result
}

// a random value from 1 to 9, with an optional min and max value
var randomIntOneToNine = (min = 1, max = 9) => Math.floor(Math.random() * (max - min + 1)) + min

// the most imprtant function, generate a quiz with provided settings
var generate_random_question = () => {

    // get exam type
    const exam_type = getExamType()
    // depend on exam type, get the appropriate descriptions object
    const descriptions = exam_type === "Speaking" ? speaking_descriptions : writing_descriptions

    // get exam question type
    const exam_question_type = getExamQuestionType()

    let key = getAQuestionBand()
    let data = {}

    // the key is formatted as "Band 1", "Band 2", etc. So the real band number is get by remove the "Band " part
    // if exam question type is "Band to Description", the question will be the band number
    // pick 4 to 10 string from the descriptions object field (each field is a string array)
    if (exam_question_type === "Band to Description") {
        let pickedDescriptions = []
        let amountOfAnswers = Math.floor(Math.random() * (10 - 4 + 1)) + 4
        const atLeastOne = getRandomValueFromArray(descriptions[key])
        pickedDescriptions.push(atLeastOne)
        let answers = [{
            band: key,
            answer: atLeastOne
        }]
        amountOfAnswers--
        for (let i = 0; i < amountOfAnswers; i++) {
            // const randomBand = randomIntOneToNine()
            // the randomBand is not too far from the key, the min max value is randomly 0 to 2 away from the key
            let randomBand = Number(key) + (Math.floor(Math.random() * 5) - 2);
            // if (randomBand < 1) randomBand = 1
            // if (randomBand > 9) randomBand = 9
            randomBand = Math.max(1, Math.min(randomBand, 9))
            const randomDescription = getRandomValueFromArray(descriptions[randomBand], pickedDescriptions)
            pickedDescriptions.push(randomDescription)
            // decide at random whether to unshift or push the new answer
            if (randomIntOneToNine() < 5) {
                answers.unshift({
                    band: `${randomBand}`,
                    answer: randomDescription,
                })
            } else {
                answers.push({
                    band: `${randomBand}`,
                    answer: randomDescription,
                })
            }
        }
        data = {
            question: key,
            answers: answers,
            exam_type: exam_type,
            exam_question_type: exam_question_type,
        }
    }
    // with at least 1 string from the band picked from current_question_freq from before
    // if exam question type is "Description to Band", the question will be the string picked from the descriptions object
    if (exam_question_type === "Description to Band") {
        data = {
            question: getRandomValueFromArray(descriptions[key]),
            answers: key,
            exam_type: exam_type,
            exam_question_type: exam_question_type,
        }
    }

    return data
}

// console.log(generate_random_question())