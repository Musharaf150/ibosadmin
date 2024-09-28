'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SunIcon, CloudIcon } from '@heroicons/react/24/solid';
import { weatherData } from '@/constants';
import Loader from './Loader';

const weatherIcons = {
  'sunny': <SunIcon className="h-8 w-8 text-yellow-400" />,
  'cloudy': <CloudIcon className="h-8 w-8 text-gray-400" />,
};

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];



const WeatherWidget= ()=> {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setWeather(weatherData);
    }, 1000);
  }, []);

  if (!weather) {
    return <Loader/>;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Weather Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            {weatherIcons[weather.current.condition]}
            <span className="text-4xl font-bold ml-2">{weather.current.temperature}°F</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">Humidity: {weather.current.humidity}%</p>
            <p className="text-sm text-gray-500">Wind: {weather.current.windSpeed} mph</p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {weather.forecast.map((day, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <p className="text-sm font-semibold">{day.day}</p>
              <div className="my-2">{weatherIcons[day.condition]}</div>
              <p className="text-sm">{day.temperature}°F</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default WeatherWidget;