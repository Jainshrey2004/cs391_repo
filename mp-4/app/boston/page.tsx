

import Link from "next/link";
import {getWeather} from "@/lib/getData";
export default async function Boston() {
    const weather = await getWeather();
    // console.log(weather);

    return (
        <div className="max-w-3xl mx-auto my-12 px-5">
            <h1 className="text-3xl font-bold text-white-800 mb-8">Boston Weather Today</h1>

            {!weather ? (
            <div className="bg-red-100 text-red-700 p-4 rounded mb-5">
                Unable to fetch weather data. Please try again later.
            </div>
            ) : (
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <p className="my-3 text-lg text-gray-950"><strong>Location:</strong> {weather.location}</p>
                <p className="my-3 text-lg text-gray-950"><strong>Temperature:</strong> {weather.temperature}°F</p>
                <p className="my-3 text-lg text-gray-950"><strong>Conditions:</strong> {weather.conditions}</p>
                <p className="my-3 text-lg text-gray-950"><strong>Humidity:</strong> {weather.humidity}%</p>
                <p className="my-3 text-lg text-gray-950"><strong>Wind Speed:</strong> {weather.windSpeed} mph</p>
            </div>
            )}

            <Link href="/" className="text-blue-600 hover:underline text-base">
                ← Back to Home
            </Link>
        </div>
    );
}