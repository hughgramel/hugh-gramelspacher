'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';

export interface UserMovie {
    title: string;
    year: number;
    slug: string;
    imdb_id: string;
    tmdb_id: number;
    poster_path: string | null;
    rating: number | null;
    watched_at: string;
    status: 'watched' | 'watchlist';
}

interface MoviesClientProps {
    initialMovies: UserMovie[];
}

type SortOption = 'date' | 'rating' | 'title';

const SECTIONS = [
    { id: 'watched', title: 'Watched' },
    { id: 'watchlist', title: 'Watchlist' },
];

export default function MoviesClient({ initialMovies }: MoviesClientProps) {
    const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
    const [sortBy, setSortBy] = useState<SortOption>('date');

    const handleImageError = (slug: string) => {
        setImageErrors(prev => new Set(prev).add(slug));
    };

    const sortedMovies = useMemo(() => {
        return [...initialMovies].sort((a, b) => {
            // Keep sections separate
            if (a.status !== b.status) {
                return a.status === 'watched' ? -1 : 1;
            }

            switch (sortBy) {
                case 'date':
                    return new Date(b.watched_at).getTime() - new Date(a.watched_at).getTime();
                case 'rating':
                    return (b.rating || 0) - (a.rating || 0);
                case 'title':
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        });
    }, [initialMovies, sortBy]);

    return (
        <div className="space-y-8">
            {/* Sort Controls */}
            <div className="flex items-center gap-3">
                <label htmlFor="sort" className="text-sm text-gray-500">
                    Sort by
                </label>
                <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="text-sm border border-gray-200 rounded-md px-3 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-gray-300"
                >
                    <option value="date">Date Watched</option>
                    <option value="rating">Rating</option>
                    <option value="title">Title</option>
                </select>
            </div>

            {SECTIONS.map((section) => {
                const sectionMovies = sortedMovies.filter(
                    (movie) => movie.status === section.id
                );

                if (sectionMovies.length === 0) return null;

                return (
                    <section key={section.id} className="space-y-4">
                        <h2 className="text-lg font-medium tracking-tight border-b border-gray-100 pb-2 flex items-baseline">
                            {section.title}
                            <span className="text-lg text-gray-300 ml-2 font-light">
                                ({sectionMovies.length})
                            </span>
                        </h2>

                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                            {sectionMovies.map((movie) => {
                                const hasImageError = imageErrors.has(movie.slug);

                                return (
                                    <div key={movie.slug} className="group flex flex-col space-y-1.5">
                                        {/* Poster */}
                                        <div className="relative aspect-[2/3] w-full overflow-hidden rounded bg-gray-100 shadow-sm">
                                            {movie.poster_path && !hasImageError ? (
                                                <Image
                                                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                                    alt={movie.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 12.5vw"
                                                    onError={() => handleImageError(movie.slug)}
                                                    unoptimized
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400 text-[10px] uppercase tracking-wide p-2 text-center leading-tight">
                                                    {movie.title}
                                                </div>
                                            )}
                                        </div>

                                        {/* Text */}
                                        <div className="flex flex-col">
                                            {/* Fixed height for title */}
                                            <h3 className="text-xs font-medium leading-tight text-gray-900 line-clamp-1 h-[1rem]">
                                                {movie.title}
                                            </h3>
                                            {/* Fixed height for year/date */}
                                            <p className="text-[10px] text-gray-400 h-[0.875rem]">
                                                {movie.year} · {new Date(movie.watched_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                            </p>

                                            {section.id === 'watched' && movie.rating && (
                                                <div className="flex items-center text-yellow-500 mt-0.5">
                                                    {Array.from({ length: 10 }).map((_, i) => (
                                                        <span
                                                            key={i}
                                                            className={`text-[8px] ${
                                                                i < movie.rating! ? 'opacity-100' : 'opacity-20'
                                                            }`}
                                                        >
                                                            ★
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                );
            })}

            {initialMovies.length === 0 && (
                <div className="py-12 text-center text-gray-400">
                    <p>No movies found.</p>
                </div>
            )}
        </div>
    );
}
