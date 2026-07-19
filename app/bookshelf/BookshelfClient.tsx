import Image from 'next/image';

export interface HardcoverBook {
    title: string;
    pages: number | null;
    image: {
        url: string;
    };
    cached_contributors: Array<{
        author: {
            name: string;
        };
        name?: string;
    }>;
}

export interface UserBookRead {
    progress_pages: number | null;
    started_at: string | null;
    finished_at: string | null;
    edition: {
        pages: number | null;
    } | null;
}

export interface UserBook {
    status_id: number;
    rating: number | null;
    review_raw: string | null;
    date_added: string;
    user_book_reads: UserBookRead[];
    book: HardcoverBook;
}

interface BookshelfClientProps {
    initialBooks: UserBook[];
}

const SECTIONS = [
    { id: 2, title: 'Currently Reading' },
    { id: 3, title: 'Read' },
    { id: 5, title: 'Did Not Finish' },
    { id: 1, title: 'Want to Read' },
];

export default function BookshelfClient({ initialBooks }: BookshelfClientProps) {
    return (
        <div>
            <div className="grid gap-12 items-start">

                <div className="space-y-8">
                    {SECTIONS.map((section) => {
                        const sectionBooks = initialBooks.filter(
                            (book) => book.status_id === section.id
                        );

                        if (sectionBooks.length === 0) return null;

                        return (
                            <section key={section.id} className="space-y-4">
                                <h2 className="text-lg font-medium tracking-tight border-b border-gray-100 pb-2 flex items-baseline">
                                    {section.title}
                                    <span className="text-lg text-gray-400 ml-2 font-normal">
                                        ({sectionBooks.length})
                                    </span>
                                </h2>

                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
                                    {sectionBooks.map((item, index) => {
                                        const authorName =
                                            item.book.cached_contributors?.[0]?.name ||
                                            item.book.cached_contributors?.[0]?.author?.name ||
                                            'Unknown Author';

                                        // Calculate reading progress for currently reading books
                                        const currentRead = item.user_book_reads?.[0];
                                        const currentPage = currentRead?.progress_pages || 0;
                                        const totalPages = currentRead?.edition?.pages || item.book.pages || 0;
                                        const progressPercent = totalPages > 0 ? Math.round((currentPage / totalPages) * 100) : 0;

                                        return (
                                            <div key={index} className="group flex flex-col space-y-1.5">
                                                {/* Cover */}
                                                <div className="relative aspect-[2/3] w-full overflow-hidden rounded bg-gray-100 shadow-sm">
                                                    {item.book.image?.url ? (
                                                        <Image
                                                            src={item.book.image.url}
                                                            alt={item.book.title}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 20vw"
                                                        />
                                                    ) : (
                                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400 text-[10px] uppercase tracking-wide p-2 text-center leading-tight">
                                                            {item.book.title}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Text */}
                                                <div className="flex flex-col">
                                                    {/* Fixed height for title */}
                                                    <h3 className="text-xs font-medium leading-tight text-gray-900 line-clamp-1 h-[1rem]">
                                                        {item.book.title}
                                                    </h3>
                                                    {/* Fixed height for author */}
                                                    <p className="text-[10px] font-medium text-gray-400 line-clamp-1 h-[0.875rem]">{authorName}</p>

                                                    {/* Progress bar for Currently Reading */}
                                                    {section.id === 2 && totalPages > 0 && (
                                                        <div className="pt-1 space-y-0.5">
                                                            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                                                                <div
                                                                    className="h-full bg-emerald-500 rounded-full transition-all"
                                                                    style={{ width: `${progressPercent}%` }}
                                                                />
                                                            </div>
                                                            <p className="text-[9px] text-gray-400">
                                                                {progressPercent}%
                                                            </p>
                                                        </div>
                                                    )}

                                                    {section.id === 3 && item.rating && (
                                                        <div className="flex items-center text-yellow-500 mt-0.5">
                                                            {Array.from({ length: 5 }).map((_, i) => (
                                                                <span
                                                                    key={i}
                                                                    className={`text-[8px] ${i < item.rating! ? 'opacity-100' : 'opacity-20'
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

                    {initialBooks.length === 0 && (
                        <div className="py-12 text-center text-gray-400">
                            <p>No books found.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
