import fs from 'fs';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';

const DATA_FILE = path.join(process.cwd(), 'data', 'announcements.json');

export async function updateAnnouncements(): Promise<{ success: boolean; data?: string[]; error?: any }> {
    try {
        const apiKey = process.env.GEMINI_API_KEY;

        // If no API key, we can't update, but we shouldn't crash the build.
        if (!apiKey) {
            console.warn("GEMINI_API_KEY is missing. Skipping update.");
            return { success: false, error: "Missing API Key" };
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        // Read current announcements to use as context
        let currentMessages = [];
        try {
            if (fs.existsSync(DATA_FILE)) {
                const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
                currentMessages = JSON.parse(fileContent);
            }
        } catch (e) {
            console.warn("Could not read current announcements", e);
            // Fallback default if file missing/corrupt
            currentMessages = [
                "Welcome to Ahsaan Traders - Karachi's Trusted Waterproofing Experts",
                "Get a Free Consultation Today: 0300-8235699",
                "Premium Quality Heat Proofing & Roof Waterproofing Services",
                "Special Discount on Commercial Projects"
            ];
        }

        const prompt = `
        You are an SEO expert for a construction company "Ahsaan Traders".
        Rewrite the following 4 announcement bar messages to be fresh, engaging, and professional.
        Requirement:
        1. Keep the phone number 0300-8235699 exactly as is in at least one message.
        2. Keep the core services (Waterproofing, Heat Proofing) mentioned.
        3. Make them distinct from the previous version but maintain the professional tone.
        4. Max length 80 characters per message.
        5. Return ONLY a raw JSON array of 4 strings. No markdown formatting.

        Previous messages:
        ${JSON.stringify(currentMessages)}
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Clean up markdown if present
        const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();

        let newAnnouncements: string[];
        try {
            newAnnouncements = JSON.parse(jsonStr);
        } catch (e) {
            console.error("Failed to parse Gemini response as JSON", text);
            return { success: false, error: "Invalid JSON response" };
        }

        if (Array.isArray(newAnnouncements) && newAnnouncements.length > 0) {
            // Validate length
            const validated = newAnnouncements.slice(0, 4).map(s => String(s).substring(0, 100));

            // Ensure directory exists
            const dir = path.dirname(DATA_FILE);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

            fs.writeFileSync(DATA_FILE, JSON.stringify(validated, null, 4));
            return { success: true, data: validated };
        }

        return { success: false, error: "Invalid format returned" };
    } catch (error) {
        console.error("Update content failed", error);
        return { success: false, error };
    }
}
