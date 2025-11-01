"use server"
import {WeatherData} from "@/types/WeatherData";


const apiKey = process.env.API_KEY;

export async function getWeather(){

    if (!apiKey) {
        throw new Error("API key not configured");
    }

    try {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/boston?unitGroup=us&key=${apiKey}&contentType=json`;
        // console.log(url);
        const response = await fetch(url);
        // console.log("Response", response);

        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        // console.log(data);
        // console.log(data.currentConditions.windspeed);

        return {
            location: data.resolvedAddress,
            temperature: data.currentConditions.temp,
            conditions: data.currentConditions.conditions,
            humidity: data.currentConditions.humidity,
            windSpeed: data.currentConditions.windspeed,
        };
    } catch (error) {
        return null;
    }
}