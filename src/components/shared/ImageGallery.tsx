'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


type Props = {
    images: { imagePath: string; isPrimary?: boolean }[];
    userImage: string;
    price: string;
    title: string;
};

const ImageGallery: React.FC<Props> = ({ images, userImage, price, title }) => {
    const sortedImages = [...images].sort((a, b) => (b.isPrimary ? 1 : 0) - (a.isPrimary ? 1 : 0));
    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const openLightbox = (index: number) => {
        setActiveIndex(index);
        setLightboxOpen(true);
    };

    return (
        <section className="py-12 relative">
            <div className="mx-auto">
                <div className="flex flex-col justify-center gap-4 md:gap-5 lg:gap-6">
                    {/* Main Image */}
                    <div className="w-full relative  h-[300px] sm:h-[400px] md:h-[500px] lg:h-[627px] rounded-2xl overflow-hidden cursor-pointer" onClick={() => openLightbox(activeIndex)}>
                        <Image
                            src={sortedImages[activeIndex].imagePath}
                            alt="Main gallery"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1062px"
                            priority
                        />
                        {/* Overlay Content */}
                        <div className="absolute bottom-4 left-4 flex items-center gap-4 p-3 rounded-xl">
                            <div className="text-white text-end">
                                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-semibold">{price}</p>
                                <h2 className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold">{title}</h2>
                            </div>
                            <Image
                                src={userImage}
                                alt="User"
                                width={80}
                                height={80}
                                className="rounded-full w-[64px] sm:w-[72px] md:w-[80px] lg:w-[80px] h-[64px] sm:h-[72px] md:h-[80px] lg:h-[80px]"
                            />
                        </div>

                    </div>

                    {/* Thumbnails */}
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-4 md:justify-end">
                        <button className="image-next me-auto text-xl md:text-2xl lg:text-3xl">
                            <IoIosArrowForward />
                        </button>

                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.image-next',
                                prevEl: '.image-prev',
                            }}
                            spaceBetween={16}
                            centeredSlides={false}
                            breakpoints={{
                                0: {
                                    slidesPerView: 3,
                                    spaceBetween: 8,
                                },
                                640: {
                                    slidesPerView: 4,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 5,
                                    spaceBetween: 16,
                                },
                                1024: {
                                    slidesPerView: 6,
                                    spaceBetween: 20,
                                },
                            }}
                            loop
                            className="w-full"
                            wrapperClass='image-wrapper justify-end'
                        >
                            {sortedImages.map((img, idx) => (
                                <SwiperSlide key={idx} className='md:!w-fit'>
                                    <div
                                        className={`relative xs:w-[120px] lg:w-[150px] xl:w-[200px] h-[110px] rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-300 ${idx === activeIndex ? 'border-indigo-600' : 'border-gray-200'
                                            }`}
                                        onClick={() => setActiveIndex(idx)}
                                    >
                                        <Image
                                            src={img.imagePath}
                                            alt={`Thumbnail ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 200px"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button className='image-prev  me-auto text-xl md:text-2xl lg:text-3xl'>
                            <IoIosArrowBack />
                        </button>
                    </div>
                </div>

                {/* Lightbox */}
                {lightboxOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <span className="absolute top-6 right-8 text-white text-4xl cursor-pointer">&times;</span>
                        <div className="relative w-[90vw] h-[90vh]">
                            <Image
                                src={sortedImages[activeIndex].imagePath}
                                alt="Lightbox"
                                fill
                                className="object-contain"
                                sizes="90vw"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section >
    );
};

export default ImageGallery;
