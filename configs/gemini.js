import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(prompt) {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: prompt,
        });
        
        // () Hata diya hai, kyunki ye ek string property hai function nahi
        return response.text; 
    } catch (error) {
        console.error("AI Generation Error:", error);
        throw error;
    }
}

export default main;

// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// async function main(prompt) { // Prompt ka spelling bhi 'prompt' kar diya
//     try {
//         const response = await ai.models.generateContent({
//             model: "gemini-3.5-flash", // 'models' ko 'model' kar diya
//             contents: prompt,
//         });
        
//         return response.text(); // Yahan () lagana zaroori hai
//     } catch (error) {
//         console.error("AI Generation Error:", error);
//         throw error;
//     }
// }

// export default main;

// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

// async function main(propmt) {
//     const response = await ai.models.generateContent({
//         model: "gemini-3.5-flash",
//         contents: propmt,
//     });
//     return response.text()
// }
// export default main;

// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({});

// const interaction = await ai.interactions.create({
//   model: "gemini-3.5-flash",
//   input: "Explain how AI works in a few words",
// });
// console.log(interaction.output_text);

