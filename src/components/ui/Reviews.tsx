import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
}

interface ReviewsProps {
  businessId: string;
  apiKey: string;
}

interface ReviewModalProps {
  review: Review;
  onClose: () => void;
}

declare const google: any;

const Modal = ({ review, onClose }: ReviewModalProps) => (
  <div
    className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center"
    aria-modal="true"
    role="dialog"
  >
    <div
      key={review.id}
      className="relative z-60 w-[320px] min-[500px]:w-[420px] md:w-[510px] lg:w-[510px] h-auto py-10 flex flex-col rounded-3xl bg-gradient-to-br from-[#f9dcb1] to-[#ffc76dd0] drop-shadow-2xl"
      style={{ backdropFilter: "blur(35px)" }}
    >
      <div className="px-6">
        <div className="flex items-center">
          <span className="font-semibold tracking-tighter">
            {review.author.split(" ")[0]} &nbsp;
            {review.author.split(" ")[1]?.[0].toUpperCase()}.
          </span>
          <span className="ml-2 text-yellow-500">{"★".repeat(review.rating)}</span>
        </div>
        <p className="text-[#452B1F] mt-1.5">{review.text}</p>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold py-1.5 px-3 rounded-xl"
          aria-label="Close modal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

const Reviews: React.FC<ReviewsProps> = ({ businessId, apiKey }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const [debouncedBusinessId] = useDebounce(businessId, 500);

  useEffect(() => {
    const fetchReviews = async () => {
      if (typeof window === 'undefined' || !window.google) {
        setError('Google Maps API not loaded');
        setLoading(false);
        return;
      }

      try {
        const service = new google.maps.places.PlacesService(document.createElement('div'));
        service.getDetails(
          {
            placeId: businessId,
            fields: ['reviews'],
          },
          (place: google.maps.places.PlaceResult | null, status: google.maps.places.PlacesServiceStatus) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
              const filteredReviews = place.reviews
                .filter((review) => (review.rating ?? 0) >= 4)
                .map((review: google.maps.places.PlaceReview) => ({
                  id: review.time.toString(),
                  author: review.author_name,
                  rating: review.rating ?? 0,
                  text: review.text ?? '',
                }))
                .slice(0, 3);

              setReviews(filteredReviews);
            } else {
              setError('No reviews available');
            }
            setLoading(false);
          }
        );
      } catch (err) {
        setError('Failed to fetch reviews');
        setLoading(false);
      }
    };

    fetchReviews();
  }, [businessId, apiKey, debouncedBusinessId]);

  const handleModalOpen = (review: Review) => {
    document.body.style.overflow = 'hidden';
    setSelectedReview(review);
  };

  const handleModalClose = () => {
    document.body.style.overflow = 'auto';
    setSelectedReview(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {selectedReview && <Modal review={selectedReview} onClose={handleModalClose} />}
      <section className="space-y-4 lg:space-y-0 lg:space-x-6 lg:flex mb-16">
        {reviews.map((review) => (
          <div
            key={review.id}
            onClick={() => handleModalOpen(review)}
            className="relative w-[300px] min-[500px]:w-[348px] md:w-[445px] lg:w-[285px] xl:w-[320px] h-[150px] flex-grow flex items-center justify-between rounded-3xl bg-gradient-to-br from-[#f9dcb157] to-[#ffc76d81] drop-shadow-2xl cursor-pointer"
          >
            <div className="absolute top-5 -left-2">
              <img
                src="src/assets/review-icon.svg"
                alt="Review author photo"
                className="w-[55px] h-auto rounded-2xl p-1.5 bg-gradient-to-tl from-[#7F0201] via-[#A52A2A] to-[#FFC66D]"
              />
            </div>
            <div className="ml-12 px-4">
              <div className="flex items-center">
                <span className="font-semibold tracking-tighter">
                  {review.author.split(" ")[0]} &nbsp;
                  {review.author.split(" ")[1]?.[0].toUpperCase()}.
                </span>
                <span className="ml-2 text-yellow-500">{"★".repeat(review.rating)}</span>
              </div>
              <p className="text-[#452B1F] max-h-16 mt-1.5 tracking-tighter line-clamp-3">
                {review.text}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Reviews;