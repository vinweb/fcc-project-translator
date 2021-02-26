const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
    test("Translate Mangoes are my favorite fruit. to British English", () => {
        assert.equal(
            translator.amToBrit("Mangoes are my favorite fruit.").translation,
            'Mangoes are my <span class="highlight">favourite</span> fruit.'
        );
    });
    test("Translate I ate yogurt for breakfast. to British English", () => {
        assert.equal(
            translator.amToBrit("I ate yogurt for breakfast.").translation,
            'I ate <span class="highlight">yoghurt</span> for breakfast.'
        );
    });
    test("Translate We had a party at my friend's condo. to British English", () => {
        assert.equal(
            translator.amToBrit("We had a party at my friend's condo.")
                .translation,
            `We had a party at my friend's <span class="highlight">flat</span>.`
        );
    });
    test("Translate Can you toss this in the trashcan for me? to British English", () => {
        assert.equal(
            translator.amToBrit("Can you toss this in the trashcan for me?")
                .translation,
            `Can you toss this in the <span class="highlight">bin</span> for me?`
        );
    });
    test("Translate The parking lot was full. to British English", () => {
        assert.equal(
            translator.amToBrit("The parking lot was full.").translation,
            `The <span class="highlight">car park</span> was full.`
        );
    });
    test("Translate Like a high tech Rube Goldberg machine. to British English", () => {
        assert.equal(
            translator.amToBrit("Like a high tech Rube Goldberg machine.")
                .translation,
            `Like a high tech <span class="highlight">Heath Robinson device</span>.`
        );
    });
    test("Translate To play hooky means to skip class or work. to British English", () => {
        assert.equal(
            translator.amToBrit("To play hooky means to skip class or work.")
                .translation,
            `To <span class="highlight">bunk off</span> means to skip class or work.`
        );
    });
    test("Translate No Mr. Bond, I expect you to die. to British English", () => {
        assert.equal(
            translator.amToBrit("No Mr. Bond, I expect you to die.")
                .translation,
            `No <span class="highlight">Mr</span> Bond, I expect you to die.`
        );
    });
    test("Translate Dr. Grosh will see you now. to British English", () => {
        assert.equal(
            translator.amToBrit("Dr. Grosh will see you now.").translation,
            `<span class="highlight">Dr</span> Grosh will see you now.`
        );
    });
    test("Translate Lunch is at 12:15 today. to British English", () => {
        assert.equal(
            translator.amToBrit("Lunch is at 12:15 today.").translation,
            `Lunch is at <span class="highlight">12.15</span> today.`
        );
    });
    test("Translate We watched the footie match for a while. to American English", () => {
        assert.equal(
            translator.britToAm("We watched the footie match for a while.")
                .translation,
            `We watched the <span class="highlight">soccer</span> match for a while.`
        );
    });
    test("Translate Paracetamol takes up to an hour to work. to American English", () => {
        assert.equal(
            translator.britToAm("Paracetamol takes up to an hour to work.")
                .translation,
            `<span class="highlight">Tylenol</span> takes up to an hour to work.`
        );
    });
    test("Translate First, caramelise the onions. to American English", () => {
        assert.equal(
            translator.britToAm("First, caramelise the onions.").translation,
            `First, <span class="highlight">caramelize</span> the onions.`
        );
    });
    test("Translate I spent the bank holiday at the funfair. to American English", () => {
        assert.equal(
            translator.britToAm("I spent the bank holiday at the funfair.")
                .translation,
            `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`
        );
    });
    test("Translate I had a bicky then went to the chippy. to American English", () => {
        assert.equal(
            translator.britToAm("I had a bicky then went to the chippy.")
                .translation,
            `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`
        );
    });
    test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
        assert.equal(
            translator.britToAm("I've just got bits and bobs in my bum bag.")
                .translation,
            `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`
        );
    });
    test("Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
        assert.equal(
            translator.britToAm(
                "The car boot sale at Boxted Airfield was called off."
            ).translation,
            `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`
        );
    });
    test("Translate Have you met Mrs Kalyani? to American English", () => {
        assert.equal(
            translator.britToAm("Have you met Mrs Kalyani?").translation,
            `Have you met <span class="highlight">Mrs.</span> Kalyani?`
        );
    });
    test("Translate Prof Joyner of King's College, London. to American English", () => {
        assert.equal(
            translator.britToAm("Prof Joyner of King's College, London.")
                .translation,
            `<span class="highlight">Prof.</span> Joyner of King's College, London.`
        );
    });
    test("Translate Tea time is usually around 4 or 4.30. to American English", () => {
        assert.equal(
            translator.britToAm("Tea time is usually around 4 or 4.30.")
                .translation,
            `Tea time is usually around 4 or <span class="highlight">4:30</span>.`
        );
    });
    test("Highlight translation in Mangoes are my favorite fruit.", () => {
        assert.include(
            translator.amToBrit("Mangoes are my favorite fruit.").translation,
            `<span class="highlight">`
        );
    });
    test("Highlight translation in I ate yogurt for breakfast.", () => {
        assert.include(
            translator.amToBrit("I ate yogurt for breakfast.").translation,
            `<span class="highlight">`
        );
    });
    test("Highlight translation in We watched the footie match for a while.", () => {
        assert.include(
            translator.britToAm("We watched the footie match for a while.")
                .translation,
            `<span class="highlight">`
        );
    });
    test("Highlight translation in Paracetamol takes up to an hour to work.", () => {
        assert.include(
            translator.britToAm("Paracetamol takes up to an hour to work.")
                .translation,
            `<span class="highlight">`
        );
    });
});
