import { useState } from 'react';
import SearchIcon from '../assets/images/icon-search.svg';

export default function SeachBar({ onSearch }) {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!query.trim()) {
            setError('Please enter a city name');
            return;
        }

        setLoading(true);
        setError('');

        try {
            // Use Open-Meteo Geocoding API
            const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`;
            const response = await fetch(geoUrl);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                const result = data.results[0];
                onSearch(result.latitude, result.longitude, result.name);
                setQuery(''); // Clear input after successful search
            } else {
                setError('City not found. Please try another name.');
            }
        } catch (err) {
            console.error('Geocoding error:', err);
            setError('Failed to search. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-10 px-8 gap-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                {/* Search Bar */}
                <div className="flex items-center gap-6 bg-neutral-800 border border-neutral-700 rounded-md px-4 py-2 mt-6 md:mt-0 w-full md:w-96">
                    <img src={SearchIcon} alt="Search Icon" />
                    <input
                        className="bg-transparent focus:outline-none flex-1 text-white"
                        type="text"
                        placeholder="Search for a place..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                        disabled={loading}
                    />
                </div>
                {/* Search Button */}
                <button 
                    onClick={handleSearch}
                    disabled={loading}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed rounded-md w-full md:w-28 text-base focus:outline-none focus:ring transition-colors"
                >
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </div>
            {/* Error Message */}
            {error && (
                <p className="text-red-400 text-sm mt-2">{error}</p>
            )}
        </div>
    )
}